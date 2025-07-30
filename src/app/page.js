'use client';
import React from 'react';
import Link from 'next/link';
import About from './about/page';
import Project from './Project/page';
import Contact from './Contact/page';
const Home = () => {
  return (
    <>
    <main className="min-h-screen bg-gradient-to-br from-black to-gray-900 text-white p-8 flex flex-col justify-center items-center">
      <h1 className="text-4xl md:text-6xl font-bold text-center mb-6">Hi, I’m Tayyab Nawaz</h1>
      <p className="text-xl md:text-2xl text-gray-300 text-center max-w-2xl mb-10">
        A passionate MERN Stack Developer, Next.js Enthusiast & Data Analyst — building full-stack applications and exploring data to drive meaningful decisions.
      </p>
      <div className="flex gap-6">
        <Link href="/about">
          <button className="bg-white text-black px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-300 transition">
            More About Me
          </button>
        </Link>
        <Link href="/Project">
          <button className="bg-transparent border border-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-white hover:text-black transition">
            My Projects
          </button>
        </Link>
      </div>
    </main>
    <About/>
    <Project/>
    <Contact/>
    </>
  );
};

export default Home;
