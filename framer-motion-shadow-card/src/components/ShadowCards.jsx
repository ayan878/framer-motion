// src/components/ShadowCard.jsx
import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const ShadowCard = ({ imageSrc, altText }) => {
  const controls = useAnimation();
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const { clientX: x, clientY: y } = e;
    const { innerWidth: width, innerHeight: height } = window;

    const rotateX = (y / height - 0.5) * 20;
    const rotateY = (x / width - 0.5) * -20;

    controls.start({
      rotateX,
      rotateY,
      transition: { type: "spring", stiffness: 300, damping: 20 },
    });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    controls.start({ rotateX: 0, rotateY: 0, transition: { duration: 0.5 } });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (isHovered) return;
      controls.start({ rotateX: 0, rotateY: 0, transition: { duration: 0.5 } });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHovered, controls]);

  return (
    <motion.div
      className="w-full h-96 shadow-lg rounded-lg overflow-hidden border-2"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      animate={controls}
      style={{ perspective: "1000px" }}
    >
      <motion.img
        src={imageSrc}
        alt={altText}
        className="w-full h-full object-cover"
        whileHover={{ scale: 1.1 }}
      />
    </motion.div>
  );
};

export default ShadowCard;
