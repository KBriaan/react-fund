import { BiPhoneCall, BiSolidMoon, BiSolidSun } from "react-icons/bi";
import { FaCaretDown } from "react-icons/fa";
import { useState, useEffect } from "react";
import {  HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
function Navbar() {
    const [theme, setTheme] = useState(localStorage.getItem("theme")? localStorage.getItem("theme"):"light");
    const [showMenu, setShowMenu ]= useState(false);
    const element =document.documentElement;

    useEffect(() => {
        if (theme === "dark") {
          element.classList.add("dark");
        } else {
          element.classList.remove("dark");
        }
        localStorage.setItem("theme", theme);

      }, [theme]);
      const toggleMenu = () => {
        setShowMenu(!showMenu);
      };
      
  return (
    <>
      <nav className="bg-gradient-to-l from-violet-900 via-violet-800 to-violet-900 text-white fixed fixed-top-left-0 w-full border-b-[1px] border-primary/50">
        <div className="container">
          <div className="flex items-center justify-between h-[70px] py-2">
            {/* Logo section */}
            <div className="text-2xl md:text-3xl text-white">
              <a href="#">
                KBrand{" "}
                <spand className="inline-block font-bold text-primary">
                  Fund
                </spand>
              </a>
            </div>

            {/*Desktop menu section */}
            <div className="hidden md:block">
            <div className="flex items-center gap-4 ">
              <ul className="flex items-center gap-10">
                <li className="group relative cursor-pointer">
                  <a href="#" className="flex items-center gap-[2px] h-[70px]">
                    Home{" "}
                    <FaCaretDown className="group-hover:rotate-180 transition-all duration-200" />
                  </a>
                  {/* dropdown section */}
                  <div className="absolute -left-9 z-[99999] hidden w-[150px] bg-white shadow-md p-2 text-black rounded-md group-hover:block">
                    <ul className="space-y-3">
                      <li className="p-2 hover:bg-violet-200 rounded">Services</li>
                      <li className="p-2 hover:bg-violet-200 rounded">About us</li>
                      <li className="p-2 hover:bg-violet-200 rounded">Privacy policy</li>
                    </ul>
                  </div>
                </li>
                <li>About us</li>
                <li>
                  <div className="flex items-center gap-3">
                    {/* icon here */}
                    <div>
                      <BiPhoneCall className="text-2xl h-[40px] w-[40px] rounded-md text-white bg-primary hover:bg-primary/90 p-2" />
                    </div>
                    {/* mobile no */}
                    <div>
                      <p>Talk to us</p>
                      <p>+254799860103</p>
                    </div>
                  </div>
                </li>
                {/* light and darkmode switcher */}
                {/* {<BiSolidSun className="text-2xl" />} */}

                {theme === "dark"?(<BiSolidSun className="text-2xl"onClick={()=>setTheme("light")}/>):(<BiSolidMoon className="text-2xl"onClick={()=>setTheme("dark")}/>)}
              </ul>
            </div>
            </div>
        

            {/*Mobile menu section */}
            <div className="md:hidden flex items-center gap-4">
            {theme === "dark"?(<BiSolidSun className="text-2xl"onClick={()=>setTheme("light")}/>):(<BiSolidMoon className="text-2xl"onClick={()=>setTheme("dark")}/>)}
            {showMenu ? (<HiMenuAlt1 onClick={toggleMenu} className="cursor-pointer transition-all " size={30}/>):( <HiMenuAlt3 onClick={toggleMenu} className="cursor-pointer transition-all" size={30}/>)}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
