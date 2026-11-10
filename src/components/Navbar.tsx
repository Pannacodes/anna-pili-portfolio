import { Link } from "react-router";

function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-page/65 backdrop-blur-sm">
      <div className="mx-auto w-full max-w-6xl px-6">
        <nav className="flex items-center justify-between px-4 py-6">
          <Link
            to="/"
            className="font-sans text-lg font-medium text-ink"
          >
            anna pili
          </Link>

          <Link
            to="/about"
            className="font-sans text-sm text-ink"
          >
            about me
          </Link>
        </nav>

        <div className="h-px w-full bg-line" />
      </div>
    </header>
  );
}

export default Navbar;
