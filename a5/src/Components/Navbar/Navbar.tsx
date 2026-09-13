import { VscThreeBars } from "react-icons/vsc";
import logo from "/logo-text.png";
import { useState } from "react";

export default function Navbar() {
  const [show, setShow] = useState<boolean>(false);

  const handleHiddenMenu = (): void => {
    setShow((prev) => !prev);
  };

  return (
    <>
      <nav className="md:fixed top-0 left-0 z-10 w-full bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-2 py-4 md:p-4">
          {/* Logo + Mobile Menu Button */}
          <div>
            <img src={logo} className="hidden md:block" alt="nav logo" />

            <div>
              <button onClick={handleHiddenMenu}>
                <VscThreeBars className="block text-2xl md:hidden" />
              </button>
            </div>
          </div>

          {/* Menu */}
          <div>
            <ul className="hidden items-center gap-6 md:flex">
              <li>Home</li>
              <li>Technologies</li>
              <li>Projects</li>
              <li>About</li>
              <li>Contact</li>
            </ul>

            <img src={logo} className="block w-30 md:hidden" alt="nav logo" />
          </div>

          {/* Buttons */}
          <div className="flex gap-4">
            <button className="rounded-full border-2 border-[#D91B7E] p-2 text-[12px] md:px-4 md:py-2 md:text-lg">
              Sign in
            </button>

            <button className="rounded-full bg-[#D91B7E] p-2 text-[12px] text-white md:px-4 md:py-2 md:text-lg">
              Sign up
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {show && (
          <div className="border-t border-gray-200 bg-white p-4 md:hidden">
            <ul className="flex flex-col gap-4">
              <li>Home</li>
              <li>Technologies</li>
              <li>Projects</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
}
