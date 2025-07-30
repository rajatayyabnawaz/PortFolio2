"use client";

import React, { useState } from 'react';
import data from './data'; // Make sure your data has fields like category, image, etc.

const categories = ['All', 'MERN Stack', 'Next.js', 'Data Analyst'];

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredData =
    selectedCategory === 'All'
      ? data
      : data.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <h1 className="text-3xl font-bold text-center mb-8">My Portfolio Projects</h1>

      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {categories.map(cat => (
          <button
            key={cat}
            className={`px-4 py-2 rounded-full text-sm transition ${
              selectedCategory === cat
                ? 'bg-white text-black'
                : 'bg-gray-800 hover:bg-white hover:text-black'
            }`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...filteredData].reverse().map((item, index) => (
          <div
            key={item.id || index}
            className="bg-gray-900 rounded-lg overflow-hidden shadow-lg transition hover:scale-105"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{item.name}</h2>
              <p className="text-sm text-gray-400 mb-1">Category: {item.category}</p>
              <p className="text-base text-gray-300">Description: {item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
