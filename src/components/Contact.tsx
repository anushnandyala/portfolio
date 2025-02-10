import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({ name: false, email: false, message: false });
  const [status, setStatus] = useState("");

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: false }); // Reset errors when typing
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    // Validate form fields
    const newErrors = {
      name: !formData.name.trim(),
      email: !formData.email.trim(),
      message: !formData.message.trim(),
    };
    setErrors(newErrors);

    if (!newErrors.name && !newErrors.email && !newErrors.message) {
      setStatus("✅ Message Sent Successfully!");
      setFormData({ name: "", email: "", message: "" }); // Clear form
    } else {
      setStatus("❌ Please fill in all fields.");
    }
  };

  return (
    <section id="contact" className="h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="max-w-2xl text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Get in Touch</h2>
        <p className="mt-4 text-gray-700 dark:text-gray-300">Feel free to reach out for collaboration or inquiries.</p>
        <form onSubmit={handleSubmit} className="mt-6">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full p-3 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white ${
              errors.name ? "border-2 border-red-500" : "border-none"
            }`}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full p-3 mt-3 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white ${
              errors.email ? "border-2 border-red-500" : "border-none"
            }`}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className={`w-full p-3 mt-3 h-32 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white ${
              errors.message ? "border-2 border-red-500" : "border-none"
            }`}
          />
          <button type="submit" className="mt-4 px-6 py-3 bg-blue-500 text-white rounded-lg">
            Send Message
          </button>
        </form>
        {status && <p className="mt-3 text-lg font-semibold text-gray-900 dark:text-white">{status}</p>}
      </div>
    </section>
  );
};

export default Contact;
  