import { BiPhoneCall } from "react-icons/bi";
import { FaCaretDown } from "react-icons/fa";

function Navbar() {
  return (
    <>
      <nav className="bg-gray-800 text-white">
        <div className="container">
          <div>
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
            <div>
              <ul>
                <li className="group relative cursor-pointer">
                  <a href="#" className="flex items-center gap-[2px] h-[72px]">
                    Home <FaCaretDown className="group-hover:rotate-180 transition-all duration-200" />
                  </a>
                </li>
                <li>About us</li>
                <li>
                    <div>
                        {/* icon here */}
                    <div> 
                       <BiPhoneCall className="text-2xl h-[40px] rounded-md text-white bg-primary hover:bg-primary/90"/> 
                    </div>
                        {/* mobile no */}
                        <div>
<p>Talk to</p>
<p>+254799860103</p>
                        </div>
                    </div>
                </li>
              </ul>
            </div>

            {/*Mobile menu section */}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
