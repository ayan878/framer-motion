// src/components/Card.jsx
import React from "react";
import { motion } from "framer-motion";

const Card = () => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="bg-yellow-100 rounded-lg shadow-lg p-6 max-w-sm mx-auto relative"
    >
      <div className="absolute top-0 left-0 w-full h-full transform -translate-x-2 translate-y-2 bg-black opacity-10 rounded-lg"></div>
      <div className="relative z-10">
        <div className="flex items-center mb-4">
          <img
            src="https://via.placeholder.com/50"
            alt="Logo"
            className="w-10 h-10 mr-2"
          />
          <h2 className="font-bold text-lg">QUERY.GG</h2>
        </div>
        <div className="flex items-center mb-2">
          <span className="text-yellow-500 text-lg">★★★★★</span>
          <span className="text-sm ml-2">5/5 - 3 Reviews</span>
        </div>
        <p className="mb-4">The official React Query course.</p>
        <a href="#" className="text-blue-500 hover:underline">
          Learn More →
        </a>
      </div>
    </motion.div>
  );
};

export default Card;
