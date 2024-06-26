// src/components/ShuffleCard.jsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ShuffleCards = () => {
  const [cards, setCards] = useState([1, 2, 3, 4, 5]);
  const cardColor = ["#d56", "#75d", "#75dd03", "#d5c6", "#fff"];

  const shuffleCards = () => {
    setCards((prevCards) => {
      const shuffled = [...prevCards];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled;
    });
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="relative w-64 h-96">
        <AnimatePresence>
          {cards.map((card, index) => (
            <motion.div
              key={card}
              className={`${cardColor} absolute w-full h-full bg-blue-500 rounded-lg flex items-center justify-center text-white text-2xl font-bold`}
              drag
              dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
              onDragEnd={shuffleCards}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }}
              style={{ zIndex: cards.length - index }}
            >
              {card}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ShuffleCards;
