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
        <div className="md:w-1/2">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white">Hi, I'm Anush Nandyala</h1>
          <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
            I am a passionate software developer with experience in front-end and back-end development.
            I love building modern, user-friendly applications that solve real-world problems.
            With expertise in <strong>React, TypeScript, and Tailwind CSS</strong>, I focus on creating elegant 
            and efficient solutions.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Home;


