import Link from "next/link";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="nav-container">
        <Link href="/" className="logo">
          <span className="logo-dot"></span>
          AKIF<span>.DEV</span>
        </Link>

        <nav className="nav-links">
          <Link href="/">Ana səhifə</Link>
          <Link href="/haqqinda">Haqqında</Link>
          <Link href="/bloglar">Bloglar</Link>
          <Link href="/elaqe" className="nav-contact">
            Əlaqə <span>↗</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}

