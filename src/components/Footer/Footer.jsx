import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";
import FooterLinks from "./FooterLinks";

const importantLinks = [
  {
    name: "Home",
  },
  {
    name: "About",
  },
  {
    name: "Services",
  },
  {
    name: "Login",
  },
];

const Links = [
  {
    name: "Privacy Policy",
  },
  {
    name: "Terms and Services",
  },
  {
    name: "About Us",
  },
];
const Footer = () => {
  return (
    <div className="text-white rounded-t-3xl bg-gradient-to-r from-violet-950 to-violet-900">
      <div className="mx-auto max-w-[1200px] px-4">
        {/* footer container */}
        <div className="grid py-5 md:grid-cols-3">
          <div className="px-4 py-8 ">
            <h1 className="mb-3 text-justify text-xl sm:text-left sm:text-3xl">
              <a href="/#home" className="uppercase">
                k
                <span className="inline-block font-bold text-primary">
                  Brand
                </span>
              </a>
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus, nulla eos? Praesentium sunt totam cupiditate.
            </p>
            <div className="flex items-center gap-3 mt-3">
              <FaLocationArrow />
              <p>Brian Kipkirui</p>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <FaMobileAlt />
              <p>0799860103</p>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:pl-10 col-span-2">
            <div className="px-4 py-8">
              <h1 className="mb-3 text-xl font-bold sm:text-left sm:text-xl ">
                Important Links
              </h1>
              <ul className="flex flex-col gap-3">
                <FooterLinks links={importantLinks} />
              </ul>
            </div>
            <div className="px-4 py-8">
              <h1 className="mb-3 text-xl font-bold sm:text-left sm:text-xl ">
                Links
              </h1>
              <ul className="flex flex-col gap-3">
                <FooterLinks links={Links} />
              </ul>
            </div>
            <div className="px-4 py-8">
              <h1 className="mb-3 text-xl font-bold sm:text-left sm:text-xl ">
                Social Links
              </h1>
              <div className="space-y-3">
                <h1>Subscribe to our Newsletter</h1>
                <input
                  type="text"
                  placeholder="Enter Your Email"
                  className="rounded-full px-3 py-1 text-black focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500 "
                />
                <div className="flex gap-3">
                  <a href="#" className="duration-200 hover:scale-105">
                    <FaInstagram className="text-3xl" />
                  </a>
                  <a href="#" className="duration-200 hover:scale-105">
                    <FaFacebook className="text-3xl" />
                  </a>
                  <a href="#" className="duration-200 hover:scale-105">
                    <FaLinkedin className="text-3xl" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* footer container */}
        <div className="bottom-footer">
          <p className="border-t-2 border-gray-300/50 py-6 text-center">
          ©2024 |  All rights reserved 
          </p>
        </div>
        
      </div>
    </div>
  );
};

export default Footer;
