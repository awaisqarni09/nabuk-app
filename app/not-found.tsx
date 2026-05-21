import Link from "next/link";

export default function NotFound() {
  return (
    <main style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: "80px 20px", minHeight: "60vh" }}>
      <div style={{ textAlign: "center", maxWidth: "480px" }}>
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
