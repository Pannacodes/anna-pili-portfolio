import { Link } from "react-router";

function NotFound() {
  return (
    <section className="mx-auto flex min-h-[60vh] w-full max-w-6xl flex-col items-center justify-center px-6 py-24 text-center">
      <p className="text-sm font-medium tracking-wide text-link">404</p>
      <h1 className="mt-4 text-5xl font-semibold tracking-tight text-ink">
        page not found
      </h1>
      <p className="mt-4 max-w-md text-muted">
        Sorry, we couldn’t find the page you’re looking for.
      </p>
      <Link
        to="/"
        className="mt-8 border border-line px-5 py-3 text-sm text-link transition-colors hover:border-ink hover:text-ink"
      >
        back to home
      </Link>
    </section>
  );
}

export default NotFound;