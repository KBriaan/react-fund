import { FaUserCircle } from "react-icons/fa";

const ResponsiveMenu = ({ showMenu }) => {
  return (
    <>
      
      <div
        className={`fixed top-0 -z-50 ${
          showMenu ? "left-0" : "-left-[100%]"
        } h-screen w-[75%] bg-white dark:bg-slate-950 dark:text-white z-50 pt-20 pb-6 px-8 flex flex-col justify-between md:hidden`}
      >
        {/* Navbar section */}
        <div>
            {/* user section */}
        <FaUserCircle size={50}/>
        <div>
            <h1 className="text-xl font-semibold">
                Brian Kipkirui
            </h1>
            <h1 className="text-sm text-slate-500">
                +254799860103
            </h1>
        </div>
{/* menu section */}
<nav className="mt-12">
<ul className="space-y-6 text-lg font-semibold">
<li>
    <a href="#"> Home</a>
</li>
<li>
    <a href="#"> Services</a>
</li>
<li>
    <a href="#"> Contact</a>
</li>
</ul>
</nav>
        </div>
        {/* nav footer section */}
        <div>
          <p> @2024 All Rights Reserved</p>
        </div>
      </div>
    </>
  );
};

export default ResponsiveMenu;

