import React from 'react';
import banner1 from "../assets/banner1.png";
import banner2 from "../assets/banner2.png";
import { slideLeft, slideRight } from '../utility/animation';
import {motion} from "framer-motion"

const bannerData = [
  {
    title: "Customize with Your Schedule",
    title1: "Personalized Professional Online Tutor on Your Schedule",
    description: "Our scheduling system allows you to select based on your free time. Lorem ipsum demo text for template. Keep track of your students' class and tutoring schedules, and never miss your lectures. The best online class scheduling system with easy accessibility. Lorem ipsum is a placeholder text commonly used to demonstrate the visual form.",
    image: banner1,
    cta: "Get Started",
  }
];
  
const bannerData1 = [

  {
    title: "Customize with Your Schedule",
    title1: "Talented and Qualified Tutors to Serve You for Help",
    description: "Our scheduling system allows you to select based on your free time. Lorem ipsum demo text for template. Keep track of your students' class and tutoring schedules, and never miss your lectures. The best online class scheduling system with easy accessibility. Lorem ipsum is a placeholder text commonly used.",
    image: banner2,
    cta: "Get Started",
  }
]

const Schedule = () => {
  return (
    <>
    <section className="bg-[#f9f9f9] mb-14">
      <div className='container'>
        
          {bannerData.map((item, index) => (
            <div key={index} className='grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0'>
              <div className="flex justify-start items-center  order-1">
              <motion.img
             initial={{opacity:0,x:-200}}
             animate={{opacity:1,x:0}}
             transition={{type:"spring", stiffness: 100, delay:0.2}} src={item.image} alt={`banner${index + 1}`} className="w-[400px] h-full object-cover" />
              </div>

              <div className='space-y-4 flex flex-col justify-center text-center md:text-left lg:max-w-[500px] order-2'>
              <motion.p
              variants={slideLeft(0.4)}
              initial="hidden"
              animate="visible" className='text-lg text-orange-600 font-semibold capitalize'>{item.title} </motion.p>
             <motion.p
              variants={slideLeft(0.6)}
              initial="hidden"
              animate="visible" className='text-xl lg:text-2xl font-bold capitalize'>{item.title1} </motion.p>
             <motion.p
              variants={slideLeft(0.8)}
              initial="hidden"
              animate="visible" className='text-gray-500 text-md'>{item.description} </motion.p>
                  <motion.div
               variants={slideLeft(1.0)}
               initial="hidden"
               animate="visible" >
                <button className='px-6 py-2 rounded-full bg-yellow-400 hover:bg-yellow-500 transition-all duration-200 mt-2'>
                  {item.cta}
                </button>  
                </motion.div>
              </div>
            </div>
          ))}
        </div>
        <div className='container'>
        <div >
          {bannerData1.map((item, index) => (
            <div key={index} className='grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0'>
               <div className='space-y-2 flex flex-col justify-center text-center md:text-left lg:max-w-[500px] order-2 md:order-1'>
               <motion.p
              variants={slideRight(0.4)}
              initial="hidden"
              animate="visible" className='text-lg text-orange-600 font-semibold capitalize'>{item.title}   </motion.p>
                <motion.p
              variants={slideRight(0.6)}
              initial="hidden"
              animate="visible" className='text-xl lg:text-2xl font-bold capitalize'>{item.title1}   </motion.p>
               <motion.p
              variants={slideRight(0.8)}
              initial="hidden"
              animate="visible" className='text-gray-500 text-md'>{item.description}   </motion.p>
               <motion.div
               variants={slideRight(1.0)}
               initial="hidden"
               animate="visible" >
                <button className='px-6 py-2 rounded-full bg-yellow-400 hover:bg-yellow-500 transition-all duration-200 mt-2'>
                  {item.cta}
                </button>  
                </motion.div>
              </div>
              <div className="flex justify-end items-center  order-1 md:order-2">
              <motion.img
             initial={{opacity:0,x:200}}
             animate={{opacity:1,x:0}}
             transition={{type:"spring", stiffness: 100, delay:0.2}} src={item.image} alt={`banner${index + 1}`} className="w-[400px] h-full object-cover" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

      
    
    
    
    
    
    </>
  );
};

export default Schedule;
