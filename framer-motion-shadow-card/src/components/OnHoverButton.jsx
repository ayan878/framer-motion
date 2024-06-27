import React from "react";
import { stagger, useAnimate } from "framer-motion";
function OnHoverButton() {
  const [scope, animate] = useAnimate();
const letter="Motion"
  const onButtonClick = () => {
    // array  takes three argument first one is dom selector it should be and element child of ref element and 2nd is animation configureation
    animate([
      [".letter", { y: -32 }, { duration: 0.5, delay: stagger(0.05) }],
      ["button", { scale: 0.8 }, { duration: 0.1, at: "<" }],
      ["button", { scale: 1 }, { duration: 0.1 }],
      [".letter", { y: 0 }, { duration: 0.0000001, at: 0.5 }],
    ]);
  };
  return (
    <div ref={scope}>
      <button
        onClick={onButtonClick}
        className="rounded-full border-2 text-2xl border-blue-600 px-6 py-2 text-blue-600 hover:bg-blue-100"
      >
        <span className="sr-only">Motion</span>
        <span className="h-8 overflow-hidden flex" aria-hidden>

            <span
              data-letter={letter}
              className="letter inline-block leading-8 relative h-8 after:absolute after:left-0 after:top-full after:h-8 after:content-[attr(data-letter)]"
            >
              {letter}
            </span>
        </span>
      </button>
    </div>
  );
}

export default OnHoverButton;
