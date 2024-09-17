import React from "react";
import Hero from "../assets/hero.png";
import { FaPlay } from "react-icons/fa";
import {motion} from "framer-motion"
import { slideRight } from "../utility/animation";

const HeroSection = () => {
  return (
    <>
      <section>
        <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px] relative">
          {/* Text Area */}
          <div className="flex flex-col justify-center py-14 md:pr-16 xl:pr-40 md:py-0 font-playfair md:order-1 order-2">
            <div className="text-center md:text-left space-y-4">
              <motion.p
              variants={slideRight(0.4)}
              initial="hidden"
              animate="visible"
              className="text-orange-700 uppercase font-semibold text-xl">
                100% Satisfaction Guarantee
              </motion.p>
              <motion.h1
              variants={slideRight(0.6)}
              initial="hidden"
              animate="visible"
              className="text-5xl lg:text-6xl font-bold leading-tight">
                Find Your Perfect <span className="text-third">Tutor</span>
              </motion.h1>
              <motion.p
                variants={slideRight(0.8)}
                initial="hidden"
                animate="visible"
              className="text-gray-600 xl:max-w-[500px] text-medium font-medium">
                We help you find the perfect tutor for 1-on-1 lessons. It is
                completely free and private.
              </motion.p>
              <motion.div
               variants={slideRight(1.0)}
               initial="hidden"
               animate="visible"
              className="flex flex-col md:flex-row gap-6 justify-center md:justify-start !mt-8 items-center">
                <button className="bg-yellow-400 text-white rounded-full px-10 py-2 hover:bg-yellow-500 transition-all duration-300 cursor-pointer shadow flex items-center gap-2">
                  Get Started
                </button>
                <button className="flex justify-center items-center gap-2 font-semibold">
                  <span className="flex gap-2 justify-center items-center">
                    <FaPlay className="text-fourth bg-blue-500/15 p-2 rounded-full w-8 h-8" />
                    See how it works
                  </span>
                </button>
              </motion.div>
            </div>
          </div>

          {/* Image Area */}
          <div
           className="flex justify-center items-center md:order-2 order-1">
            <motion.img
             initial={{opacity:0,x:200}}
             animate={{opacity:1,x:0}}
             transition={{type:"spring", stiffness: 100, delay:0.4}}
              src={Hero}
              alt="hero-image"
              className="w-[350px] md:w-[450px] xl:w-[600px] object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
