'use client';
import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaPhoneAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Page = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-black text-white p-4 flex flex-col items-center justify-center">
      <div className="bg-gray-900 p-10 rounded-lg shadow-lg w-full max-w-2xl">
        <h2 className="text-3xl font-bold mb-6 text-center">Contact Me</h2>
        <form
          action="https://formspree.io/f/xkgznqwq"
          method="POST"
          className="space-y-5"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full p-3 rounded bg-gray-800 border border-gray-700 text-white"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full p-3 rounded bg-gray-800 border border-gray-700 text-white"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={form.subject}
            onChange={handleChange}
            className="w-full p-3 rounded bg-gray-800 border border-gray-700 text-white"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={form.message}
            onChange={handleChange}
            required
            className="w-full p-3 rounded bg-gray-800 border border-gray-700 text-white"
          />
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Social Links Section */}
      <div className="mt-8 text-center">
        <h3 className="text-2xl font-semibold mb-4">Connect with Me</h3>
        <div className="flex justify-center gap-6 text-2xl">
          <a
            href="mailto:tayyabnawaz177@gmail.com"
            className="hover:text-green-400"
            title="Email"
          >
            <MdEmail />
          </a>
          <a
            href="tel:03321577920"
            className="hover:text-green-400"
            title="Phone"
          >
            <FaPhoneAlt />
          </a>
          <a
            href="https://github.com/rajatayyabnawaz/OpenAi-Project"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-400"
            title="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/rajatayyabnawaz177"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-400"
            title="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://instagram.com/rajatayyabnawaz177"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-400"
            title="Instagram"
          >
            <FaInstagram />
          </a>
        </div>

        {/* Download CV Button */}
        <div className="mt-6">
          <a
            href="/Resume  -  Raja Tayyab Nawaz.pdf"
            download
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded"
          >
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default Page;
