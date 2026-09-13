// export interface NavbarProps {

// }

import { VscThreeBars } from "react-icons/vsc";
import logo from "/logo-text.png";

export default function Navbar() {
  return (
    <>
      <nav className="lg:fixed top-0 left-0 z-10 w-full bg-white ">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-2 py-4 p md:p-4">
          {/* logo */}
          <div className="">
            <img src={logo} className="hidden md:block" alt="nav logo" />
            <VscThreeBars className="block md:hidden text-2xl"/>
          </div>

          {/* menu */}
          <div className="">
            <ul className="hidden md:flex items-center gap-6">
              <li>Home</li>
              <li>Technologies</li>
              <li>Projects</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
            <img src={logo} className="block md:hidden w-30" alt="nav logo" />

          </div>

          {/* buttons */}
          <div className="flex gap-4 ">
            <button className="rounded-full border-2 border-[#D91B7E] p-2  md:px-4 md:py-2 text-[12px] md:text-lg">
              Sign in
            </button>

            <button className="rounded-full bg-[#D91B7E] p-2 md:px-4 md:py-2 text-white text-[12px] md:text-lg">
              Sign up
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
