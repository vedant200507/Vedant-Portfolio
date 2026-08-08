import React from 'react';
import { motion } from 'framer-motion';
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhone
} from 'react-icons/fa';

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: 'easeOut' }}
      viewport={{ once: false, amount: 0.2 }}
      id="Contact"
      className="py-20 bg-dark-200"
    >

      <div className="container mx-auto px-6">

        {/* Heading */}
        <h2 className="text-3xl font-bold text-center mb-4">
          Get In
          <span className="text-purple"> Touch</span>
        </h2>

        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          Have a project in mind or want to connect? Feel free to reach out.
        </p>

        {/* Contact Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">

          {/* Contact Form */}
          <div className="bg-dark-300 rounded-2xl p-8">

            <form>

              {/* Name */}
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="block text-gray-300 mb-2"
                >
                  Your Name
                </label>

                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 bg-dark-400 rounded-lg border border-gray-700 focus:outline-none focus:border-purple text-white"
                  required
                />
              </div>

              {/* Email */}
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block text-gray-300 mb-2"
                >
                  Email Address
                </label>

                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 bg-dark-400 rounded-lg border border-gray-700 focus:outline-none focus:border-purple text-white"
                  required
                />
              </div>

              {/* Message */}
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-gray-300 mb-2"
                >
                  Your Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Write your message..."
                  className="w-full px-4 py-3 bg-dark-400 rounded-lg border border-gray-700 focus:outline-none focus:border-purple text-white resize-none"
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3 bg-purple rounded-lg font-semibold hover:opacity-80 transition duration-300"
              >
                Send
              </button>

            </form>

          </div>

          {/* Contact Information */}
          <div className="space-y-8">

            {/* Location */}
            <div className="flex items-start">

              <div className="text-purple text-2xl mr-4">
                <FaMapMarkerAlt />
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Location
                </h3>

                <p className="text-gray-400">
                  Mumbai | Maharashtra
                </p>
              </div>

            </div>

            {/* Email */}
            <div className="flex items-start">

              <div className="text-purple text-2xl mr-4">
                <FaEnvelope />
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Email
                </h3>

                <p className="text-gray-400">
                  vedantkolapkar25@gmail.com
                </p>
              </div>

            </div>

            {/* Phone */}
            <div className="flex items-start">

              <div className="text-purple text-2xl mr-4">
                <FaPhone />
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Phone
                </h3>

                <p className="text-gray-400">
                  +91 8591764911
                </p>
              </div>

            </div>

            {/* Social Media */}
            <div className="pt-4">

              <h3 className="text-lg font-semibold mb-4">
                Follow me
              </h3>

              <div className="flex space-x-4">

                {/* GitHub */}
                <a
                  href="https://github.com/vedant200507"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-purple hover:bg-purple hover:text-white transition duration-300"
                >
                  <FaGithub />
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/vedant-kolapkar-ab6242242/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-purple hover:bg-purple hover:text-white transition duration-300"
                >
                  <FaLinkedin />
                </a>

              </div>

            </div>

          </div>

        </div>

      </div>

    </motion.div>
  );
};

export default Contact;