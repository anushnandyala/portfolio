import { FaGithub } from "react-icons/fa";

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-800 py-10 px-6">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">My Projects</h2>
      
      <div className="max-w-5xl w-full flex flex-col gap-16">

        {/* Project 1 - Image Left, Description Right */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex justify-center md:w-1/2"> {/* Centering the image */}
            <img 
              src={`${import.meta.env.BASE_URL}productivity-calendar-app.png`} 
              alt="Project 1" 
              className="w-60 md:w-72 h-auto rounded-lg shadow-lg" 
            />
          </div>
          <div className="text-center md:text-left w-full md:w-1/2">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
              Productivity Calendar App
            </h3>
            <p className="mt-2 text-gray-700 dark:text-gray-300">
            - Built a full-stack calendar web application that enables students to input and track daily college schedules, clubs, tests, and assignments into multiple to-do planners integrated in a dynamic calendar <br />
            - Enables users to input, find, and check off daily events between days, months, and years through a React frontend <br />
            - Created a backend through a REST API using Express.js and a PostgreSQL database to store/access different types of events (exams, classes, etc.) <br />
            </p>
            <a 
              href="https://github.com/anushnandyala/Productivity-Calendar-App" 
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
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Music Tag and Download Tool            </h3>
            <p className="mt-2 text-gray-700 dark:text-gray-300">
            Download and tag MP3s (songs) from YouTube videos, YouTube playlists, or local files. Download MP4 (videos) and thumbnails from YouTube videos and playlists as well.
            </p>
            <a 
              href="https://github.com/anushnandyala/Music-Tagger" 
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


  