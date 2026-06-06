// Shared Open Graph / Twitter image helper so every page exposes a proper
// 1200×630 social card for both OG and Twitter (Next does not copy OG images
// into the Twitter tags automatically).
type OgImage = { url: string; width: number; height: number; alt: string };

export function ogImages(file: string, alt: string): OgImage[] {
  return [{ url: `/og/${file}.png`, width: 1200, height: 630, alt }];
}
