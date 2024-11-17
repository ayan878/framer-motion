import { animate, stagger, useAnimate } from "framer-motion";
import Star from "./assets/star.svg";

const randomNumberBetween = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

type AnimationSequence = Parameters<typeof animate>[0];

const Button = () => {
  const [scope, animate] = useAnimate();

  const onButtonClick = () => {
    const sparkles = Array.from({ length: 20 });

    const sparklesAnimation: AnimationSequence = sparkles.map((_, index) => [
      `.sparkle-${index}`,
      {
        x: randomNumberBetween(-100, 100),
        y: randomNumberBetween(-100, 100),
        scale: randomNumberBetween(1.5, 2.5),
        opacity: 1,
      },
      { duration: 0.4, at: "<" },
    ]);

    const sparklesFadeOut: AnimationSequence = sparkles.map((_, index) => [
      `.sparkle-${index}`,
      {
        opacity: 0,
        scale: 0,
      },
      { duration: 0.3, at: "<" },
    ]);

    // overcome  the rotate like start animation
    const sparklesReset: AnimationSequence = sparkles.map((_, index) => [
      `.sparkle-${index}`,
      {
        x:0,
        y: 0,
      },
      { duration: 0.000001,},
    ]); 
    animate([
      ...sparklesReset,
      [".letter", { y: -32 }, { duration: 0.2, delay: stagger(0.05) }],
      [".button", { scale: 0.8 }, { duration: 0.1, at: "<" }],
      [".button", { scale: 1 }, { duration: 0.1 }],
      ...sparklesAnimation,
      [".letter", { y: 0 }, { duration: 0.000001,}],
      ...sparklesFadeOut,
    ]);
  };

  return (
    <div ref={scope}>
      <button
        className="button relative text-2xl transition-colors rounded-full border-2 border-blue-600 text-blue-600 px-6 py-2 hover:bg-blue-100"
        onClick={onButtonClick}
      >
        <span className="sr-only">Motion</span>
        <span
          aria-hidden
          className="h-8 overflow-hidden flex items-center leading-8"
        >
          {["M", "o", "t", "i", "o", "n"].map((letter, index) => (
            <span
              data-letter={letter}
              className="letter inline-block relative h-8 after:h-8 after:absolute after:left-0 after:top-full after:content-[attr(data-letter)]"
              key={`${index}-${letter}`}
            >
              {letter}
            </span>
          ))}
        </span>
        <span
          aria-hidden
          className="absolute inset-0  block pointer-events-none -z-10"
        >
          {Array.from({ length: 20 }).map((_, index) => (
            <img
              key={index}
              src={Star}
              alt="Star"
              className={`sparkle-${index} absolute left-1/2 top-1/2 opacity-0`}
            />
          ))}
        </span>
      </button>
    </div>
  );
};

export default Button;
