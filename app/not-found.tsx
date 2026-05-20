import Link from "next/link";

const PAW_PATH =
  "M11.35 3.836c-.065.21-.1.433-.1.664 0 1.21.847 2.193 1.892 2.193.025 0 .05 0 .074-.002.297.165.534.405.708.682.49.802.81 1.825.61 2.7-.205.91-.864 1.4-1.62 1.4-.756 0-1.418-.49-1.62-1.4-.2-.875.12-1.898.61-2.7.174-.277.41-.517.708-.682.025.002.05.002.074.002 1.045 0 1.892-.983 1.892-2.193 0-.23-.035-.453-.1-.664-.165-.55-.5-.997-.93-1.27a2.06 2.06 0 0 0-2.092 0c-.43.273-.766.72-.93 1.27zM4.5 8.5c0 1.105.672 2 1.5 2s1.5-.895 1.5-2-.672-2-1.5-2-1.5.895-1.5 2zm12 0c0 1.105.672 2 1.5 2s1.5-.895 1.5-2-.672-2-1.5-2-1.5.895-1.5 2zm-9 4c0 1.105.672 2 1.5 2s1.5-.895 1.5-2-.672-2-1.5-2-1.5.895-1.5 2zm6 0c0 1.105.672 2 1.5 2s1.5-.895 1.5-2-.672-2-1.5-2-1.5.895-1.5 2zM7.5 18a4.5 4.5 0 0 1 9 0c0 1.5-1 2.5-2.5 2.5h-4C8.5 20.5 7.5 19.5 7.5 18z";

export default function NotFound() {
  return (
    <main style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: "80px 20px", minHeight: "60vh" }}>
      <div style={{ textAlign: "center", maxWidth: "480px" }}>
        <svg viewBox="0 0 24 24" fill="rgba(43,107,107,0.12)" width={80} height={80}
          style={{ margin: "0 auto 24px" }} aria-hidden="true">
          <path d={PAW_PATH} />
        </svg>
        <p style={{
          fontFamily: "var(--font-archivo-black, 'Archivo Black')",
          fontSize: "72px",
          lineHeight: 1,
          color: "var(--teal)",
          marginBottom: "16px",
          letterSpacing: "-2px",
        }}>
          404
        </p>
        <h1 style={{
          fontFamily: "var(--font-archivo-black, 'Archivo Black')",
          fontSize: "clamp(24px, 4vw, 36px)",
          color: "var(--navy)",
          marginBottom: "16px",
          lineHeight: 1.1,
        }}>
          Page Not Found
        </h1>
        <p style={{ fontSize: "16px", color: "var(--muted)", lineHeight: 1.6, marginBottom: "32px" }}>
          The page you&apos;re looking for doesn&apos;t exist. It may have moved or the address may be incorrect.
        </p>
        <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/" className="btn-teal">Back to Home</Link>
          <Link href="/contact" style={{
            display: "inline-flex", alignItems: "center",
            border: "2px solid var(--teal)", color: "var(--teal)",
            fontWeight: 700, fontSize: "15px", padding: "12px 24px",
            borderRadius: "10px", textDecoration: "none", transition: "all 0.15s",
          }}>
            Contact Us
          </Link>
        </div>
      </div>
    </main>
  );
}
