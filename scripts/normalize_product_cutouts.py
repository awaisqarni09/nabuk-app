#!/usr/bin/env python3
"""Normalize the explicitly requested product images onto pure white.

The script is intentionally allow-listed. It backs up each source before any
write, removes the background with rembg's U2Net model, discards alpha-mask
components touching the canvas edge (typically baked-in decorative frames),
then recentres the remaining cutout with six percent padding.
"""

from __future__ import annotations

import shutil
from pathlib import Path

import numpy as np
from PIL import Image
from rembg import new_session, remove
from scipy import ndimage
from skimage.morphology import convex_hull_image


ROOT = Path(__file__).resolve().parents[1]
BACKUP_ROOT = ROOT / "originals-backup"
PRODUCT_ROOT = ROOT / "public/images/products"

EXTRA_TARGETS = (
    PRODUCT_ROOT / "eickemeyer/hiray-dental-x-ray-generator-stand-model.webp",
    PRODUCT_ROOT / "eickemeyer/icare-tonovet-pet-tonometer.webp",
    PRODUCT_ROOT / "melag/careclave.webp",
    PRODUCT_ROOT / "veterinary-instruments-co/vi-orthopaedic-starter-kit-standard.webp",
    PRODUCT_ROOT / "veterinary-instruments-co/cased-canine-spay-kit-left-handed.webp",
)


def target_paths() -> list[Path]:
    al_test = sorted((PRODUCT_ROOT / "al-test-china").glob("*.webp"))
    targets = [*al_test, *EXTRA_TARGETS]
    missing = [path for path in targets if not path.is_file()]
    if missing:
        raise FileNotFoundError("Missing target image(s):\n" + "\n".join(map(str, missing)))
    return targets


def remove_edge_components(rgba: Image.Image) -> Image.Image:
    pixels = np.asarray(rgba).copy()
    mask = pixels[:, :, 3] > 12
    original_foreground = int(mask.sum())
    labels, count = ndimage.label(mask)
    if count == 0:
        return rgba

    edge_labels = np.unique(
        np.concatenate((labels[0, :], labels[-1, :], labels[:, 0], labels[:, -1]))
    )
    edge_labels = edge_labels[edge_labels != 0]
    if edge_labels.size:
        pixels[:, :, 3][np.isin(labels, edge_labels)] = 0
    retained_foreground = int((pixels[:, :, 3] > 12).sum())

    # A physical product can occasionally connect to the image edge through a
    # cable or a baked-in frame. If edge cleanup would erase most of U2Net's
    # foreground, trust the semantic cutout instead of destroying the product.
    if original_foreground and retained_foreground / original_foreground < 0.25:
        return rgba
    return Image.fromarray(pixels, mode="RGBA")


