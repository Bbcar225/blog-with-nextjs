import Link from "next/link";

export default function Navabar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light text-light bg-primary">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarCenteredExample"
            aria-controls="navbarCenteredExample"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarCenteredExample"
          >
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item mx-4">
                <Link href="/">
                  <a className="nav-link text-light" aria-current="page">
                    Accueil
                  </a>
                </Link>
              </li>

              <li className="nav-item mx-4">
                <Link href="/blog">
                  <a className="nav-link text-light" aria-current="page">
                    Blog
                  </a>
                </Link>
              </li>

              <li className="nav-item mx-4">
                <Link href="/users">
                  <a className="nav-link text-light" aria-current="page">
                    Utilisateurs
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
