import { useState } from "react";
import { motion, spring } from "framer-motion";

export default function App() {
  const [selected, setSelected] = useState("individual");

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="relative flex mb-6">
        <img
          src="https://via.placeholder.com/150"
          alt="Image 1"
          className="w-full h-auto mb-2"
        />
        <img
          src="https://via.placeholder.com/150"
          alt="Image 2"
          className="w-full h-auto mb-2"
        />
      </div>
      <div className="absolute top-0 left-0 w-2/5 max-w-4xl text-white bg-blue-500 p-6 shadow-lg">
        <form action="submit" className="flex flex-col space-y-6 w-full ">
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
              animate={{ y: 0, opacity: [0.2, 1] }}
              transition={{}}
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
  return (
    <div className="relative flex gap-4 border border-white w-fit px-2 py-1 transition-colors">
      <button
        type="button"
        className={`${
          selected === "individual" ? "text-blue-600" : "text-white"
        }`}
        onClick={() => setSelected("individual")}
      >
        <span className="relative z-10">An individual</span>
      </button>
      <button
        type="button"
        className={`${selected === "company" ? "text-blue-600" : "text-white"}`}
        onClick={() => setSelected("company")}
      >
        <span className="relative z-10">A company</span>
      </button>
      <div
        className={`absolute inset-0 z-0 flex ${
          selected === "individual" ? "justify-start" : "justify-end"
        }`}
      >
        <motion.span
          className="bg-white h-full w-1/2 "
          layout
          transition={{
            type: spring,
            damping: 20,
            stiffness: 120,
          }}
        ></motion.span>
      </div>
    </div>
  );
};
