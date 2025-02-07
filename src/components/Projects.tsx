import { FaGithub } from "react-icons/fa";

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-800 py-10 px-6">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">My Projects</h2>
      
      <div className="max-w-5xl w-full flex flex-col gap-16">

        {/* Project 1 - Image Left, Description Right */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <img src="/project1.png" alt="Project 1" className="w-full md:w-1/2 h-auto rounded-lg shadow-lg" />
          <div className="text-center md:text-left w-full md:w-1/2">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Project Name 1</h3>
            <p className="mt-2 text-gray-700 dark:text-gray-300">
              Brief description of Project 1. This project focuses on solving XYZ problem using 
              technologies like **React, Node.js, and MongoDB**.
            </p>
            <a 
              href="https://github.com/yourusername/project1" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-4 inline-block text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition"
            >
              <FaGithub className="w-8 h-8" />
            </a>
          </div>
        </div>

        {/* Project 2 - Description Left, Image Right */}
        <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-8">
          <img src="/project2.png" alt="Project 2" className="w-full md:w-1/2 h-auto rounded-lg shadow-lg" />
          <div className="text-center md:text-left w-full md:w-1/2">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Project Name 2</h3>
            <p className="mt-2 text-gray-700 dark:text-gray-300">
              Brief description of Project 2. This project is a tool that enhances productivity 
              using **AI and automation techniques**.
            </p>
            <a 
              href="https://github.com/yourusername/project2" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-4 inline-block text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition"
            >
              <FaGithub className="w-8 h-8" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;


  