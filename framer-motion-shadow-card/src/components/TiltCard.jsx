import React from "react";

function TiltCard() {
  return (
    <div
      style={{
        transformStyle: "preserve-3d",
        transform: "rotateY(25deg)",
      }}
        // className="relative h-96 w-72 rounded-xl bg-gradient-to-br from-indigo-300 to-violet-300"
      className="relative h-96 w-72 rounded-xl bg-black"
    >
      <div
        style={{
          transform: "translateZ(16px) translateY(-8px)",
          transformStyle: "preserve-3d",
        }}
        className="absolute inset-2 grid  rounded-xl bg-yellow-300 shadow-lg  border-2 border-black"
      >
        Hover Me
      </div>
    </div>
  );
}

export default TiltCard;
