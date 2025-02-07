const Contact = () => {
    return (
      <section id="contact" className="h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
        <div className="max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Get in Touch</h2>
          <p className="mt-4 text-gray-700 dark:text-gray-300">Feel free to reach out for collaboration or inquiries.</p>
          <form className="mt-6">
            <input type="text" placeholder="Your Name" className="w-full p-3 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white" />
            <input type="email" placeholder="Your Email" className="w-full p-3 mt-3 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white" />
            <textarea placeholder="Your Message" className="w-full p-3 mt-3 h-32 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white"></textarea>
            <button className="mt-4 px-6 py-3 bg-blue-500 text-white rounded-lg">Send Message</button>
          </form>
        </div>
      </section>
    );
  };
  
export default Contact;
  