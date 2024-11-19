import { useContext, useState } from "react";
import Cloud from "./assets/cloud.svg";
import Star from "./assets/star.svg";
import { easeInOut, easeIn, motion } from "framer-motion";
import { Context } from "./ContextProvider";


const Toggles = () => {
  const [toggle, setToggle] = useState(false);
  const { theme,setTheme } = useContext(Context);

  const handleToggles = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    setToggle((prev) => !prev);
    console.log(theme);
    
  };

  return (
    <div
      className="flex items-center justify-center transition-colors"
      onClick={handleToggles}
    >
      {toggle ? (
        // Light theme active, display "On" state of the toggle button
        <button className="p-2 w-28 rounded-full flex shadow-lg relative bg-gradient-to-b justify-start from-indigo-600 to-indigo-400">
          <div className="h-10 w-10 rounded-full overflow-hidden shadow-lg relative">
            <div className="absolute inset-0 bg-slate-100"></div>
            <div className="w-3 h-3 rounded-full bg-slate-300 absolute right-2.5 bottom-1"></div>
            <div className="w-3 h-3 rounded-full absolute left-1 bottom-4 bg-slate-300"></div>
            <div className="w-2 h-2 rounded-full bg-slate-300 absolute right-2 top-2"></div>
          </div>

          {/* Star animations */}
          <motion.span
            className="absolute"
            style={{
              right: `${44}px`,
              top: "10px",
              width: "15px",
              height: "15px",
              rotate: "8deg",
            }}
            animate={{
              scale: [0.6, 1.2],
              opacity: [0.3, 1],
            }}
            transition={{
              duration: 1,
              delay: 0.5,
              repeat: Infinity,
              ease: easeIn,
            }}
          >
            <img src={Star} alt="star" className="w-full h-full object-cover" />
          </motion.span>
          <motion.span
            className="absolute"
            style={{
              right: "16px",
              top: "10px",
              width: "10px",
              height: "10px",
              rotate: "20deg",
            }}
            animate={{
              scale: [1, 2.2],
              opacity: [0.3, 1],
            }}
            transition={{
              duration: 1,
              delay: 0.8,
              repeat: Infinity,
              repeatType: "reverse",
              ease: easeIn,
            }}
          >
            <img src={Star} alt="star" className="w-full h-full object-cover" />
          </motion.span>
          <motion.span
            className="absolute"
            style={{
              right: "30px",
              bottom: "12px",
              width: "10px",
              height: "10px",
              rotate: "4deg",
            }}
            animate={{
              scale: [0.6, 2],
              opacity: [0.3, 1],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatType: "reverse",
              ease: easeIn,
            }}
          >
            <img src={Star} alt="star" className="w-full h-full object-cover" />
          </motion.span>
        </button>
      ) : (
        // Dark theme active, display "Off" state of the toggle button
        <button className="p-2 w-28 rounded-full flex shadow-lg relative bg-gradient-to-b justify-end from-blue-500 to-sky-300">
          <div className="h-10 w-10 rounded-full overflow-hidden shadow-lg relative">
            <div className="absolute inset-0 animate-pulse bg-gradient-to-tr from-amber-300 to-yellow-500 rounded-full"></div>
            <div className="absolute inset-1.5 rounded-full bg-amber-300"></div>
          </div>

          {/* Cloud animations */}
          {Array.from({ length: 4 }).map((_, index) => (
            <motion.span
              key={index}
              className="text-white text-xs absolute"
              style={{
                left: `${Math.random() * index * 16}px`,
                top: `${index === 0 ? 16 : index * 10}px`,
                width: `${index === 0 ? 1.5 * 6 : index * 6}px`,
                height: `${index * 4}px`,
              }}
              animate={{
                x: [Math.random() * 20 - 10, Math.random() * 70],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 4,
                delay: index === 0 ? 0 : index * 0.8,
                repeat: Infinity,
                ease: easeInOut,
              }}
            >
              <img src={Cloud} alt="cloud" />
            </motion.span>
          ))}
        </button>
      )}
    </div>
  );
};

export default Toggles;
