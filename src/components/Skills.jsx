import React from 'react';

const toolsData = [
  { name: "HTML", icon: "/html.png" },
  { name: "CSS", icon: "/css.png" },
  { name: "JavaScript", icon: "/javascript.png" },
  { name: "React", icon: "/react.png" },
  { name: "Git", icon: "/git.png" },
  { name: "NodeJS", icon: "/nodejs.png" },
  { name: "MongoDB", icon: "/mongodb.png" },
  { name: "Express", icon: "/express.png" },
  { name: "GitHub", icon: "/github.png" },
  { name: "Tailwind", icon: "/tailwind-css.png" },
  { name: "VSCode", icon: "/vscode.png" },
  { name: "Bootstrap", icon: "/bootstrap.png" },
];

const Skills = () => {
  return (
    <div id='skill' className='w-full px-[12%] py-10 scroll-mt-20'>
      <h4 className='text-center mb-2 text-lg font-heading'>MY SKILLS</h4>
      <h2 className='text-center text-5xl'>Tools I Use</h2>

      <div className='w-full mt-16'>
        <ul className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 justify-items-center'>
          {toolsData.map((item, index) => (
            <li
              key={index}
              className='flex items-center justify-center aspect-square bg-white/60 border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 transition-transform duration-500 w-20 sm:w-24'
            >
              <img src={item.icon} alt={item.name} className='w-10 sm:w-12' />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Skills;
