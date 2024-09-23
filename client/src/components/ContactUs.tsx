import emailjs from "emailjs-com";
import React, { useState } from "react";

const ContactUs: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);

    const templateParams = {
      to_name: "El Walima",
      from_name: name,
      message,
    };

    emailjs.send("hi", "22", templateParams, "HuPnGnBo04aiUOqAQ").then(
      () => {
        console.log("SUCCESS!");
      },
      (error) => {
        console.log("FAILED...", error.text);
      }
    );
  };

  return (
    <div
      className="flex flex-col min-h-screen"
      style={{ backgroundColor: "#fed7aa" }}
    >
      <main className="flex-grow flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="p-8 md:flex">
            <div className="md:w-full">
              <h2 className="text-4xl font-extrabold text-gray-900 mb-4 text-center">
                Get in Touch with Us!
              </h2>
              <p className="text-gray-600 mb-8 text-lg text-center">
                We'd love to hear from you. Fill out the form below, and we'll
                get back to you as soon as possible.
              </p>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your Name"
                    className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your Email"
                    className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Your Message"
                    className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className={`w-full flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-full text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition duration-300 ease-in-out transform hover:-translate-y-1 ${
                    isSubmitted ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                  disabled={isSubmitted}
                  style={{ backgroundColor: "#EA580C" }}
                >
                  {isSubmitted ? "Message Sent!" : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ContactUs;
