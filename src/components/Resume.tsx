const Resume = () => {
  return (
    <section 
      id="resume" 
      className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 pt-20 pb-10"
    >
      <div className="max-w-2xl text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">My Resume</h2>
        <p className="mt-4 text-gray-700 dark:text-gray-300">
          Click below to view/download my professional resume.
        </p>

        {/* Resume Preview as a Clickable Button */}
        <a 
          href="/anush-nandyala/Anush_Fall_2024_Resume.pdf " 
          target="_blank" 
          rel="noopener noreferrer" 
          className="mt-6 inline-block"
        >
          <div className="relative w-48 h-64 hover:scale-105 transition-transform">
            <img
              src={`${import.meta.env.BASE_URL}resume-preview.png`}
              alt="Resume Preview"
              className="w-full h-auto shadow-lg border border-gray-300 dark:border-gray-700 opacity-80 hover:opacity-100 transition-opacity duration-300"
            />
          </div>
        </a>
      </div>

      {/* Resume Summaries */}
      <div className="max-w-2xl mt-10 text-left">
        {/* Education Section */}
        <div className="mb-6">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Education</h3>
          <p className="mt-2 text-gray-700 dark:text-gray-300">
            🎓 <strong>Georgia Institute of Technology</strong> — Bachelor’s in Computer Science (Expected 2025)  
            Relevant coursework: Data Structures, Machine Learning, Computer Vision, Software Engineering
          </p>
        </div>

        {/* Work Experience Section */}
        <div className="mb-6">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Work Experience</h3>
          <p className="mt-2 text-gray-700 dark:text-gray-300">
            🏢 <strong>Software Engineering Intern</strong> — Company XYZ (Summer 2024)  <br />
            - Developed full-stack web applications using React, TypeScript, and Node.js. <br />
            - Improved system performance by 30% through code optimization and database indexing. <br />  
            - Collaborated with cross-functional teams to deliver high-quality software solutions.
          </p>
        </div>

        {/* Research Section */}
        <div className="mb-6">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Research</h3>
          <p className="mt-2 text-gray-700 dark:text-gray-300">
            📖 <strong>Computer Vision Research Assistant</strong> — Georgia Tech AI Lab  
            - Conducting research on image classification models using **CNNs & Transformers**.  
            - Developed an **object detection system** improving accuracy by 15% over baseline models.  
            - Published a paper on **multi-label classification for urban scene segmentation** (Under Review).
          </p>
        </div>

        {/* Technical Skills Section */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Technical Skills</h3>
          <p className="mt-2 text-gray-700 dark:text-gray-300">
            💻 **Programming:** Python, JavaScript, TypeScript, C++  
            ⚡ **Web Technologies:** React, Next.js, TailwindCSS, Node.js  
            🛠 **Tools & Platforms:** Git, Docker, AWS, Firebase  
            🤖 **Machine Learning:** TensorFlow, OpenCV, PyTorch  
          </p>
        </div>
      </div>
    </section>
  );
};

export default Resume;



