import React from 'react';
import { FaHandsHelping, FaChalkboardTeacher, FaUserGraduate, FaAccessibleIcon } from 'react-icons/fa';
import {motion} from "framer-motion"
import { slideLeft } from '../utility/animation';
const cardData = [
  {
    id: 1,
    title: "One-on-one Teaching",
    description: "Personalized instruction to meet each student's needs.",
    icon: <FaChalkboardTeacher />,
    bgColor: "#73bc00",
    delay:0.3 
  },
  {
    id: 2,
    title: "24/7 Tutor Availability",
    description: "Our tutors are always available to respond as quick as possible for you.",
    icon: <FaUserGraduate />,
    bgColor: "#0063ff",
    delay:0.6, 
  },
  {
    id: 3,
    title: "Interactive Whiteboard",
    description: "Our digital whiteboard equipped with audio and video chat fetures.",
    icon: <FaHandsHelping />,
    bgColor: "#fa6400",
    delay:0.9,
  },
  {
    id: 4,
    title: "Affordable Prices",
    description: "Choose an expert tutor based on your budget and per hour.",
    icon: <FaAccessibleIcon />,
    bgColor: "#fe6baa",
    delay:1.2,
  },
];

const Services = () => {
  return (
    <div className="bg-[#f9fafc] py-24">
      <div className="container mx-auto">
        <div className="max-w-[500px] p-6 text-center mx-auto mb-12 space-y-4">
          <p className="font-bold text-2xl text-orange-700">Why Choose Us</p>
          <h1 className="text-4xl font-bold leading-tight">Benefits of Online Tutoring Services with Us</h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {cardData.map((item) => {
            return (
              <motion.div
              variants={slideLeft(item.delay)}
              initial="hidden"
              whileInView={"visible"}
              
              key={item.id} className="space-y-4 rounded-xl p-6 shadow-[0_0_22px_rgba(0,0,0,0.15)]">
                <div className={`w-10 h-10 rounded-lg flex justify-center items-center text-white `} style={{backgroundColor: item.bgColor}}>
                  {item.icon}
                </div>
                <div className=" text-2xl">{item.title}</div>
                <p className="text-gray-500 text-sm ">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
