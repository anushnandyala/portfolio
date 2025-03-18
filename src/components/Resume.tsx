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
          href="/Anush_Fall_2024_Resume.pdf " 
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
            🎓 <strong>Georgia Institute of Technology</strong> — Bachelor’s in Computer Science (Expected May 2025)  
            Relevant coursework: Data Structures & Algorithms, Machine Learning, Computer Vision, Intro to Database Systems
          </p>
        </div>

        {/* Work Experience Section */}
        <div className="mb-6">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Work Experience</h3>
          <p className="mt-2 text-gray-700 dark:text-gray-300">
            🏢 <strong>Software Engineering Intern</strong> — Amazon Web Services (Summer 2024)  <br />
            - Enhanced client onboarding for AWS service teams and product managers in a feature launch tool full-stack
            application which automates workflows, including code reviews, Lambda invocations, support tickets, and API calls <br />
            - Implemented five new API calls using Java Lambda functions and API Gateway for service teams to save and
            retrieve input and output data OpenAPI-style schemas in workflow registrations in a DynamoDB table. <br />  
            - Developed new React-based components, inluding wizard, table, and input components, in frontend using
            Typescript and AWS Cloudscape Design System to save input data schemas and values.
          </p>
        </div>

        {/* Research Section */}
        <div className="mb-6">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Research</h3>
          <p className="mt-2 text-gray-700 dark:text-gray-300">
            📖 <strong>Undergraduate Researcher</strong> — McGrath Lab: Georgia Tech School of Biological Sciences (Jan 2023 - June 2023) <br />
            - Used a YOLOv5-OBB machine learning oriented-object detection model to track and predict East African cichlid
            fish behavior with computer vision, replacing current intensive human monitoring.  <br />
            - Developed a Python parser application that converted 1000+ annotations from COCO dataset format to
            YOLOv5-OBB dataset format with bounding box rotation angles.  <br />
            - Achieved a 66.27% oriented-object detection accuracy with trained YOLOv5-OBB model through Georgia Tech's high-performance PACE
            ICE cloud server cluster. <br />
          </p>
        </div>

        {/* Technical Skills Section */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Technical Skills</h3>
          <p className="mt-2 text-gray-700 dark:text-gray-300">
            💻 **Programming:** Java, Typescript, Python, SQL (Postgres), HTML/CSS, PyTorch, C  <br />
            ⚡ **Web Technologies:** React, Node.js, Express.js, Flask, FastAPI, PostgreSQL, JUnit, WordPress, TailwindCSS  <br />
            🛠 **Tools & Platforms:** DynamoDB, API Gateway, AWS Lambda, AWS Console, Visual Studio Code, pgAdmin, Git,
            Docker, IntelliJ, CLion, Anaconda, Jupyter Notebook, Android Studio, Google Colab, CVAT  <br />
          </p>
        </div>
      </div>
    </section>
  );
};

export default Resume;



