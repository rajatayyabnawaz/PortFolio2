'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { FaCode } from 'react-icons/fa';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-gradient-to-r from-black via-gray-900 to-black text-white shadow-lg border-b border-gray-700 h-20">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Custom Logo */}
        <div className="flex items-center space-x-2 text-2xl font-extrabold tracking-tight">
          <FaCode className="text-blue-400" size={28} />
          <Link href="/" onClick={() => setMenuOpen(false)} className="hover:text-blue-400 transition">
            PortFolio
          </Link>
        </div>

        {/* Hamburger Menu (Mobile) */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="focus:outline-none"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Navigation Links (Desktop) */}
        <nav className="hidden md:flex space-x-8 text-lg font-medium">
          <Link href="/" className="hover:text-blue-400 transition">Home</Link>
          <Link href="/about" className="hover:text-blue-400 transition">About</Link>
          <Link href="/Project" className="hover:text-blue-400 transition">Projects</Link>
          <Link href="/Contact" className="hover:text-blue-400 transition">Contact</Link>
        </nav>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-3 text-lg font-medium bg-black">
          <Link href="/" onClick={() => setMenuOpen(false)} className="block hover:text-blue-400">Home</Link>
          <Link href="/about" onClick={() => setMenuOpen(false)} className="block hover:text-blue-400">About</Link>
          <Link href="/Project" onClick={() => setMenuOpen(false)} className="block hover:text-blue-400">Projects</Link>
          <Link href="/Contact" onClick={() => setMenuOpen(false)} className="block hover:text-blue-400">Contact</Link>
        </div>
      )}
    </header>
  );
};

export default Header;
