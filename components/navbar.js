import Link from "next/link";

export default function Navbar(props) {
  return (
    <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
      <div className="container">
        <Link className="navbar-brand" href="/">
          PADP
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link
              className={
                "nav-link " + (props.activeNav === "youtube" ? "active" : "")
              }
              aria-current="page"
              href="youtube"
            >
              yutub
            </Link>
            <Link
              className={
                "nav-link " + (props.activeNav === "omdb" ? "active" : "")
              }
              aria-current="page"
              href="omdb"
            >
              omdebo
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
