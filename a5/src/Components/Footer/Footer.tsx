import Logo from "/logo-text.png";
export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white text-slate-600">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">

        {/* Main Footer */}
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-orange-400 via-pink-500 to-violet-600 shadow-md shadow-pink-200">
                <span className="text-lg font-black text-white">
                  DS
                </span>
              </div>

              <h2 className="bg-gradient-to-r from-orange-400 via-pink-500 to-violet-600 bg-clip-text text-2xl font-black text-transparent">
                Dev Stack
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-slate-500">
              Curated tools, technologies, and resources for developers
              building modern software.
            </p>

            {/* Social Links */}
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#"
                className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-600 transition hover:border-slate-300 hover:bg-slate-100 hover:text-slate-900"
              >
                GitHub
              </a>

              <a
                href="#"
                className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-600 transition hover:border-slate-300 hover:bg-slate-100 hover:text-slate-900"
              >
                Twitter
              </a>

              <a
                href="#"
                className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-600 transition hover:border-slate-300 hover:bg-slate-100 hover:text-slate-900"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-slate-900">
              Product
            </h3>

            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="transition hover:text-violet-600">
                  Home
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-violet-600">
                  Technologies
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-violet-600">
                  Projects
                </a>
              </li>
            </ul>
          </div>

          {/* Company + Legal */}
          <div className="grid grid-cols-2 gap-8">

            {/* Company */}
            <div>
              <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-slate-900">
                Company
              </h3>

              <ul className="space-y-3 text-sm">
                <li>
                  <a href="#" className="transition hover:text-violet-600">
                    About
                  </a>
                </li>

                <li>
                  <a href="#" className="transition hover:text-violet-600">
                    Contact
                  </a>
                </li>

                <li>
                  <a href="#" className="transition hover:text-violet-600">
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-slate-900">
                Legal
              </h3>

              <ul className="space-y-3 text-sm">
                <li>
                  <a href="#" className="transition hover:text-violet-600">
                    Privacy Policy
                  </a>
                </li>

                <li>
                  <a href="#" className="transition hover:text-violet-600">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* Divider */}
        <div className="my-10 h-px bg-slate-200" />

        {/* Bottom Bar */}
        <div className="flex flex-col gap-4 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">

          <p>© 2026 Dev Stack. All rights reserved.</p>

          <div className="flex gap-6">
            <a href="#" className="transition hover:text-violet-600">
              Privacy
            </a>

            <a href="#" className="transition hover:text-violet-600">
              Terms
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}
