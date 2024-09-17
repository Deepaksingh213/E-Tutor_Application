import React, { useState } from "react";
import { motion } from "framer-motion";

const NavbarBanner = () => {
  const [open, setOpen] = useState(true);
  return (
    <>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-third text-sm text-center font-semibold p-1 hidden lg:block relative "
        >
          Are you a university or school student for an online tutoring
          partnership?
          <a href="#" className="text-fourth ml-2">
            Talk to us
          </a>
          <div
            className="absolute top-1/2 right-10 cursor-pointer -translate-y-1/2"
            onClick={() => setOpen(!open)}
          >
            X
          </div>
        </motion.div>
      )}
    </>
  );
};

export default NavbarBanner;
