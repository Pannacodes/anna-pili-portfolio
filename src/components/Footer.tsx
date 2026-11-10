function Footer() {
  return (
    <footer className="w-full">
      <div className="mx-auto w-full max-w-6xl px-6">
        {/* Divider */}
        <div className="h-px w-full bg-line" />

        {/* Footer content */}
        <div className="flex items-center justify-between px-4 py-6">
          <p className="text-xs text-muted">
            ©2026 anna pili. All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/anna-pili-8881a5246/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="text-ink transition-colors hover:text-link"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.35V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM3.555 9h3.564v11.452H3.555zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z" />
              </svg>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/Pannacodes"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="text-ink transition-colors hover:text-link"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path d="M12 .297a12 12 0 0 0-3.793 23.383c.6.111.82-.26.82-.577v-2.234c-3.338.726-4.043-1.416-4.043-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.304-5.467-1.333-5.467-5.931 0-1.31.468-2.381 1.236-3.221-.124-.303-.536-1.524.117-3.176 0 0 1.008-.323 3.301 1.23a11.49 11.49 0 0 1 6.01 0c2.291-1.553 3.297-1.23 3.297-1.23.655 1.652.243 2.873.12 3.176.77.84 1.233 1.911 1.233 3.221 0 4.61-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.216.694.825.576A12 12 0 0 0 12 .297z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
