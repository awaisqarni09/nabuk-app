import Link from "next/link";

export default function NotFound() {
  return (
    <main id="main-content" className="not-found-editorial">
      <div className="not-found-code" aria-hidden="true">404</div>
      <div className="not-found-copy">
        <p className="editorial-kicker">This route is off the map</p>
        <h1 className="editorial-heading">Nothing clinical here.<br /><em>Let’s get you back.</em></h1>
        <p className="editorial-copy editorial-copy--inverse">The page may have moved, or the address may be incomplete.</p>
        <div className="editorial-actions">
          <Link href="/" className="editorial-button editorial-button--solid">Return home <span aria-hidden="true">↗</span></Link>
          <Link href="/contact" className="editorial-button editorial-button--light">Contact Nabuk</Link>
        </div>
      </div>
    </main>
  );
}
