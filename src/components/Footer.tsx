import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-200 dark:bg-gray-900 text-gray-900 dark:text-white py-6 flex flex-col items-center">
      <p className="text-gray-600 dark:text-gray-400 transition-colors duration-300">
        © {new Date().getFullYear()} Anush Nandyala. All rights reserved.
      </p>
      <div className="flex space-x-6 mt-3">
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/anushnandyala"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
        >
          <FaLinkedin className="w-6 h-6" />
        </a>

        {/* Gmail */}
        <a
          href="mailto:anushn05@gmail.com"
          className="text-gray-600 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400 transition-colors duration-300"
        >
          <FaEnvelope className="w-6 h-6" />
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/anushnandyala"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 dark:text-gray-400 hover:text-white dark:hover:text-gray-300 transition-colors duration-300"
        >
          <FaGithub className="w-6 h-6" />
        </a>

        {/* Phone */}
        <a
          href="tel:+16093060838"
          className="text-gray-600 dark:text-gray-400 hover:text-green-500 dark:hover:text-green-400 transition-colors duration-300"
        >
          <FaPhone className="w-6 h-6" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
