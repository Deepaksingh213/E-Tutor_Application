import React, { useState } from "react";
import { MdComputer, MdMenu } from "react-icons/md";
import ResponsiveMenu from "../pages/ResponsiveMenu";
import {motion} from "framer-motion"

const NavbarMenu = [
  {
    id: 1,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    title: "For Student",
    link: "/#",
  },
  {
    id: 3,
    title: "Resources",
    link: "/#",
  },
  {
    id: 4,
    title: "About us",
    link: "/#",
  },
  {
    id: 5,
    title: "Contact us",
    link: "/#",
  },
];
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <motion.div
      initial={{opacity : 0}}
      animate={{opacity : 1}}
      transition={{duration:0.5, delay:0.5}}
     >
        <div className="container flex justify-between items-center py-6">
          {/* logo section */}
          <div className="flex  items-center gap-2 font-bold">
            <MdComputer className="text-3xl text-secondary" />
            <p className="text-primary">E-Tutor</p>
          </div>
          {/* menu section */}
          <div className="hidden lg:block">
            <ul className="flex gap-6 items-center">
              {NavbarMenu.map((item) => {
                return (
                  <li key={item.id}>
                    <a
                      href={item.link}
                      className="inline-block text-gray-700 font-semibold text-sm xl:text-base py-1 px-2 xl:px-3
                        hover:text-primary transition-all duration-300 hover:border-b-4 hover:border-b-secondary"
                    >
                      {item.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          {/* login section */}
          <div className="hidden lg:block space-x-6">
            <button className="text-gray-700 font-semibold text-lg  hover:border-b-4 hover:border-b-secondary hover:text-primary transition-all duration-300">
             Sign in
            </button>
            <button className="px-6 py-2 text-white bg-primary rounded-full font-semibold">
              Register
            </button>
          </div>
          {/* mobile menu section */}
          <div className="lg:hidden" onClick={() => setOpen(!open)}>
            <MdMenu className="text-4xl" />
          </div>
        </div>
      </motion.div>
      <ResponsiveMenu open={open}  />
    </>
  );
};

export default Navbar;
