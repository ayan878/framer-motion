import { useState } from "react";
import { motion } from "framer-motion";

export default function App() {
  const [selected, setSelected] = useState("individual");

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Motion Div for Background 1 (Initial Image) */}
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        animate={{
          x: selected === "individual" ? "0%" : "-100%",
        }}
        transition={{
          type: "spring",
          damping: 25,
          stiffness: 250,
        }}
      ></motion.div>

      {/* Motion Div for Background 2 (Second Image) */}
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        animate={{
          x: selected === "company" ? "0%" : "100%",
        }}
        transition={{
          type: "spring",
          damping: 25,
          stiffness: 250,
        }}
      ></motion.div>

      {/* Form Container */}
      <div className="absolute h-screen top-0 left-0 w-2/5 max-w-4xl text-white bg-blue-500 p-6 shadow-lg">
        <form action="submit" className="flex flex-col space-y-4 w-full">
          <h1 className="text-2xl font-bold text-start">Contact us</h1>
          <h2 className="text-xl text-start">Hi 👋! My name is...</h2>

          <input
            type="text"
            placeholder="Your name..."
            className="w-full p-3 bg-blue-600 rounded-md outline-none"
          />

          <div className="space-y-2">
            <span className="text-start">and I represent...</span>
            <SliderToggle selected={selected} setSelected={setSelected} />
          </div>

          {selected === "company" && (
            <motion.div
              initial={{ y: -100 }}
              animate={{ y: 0, opacity: [0.5, 1] }}
              transition={{ type: "spring", stiffness: 250 }}
            >
              <h3 className="text-xl">by the name of...</h3>
              <input
                type="text"
                placeholder="Your company name"
                className="w-full p-3 border border-gray-300 rounded-md"
              />
            </motion.div>
          )}

          <h3 className="text-xl">I'd love to ask about...</h3>

          <textarea
            name="message"
            placeholder="Whatever your heart desires :)"
            className="w-full p-3 border border-gray-300 rounded-md"
          />

          <button
            type="submit"
            className="w-full py-3 bg-white font-bold text-blue-600 rounded-md mt-4 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

const SliderToggle = ({ selected, setSelected }) => {
  const handleToggle = (type) => {
    setSelected(type);
  };
  return (
    <motion.div className="relative rounded-lg flex gap-4 border-[1px] border-white w-fit px-3 py-1.5 transition-colors font-semibold overflow-hidden">
      <button
        type="button"
        className={`px-3 py-1 rounded-l-lg ${
          selected === "individual" ? "text-blue-600" : "text-white"
        }`}
        onClick={() => handleToggle("individual")}
      >
        <span className="relative z-10">An individual</span>
      </button>
      <button
        type="button"
        className={`px-3 py-1 ${
          selected === "company" ? "text-blue-600" : "text-white"
        }`}
        onClick={() => {
          handleToggle("company");
        }}
      >
        <span className="relative z-10">A company</span>
        <div className="absolute inset-0 z-0 flex"></div>
      </button>
      <div
        className={`absolute inset-0 z-0 flex ${
          selected === "individual" ? "justify-start" : "justify-end"
        }`}
      >
        <motion.span
          className={`toggle bg-white h-full w-1/2`}
          layout
          transition={{
            type: "spring",
            damping: 25,
            stiffness: 250,
          }}
        ></motion.span>
      </div>
    </motion.div>
  );
};
