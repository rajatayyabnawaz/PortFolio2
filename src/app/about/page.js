'use client';
import React from 'react';

const skills = [
  { name: 'MongoDB', percent: 90 },
  { name: 'Express.js', percent: 85 },
  { name: 'React.js', percent: 90 },
  { name: 'Node.js', percent: 85 },
  { name: 'Next.js', percent: 80 },
  { name: 'REST APIs', percent: 90 },
  { name: 'JWT/Auth', percent: 85 },
  { name: 'Git/GitHub', percent: 90 },
  { name: 'Tailwind CSS', percent: 95 },
  { name: 'Power BI', percent: 80 },
  { name: 'Tableau', percent: 75 },
  { name: 'SQL', percent: 85 },
];

const languages = [
  { name: 'JavaScript', percent: 95 },
  { name: 'Python', percent: 85 },
  { name: 'SQL', percent: 90 },
  { name: 'HTML', percent: 98 },
  { name: 'CSS', percent: 95 },
  { name: 'PHP', percent: 60 },
];

const ProgressBar = ({ label, percent }) => (
  <div className="mb-4">
    <div className="flex justify-between mb-1">
      <span className="text-sm font-medium text-white">{label}</span>
      <span className="text-sm text-gray-300">{percent}%</span>
    </div>
    <div className="w-full bg-gray-800 rounded-full h-3">
      <div className="bg-green-500 h-3 rounded-full" style={{ width: `${percent}%` }}></div>
    </div>
  </div>
);

const About = () => {
  return (
    <section className="min-h-screen bg-black text-white py-12 px-6 md:px-20 ">
      <div className="max-w-5xl mx-auto space-y-12">

        {/* About Me */}
        <div className="bg-black p-8 rounded-lg shadow-lg border-2">
          <h2 className="text-4xl font-bold mb-6 text-center text-yellow-400">About Me</h2>
          <p className="text-lg md:text-xl leading-relaxed mb-4">
            I'm <strong className="text-yellow-300">Tayyab Nawaz</strong>, a passionate MERN Stack Developer experienced in building full-stack web apps using MongoDB, Express, React.js, and Node.js.
          </p>
          <p className="text-lg md:text-xl leading-relaxed mb-4">
            I also use <strong className="text-yellow-300">Next.js</strong> to create fast, SEO-friendly websites. I build APIs, manage authentication, and deploy full-scale web applications.
          </p>
          <p className="text-lg md:text-xl leading-relaxed mb-4">
            Additionally, I work as a <strong className="text-yellow-300">Data Analyst</strong> using Python, SQL, Excel, Power BI, and Tableau to extract insights and create dashboards.
          </p>
          <p className="text-lg md:text-xl leading-relaxed">
            I'm driven to solve real-world problems through clean code and smart data. Let’s build something great together!
          </p>
        </div>

        {/* Skills */}
        <div className="bg-black p-8 rounded-lg shadow-lg border-2">
          <h2 className="text-3xl font-bold mb-6 text-center text-green-400">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill) => (
              <ProgressBar key={skill.name} label={skill.name} percent={skill.percent} />
            ))}
          </div>
        </div>

        {/* Languages */}
        <div className="bg-black p-8 rounded-lg shadow-lg border-2">
          <h2 className="text-3xl font-bold mb-6 text-center text-blue-400">Languages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {languages.map((lang) => (
              <ProgressBar key={lang.name} label={lang.name} percent={lang.percent} />
            ))}
          </div>
        </div>
<div className="mt-6 items-center text-center">
          <a
            href="/Resume  -  Raja Tayyab Nawaz.pdf"
            download
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded"
          >
            Download CV
          </a>
        </div>
      </div>
      
    </section>
  );
};

export default About;
