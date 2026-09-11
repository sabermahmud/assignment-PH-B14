// export interface NavbarProps {

// }

import logo from "/logo-text.png";

export default function Navbar() {
  return (
    <>
      <nav className="flex justify-between p-4 max-w-7xl mx-auto items-center">
        {/* logo part */}
        <div>
          <img src={logo} alt="nav logo" />
        </div>

        {/* menu part*/}
        <div>
            <ul className="flex gap-6 items-center">
                <li>Home</li>
                <li>Technologies</li>
                <li>Projects</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>

        {/* action btns part */}
        <div className="flex gap-4">
            <button className="border-2 border-[#D91B7E] py-2 px-4 rounded-full ">Sign in</button>
            <button className="bg-[#D91B7E] text-white py-2 px-4 rounded-full ">Sign up</button>
        </div>
      </nav>
    </>
  );
}
