import React from "react";
import { FaGithub, FaLink } from "react-icons/fa6";

const projectData = [
  {
    img: "/project1.png",
    title: "Travel Blog Website",
    description:
      "Explore various travel destinations with an interactive blog.",
    technology: "HTML, CSS and JavaScript",
    links: {
      site: "https://travelblog-g8h0.onrender.com/",
      github: "https://github.com/RiSu-25/travelblog",
    },
  },
  {
    img: "/project3.png",
    title: "E-Commerce Website",
    description: "An e-commerce platform for online shopping enthusiasts.",
    technology: "MongoDB, ExpressJS, ReactJS and NodeJS",
    links: {
      site: "https://ecommerce-frontend-snowy.vercel.app/",
      github: "https://github.com/RiSu-25/ecommerce",
    },
  },
  {
    img: "/project2.png",
    title: "Hotel Booking System",
    description:
      "A modern hotel booking platform with seamless user experience.",
    technology: "HTML, CSS, JavaScript and Bootstrap",
    links: {
      site: "https://hotelbooking-4wcq.onrender.com/",
      github: "https://github.com/RiSu-25/hotelbooking",
    },
  },
];

const Projects = () => {
  return (
    <div id="project" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-heading">PROJECTS</h4>
      <h2 className="text-center text-5xl">My Latest Projects</h2>

      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 text-gray-700">
        Welcome to my project showcase! Explore a collection of web development
        projects that highlight my skills in front-end technologies. Each
        project reflects my passion for clean design, responsive layouts, and
        interactive user experiences.
      </p>

      {/* Project Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectData.map((project, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
            {/* Image Section */}
            <div
              className="h-56 bg-cover bg-center"
              style={{ backgroundImage: `url(${project.img})` }}
            ></div>

            {/* Details Section */}
            <div className="p-4 flex flex-col justify-between h-40">
              <div>
                <h2 className="font-semibold text-base mb-1 text-black">
                  {project.title}
                </h2>
                <p className="text-sm text-gray-700 mb-1">
                  {project.description}
                </p>
                <p className="text-xs text-gray-500">
                  {project.technology}
                </p>
              </div>

              <div className="flex justify-end items-center gap-3 mt-3 text-pink-800 text-lg">
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-pink-600"
                >
                  <FaGithub />
                </a>
                <a
                  href={project.links.site}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-pink-600"
                >
                  <FaLink />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
