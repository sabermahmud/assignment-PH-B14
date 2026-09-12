// export interface NavbarProps {

// }

import logo from "/logo-text.png";

export default function Navbar() {
  return (
    <>
      <nav className="fixed top-0 left-0 z-10 w-full bg-white ">
        <div className="mx-auto flex max-w-7xl items-center justify-between p-4">
          {/* logo */}
          <div>
            <img src={logo} alt="nav logo" />
          </div>

          {/* menu */}
          <ul className="flex items-center gap-6">
            <li>Home</li>
            <li>Technologies</li>
            <li>Projects</li>
            <li>About</li>
            <li>Contact</li>
          </ul>

          {/* buttons */}
          <div className="flex gap-4">
            <button className="rounded-full border-2 border-[#D91B7E] px-4 py-2">
              Sign in
            </button>

            <button className="rounded-full bg-[#D91B7E] px-4 py-2 text-white">
              Sign up
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
