import React from 'react';
import { MdComputer } from "react-icons/md";

const Footer = () => {
  const linkGroups = [
    {
      title: "Important Links",
      links: ["Home", "About", "Services", "Contact"]
    },
    {
      title: "Company Links",
      links: ["Our Services", "About", "Services", "Privacy Policy"]
    },
    {
      title: "Resources",
      links: ["Home", "About", "Sign in", "Registration"]
    }
  ];

  return (
    <>
      <section className='bg-gray-400/10 text-gray-600'>
        <div className='container mx-auto px-4 py-10'>
          <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
            {/* Logo and Description */}
            <div>
              <div className='text-xl flex items-center gap-2 font-bold uppercase'>
                <MdComputer className="text-2xl text-secondary" />
                <p className="text-primary">E-Tutor</p>
              </div>
              <p className='text-gray-600 text-md font-medium py-6'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab placeat quaerat doloribus odit perferendis autem blanditiis, nihil pariatur iusto accusamus.
              </p>
            </div>

            {/* Dynamic Link Sections */}
            {linkGroups.map((group, index) => (
              <div key={index}>
                <h2 className='text-lg font-semibold uppercase text-black'>
                  {group.title}
                </h2>
                <ul className='mt-6 space-y-1 text-md'>
                  {group.links.map((link, idx) => (
                    <li key={idx} className='hover:text-secondary text-gray-600 font-medium transition-colors duration-300'>
                      {link}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className='bg-gray-400 text-gray-800 h-12 p-6 flex justify-center items-center font-semibold'>@2024, E-Totor Application</div>
      </section>
    </>
  );
};

export default Footer;
