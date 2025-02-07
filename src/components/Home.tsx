const Home = () => {
  return (
    <section id="home" className="w-screen h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-800 px-8">
      <div className="max-w-4xl w-full flex flex-col md:flex-row items-center justify-center md:justify-between text-center md:text-left gap-6">
        
        {/* Profile Picture */}
        <div className="w-60 h-60 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-gray-300 dark:border-gray-600">
          <img
            src={`${import.meta.env.BASE_URL}id.jpeg`} // Ensure profile picture is inside `public/` folder as "id.jpeg"
            alt="Anush Nandyala"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Bio Section */}
        <div className="md:w-2/3">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white">Hi, I'm Anush Nandyala</h1>
          <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
          I am Anush Nandyala, a Software Developer and Researcher pursuing a B.S. in Computer Science at Georgia Tech, with a focus on full-stack development, machine learning, and cloud computing. I have experience in React, TypeScript, Python, AWS, and PostgreSQL, and I enjoy building efficient and scalable applications. <br /> <br />
          At AWS, I developed backend APIs, Lambda functions, and React components to automate workflows for service teams and product managers. My research in Computer Vision involved training YOLOv5-OBB models for object detection, improving accuracy in biological tracking. <br /> <br />
          Beyond work and research, I’ve built projects like a Productivity Calendar App for students to manage tasks and a Music Tagging Tool for downloading and organizing MP3 metadata. I am passionate about solving complex problems, creating impactful software, and continuously learning new technologies. <br />

          </p>
        </div>

      </div>
    </section>
  );
};

export default Home;


