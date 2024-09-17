
import React from 'react';
import CountUp from 'react-countup';

const NumberCount = () => {
  const stats = [
    { end: 896, label: 'Expert tutors' },
    { end: 2000, label: 'Hours content', separator: ',', suffix: '+' },
    { end: 298, label: 'Subjects and courses' },
    { end: 72878, label: 'Active students', separator: ',', suffix: '+' }
  ];

  return (
    <div className='bg-primary text-white py-12 mb-4'>
      <div className='container grid grid-cols-2 md:grid-cols-4 gap-8'>
        {stats.map((stat, index) => (
          <div key={index} className='flex flex-col items-center justify-center '>
            <p className='text-3xl font-semibold'>
              <CountUp
                start={0}
                end={stat.end}
                duration={3}
                enableScrollSpy={true}
                scrollSpyOnce={true}
                separator={stat.separator || ''}
                suffix={stat.suffix || ''}
              />
            </p>
            <p>{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NumberCount;
