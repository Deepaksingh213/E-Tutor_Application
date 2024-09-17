import React from 'react'
import { slideRight } from '../utility/animation';
import { FaBook } from 'react-icons/fa';
import {motion} from "framer-motion"

const data = [
    { id: 1, name: "Engineering", icon: <FaBook />, color: "#0063ff", delay: 0.2 },
    { id: 2, name: "English", icon: <FaBook />, color: "#922aee", delay: 0.4 },
    { id: 3, name: "Programming", icon: <FaBook />, color: "#ea7516", delay: 0.6 },
    { id: 4, name: "Science", icon: <FaBook />, color: "#075267", delay: 0.8 },
    { id: 5, name: "History", icon: <FaBook />, color: "#075267", delay: 1.0 },
    { id: 6, name: "Psychology", icon: <FaBook />, color: "#986d1d", delay: 1.2 },
    { id: 7, name: "Web design", icon: <FaBook />, color: "#b93838", delay: 1.4 },
    { id: 8, name: "See all", icon: <FaBook />, color: "#464646", delay: 1.6 }
  ];

const Subject = () => {
  return (
  <>
  
  <div className="bg-[#f9fafc] md:py-24 py-14">
      <div className="container mx-auto">
        <div className="max-w-[600px] p-6 text-center mx-auto mb-5 space-y-4">
          <p className="font-semibold text-2xl text-orange-700 uppercase">Our tutor subjects</p>
          <h1 className="text-2xl font-semibold ">Find Online Tutor in Any Subject</h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {data.map((item) => {
            return (
              <motion.div
              variants={slideRight(item.delay)}
              initial="hidden"
              whileInView={"visible"}
              
              key={item.id} className="flex justify-start items-center gap-4  border border-fourth/20 rounded-lg p-4 
              hover:!scale-105 hover:!shadow-xl duration-200 cursor-pointer" >
                <div className={`w-10 h-10 rounded-md flex justify-center  items-center text-white `} style={{backgroundColor: item.color}}>
                 {item.icon}
                </div>
                <div className=" text-lg text-gray-600">{item.name}</div>
               
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  
  </>
  )
}

export default Subject