def remove_flat_decorative_graphics(rgba: Image.Image) -> Image.Image:
    """Keep product-shaped regions and reject detached flat-color artwork.

    U2Net can classify saturated circles and border ribbons as foreground when
    they overlap a product pack. Physical products in this batch all have a
    substantial neutral housing, pouch, cassette, or box. Those neutral pixels
    form reliable seeds; a convex hull restores printed details inside each
    product while excluding large, flat graphics outside its silhouette.
    """

    pixels = np.asarray(rgba).copy()
    alpha = pixels[:, :, 3] > 12
    rgb = pixels[:, :, :3].astype(np.int16)
    chroma = rgb.max(axis=2) - rgb.min(axis=2)
    value = rgb.max(axis=2)
    neutral = alpha & ((chroma < 72) | (value < 96))

    bridge = max(2, min(alpha.shape) // 150)
    neutral = ndimage.binary_dilation(neutral, iterations=bridge)
    labels, count = ndimage.label(neutral)
    minimum_seed_area = max(32, round(alpha.size * 0.00025))
    support = np.zeros_like(alpha)

    for label in range(1, count + 1):
        component = labels == label
        if int(component.sum()) < minimum_seed_area:
            continue
        ys, xs = np.where(component)
        y0, y1 = int(ys.min()), int(ys.max()) + 1
        x0, x1 = int(xs.min()), int(xs.max()) + 1
        local_component = component[y0:y1, x0:x1]
        hull = convex_hull_image(local_component)
        seed_pixels = rgb[component & alpha]
        solidity = float(component.sum()) / float(hull.sum())
        dark_fraction = float((seed_pixels.max(axis=1) < 140).mean())
        bright_fraction = float((seed_pixels.min(axis=1) > 190).mean())

        # Pale anti-aliased rings around a flat colored circle can look neutral
        # enough to become a seed. They are sparse, bright, and contain no dark
        # product detail; real housings, packs, screens, and cables do not share
        # that combination.
        if solidity < 0.72 and dark_fraction < 0.01 and bright_fraction > 0.50:
            continue

        # Rectangular product bodies sometimes touch a colored corner tab by
        # only a thin pale wedge. Trim low-occupancy lobes before taking the
        # hull so that wedge cannot expand into retained artwork.
        if solidity > 0.85:
            strong_rows = np.where(local_component.mean(axis=1) >= 0.20)[0]
            strong_columns = np.where(local_component.mean(axis=0) >= 0.80)[0]
            if strong_rows.size and strong_columns.size:
                ry0, ry1 = int(strong_rows.min()), int(strong_rows.max()) + 1
                rx0, rx1 = int(strong_columns.min()), int(strong_columns.max()) + 1
                y0, y1 = y0 + ry0, y0 + ry1
                x0, x1 = x0 + rx0, x0 + rx1
                local_component = component[y0:y1, x0:x1]
                hull = convex_hull_image(local_component)
        support[y0:y1, x0:x1] |= hull

    refined = alpha & support

    # Remove small orphan components that contain neither a neutral product
    # body nor dark physical detail. This catches colored arcs and corner tabs
    # whose pale anti-aliased rims survived the seed stage, while preserving
    # small white cassettes and dark accessories.
    refined_labels, refined_count = ndimage.label(refined)
    refined_areas = [int((refined_labels == label).sum()) for label in range(1, refined_count + 1)]
    if refined_areas:
        largest_area = max(refined_areas)
        minimum_component_area = max(12, round(alpha.size * 0.00005))
        for label, area in enumerate(refined_areas, start=1):
            component = refined_labels == label
            component_pixels = rgb[component]
            component_chroma = component_pixels.max(axis=1) - component_pixels.min(axis=1)
            component_value = component_pixels.max(axis=1)
            neutral_fraction = float(((component_chroma < 72) | (component_value < 96)).mean())
            saturated_fraction = float(((component_chroma >= 72) & (component_value >= 96)).mean())
            dark_fraction = float((component_value < 140).mean())
            orphan_artwork = (
                area < largest_area * 0.50
                and dark_fraction < 0.01
                and (neutral_fraction < 0.75 or saturated_fraction > 0.08)
            )
            if area < minimum_component_area or orphan_artwork:
                refined[component] = False

    # Fall back only when no meaningful seeded object remains. A relative-area
    # fallback is unsafe here because a large decorative circle can dominate
    # U2Net's mask while the valid white cassette is intentionally much smaller.
    if refined.sum() < max(32, round(alpha.size * 0.002)):
        return rgba

    pixels[:, :, 3][~refined] = 0
    return Image.fromarray(pixels, mode="RGBA")


def padded_white_canvas(cutout: Image.Image, size: tuple[int, int]) -> tuple[Image.Image, float]:
    alpha = np.asarray(cutout.getchannel("A"))
    foreground = np.argwhere(alpha > 12)
    if foreground.size == 0:
        raise ValueError("No foreground remained after background removal")

    y0, x0 = foreground.min(axis=0)
    y1, x1 = foreground.max(axis=0) + 1
    crop = cutout.crop((int(x0), int(y0), int(x1), int(y1)))

    width, height = size
    usable_width = max(1, round(width * 0.88))
    usable_height = max(1, round(height * 0.88))
    scale = min(usable_width / crop.width, usable_height / crop.height)
    new_size = (max(1, round(crop.width * scale)), max(1, round(crop.height * scale)))
    crop = crop.resize(new_size, Image.Resampling.LANCZOS)

    canvas = Image.new("RGBA", size, (255, 255, 255, 255))
    position = ((width - new_size[0]) // 2, (height - new_size[1]) // 2)
    canvas.alpha_composite(crop, position)

    scaled_alpha = np.asarray(crop.getchannel("A")) > 12
    coverage = float(scaled_alpha.sum()) / float(width * height)
    return canvas.convert("RGB"), coverage


def main() -> None:
    targets = target_paths()
    session = new_session("u2net")
    flagged: list[tuple[Path, float]] = []

    for index, path in enumerate(targets, start=1):
        relative = path.relative_to(ROOT)
        backup = BACKUP_ROOT / relative
        backup.parent.mkdir(parents=True, exist_ok=True)
        if not backup.exists():
            shutil.copy2(path, backup)

        # Always process the pristine backup. This makes reruns deterministic
        # and prevents repeatedly applying segmentation to a prior result.
        with Image.open(backup) as source:
            source = source.convert("RGBA")
            original_size = source.size
            cutout = remove(
                source,
                session=session,
                alpha_matting=True,
                alpha_matting_foreground_threshold=240,
            ).convert("RGBA")

        cutout = remove_edge_components(cutout)
        cutout = remove_flat_decorative_graphics(cutout)
        normalized, coverage = padded_white_canvas(cutout, original_size)
        normalized.save(path, "WEBP", quality=95, method=6)

        if coverage < 0.20 or coverage > 0.95:
            flagged.append((relative, coverage))
        print(f"[{index:02d}/{len(targets):02d}] {relative} — foreground {coverage:.1%}")

    print("\nReview report")
    if not flagged:
        print("No images fell outside the 20%–95% foreground range.")
    else:
        for path, coverage in flagged:
            print(f"FLAG {path} — foreground {coverage:.1%}")

    print(f"\nOriginals backed up under: {BACKUP_ROOT.relative_to(ROOT)}")


if __name__ == "__main__":
    main()
