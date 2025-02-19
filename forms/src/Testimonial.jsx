// import { useState } from "react";

// // import { useEffect, useState } from "react";

// const dummyData = [
//   {
//     image: "https://via.placeholder.com/150",
//     name: "John Doe",
//     desc: "A passionate web developer specializing in MERN stack.",
//   },
//   {
//     image: "https://via.placeholder.com/150",
//     name: "Jane Smith",
//     desc: "A creative UI/UX designer with a love for minimalistic designs.",
//   },
//   {
//     image: "https://via.placeholder.com/150",
//     name: "Mark Johnson",
//     desc: "An experienced backend engineer focusing on Node.js and databases.",
//   },
//   {
//     image: "https://via.placeholder.com/150",
//     name: "Sarah Lee",
//     desc: "A front-end developer skilled in React.js and Tailwind CSS.",
//   },
//   {
//     image: "https://via.placeholder.com/150",
//     name: "Alex Brown",
//     desc: "A product manager with expertise in agile development and strategy.",
//   },
//   {
//     image: "https://via.placeholder.com/150",
//     name: "Emily Davis",
//     desc: "A digital marketer helping brands grow through SEO and social media.",
//   },
//   {
//     image: "https://via.placeholder.com/150",
//     name: "Michael Green",
//     desc: "A data scientist passionate about AI, ML, and data visualization.",
//   },
//   {
//     image: "https://via.placeholder.com/150",
//     name: "Olivia Wilson",
//     desc: "An eCommerce specialist optimizing online sales and conversion rates.",
//   },
//   {
//     image: "https://via.placeholder.com/150",
//     name: "Daniel White",
//     desc: "A cybersecurity expert ensuring online safety and data privacy.",
//   },
//   {
//     image: "https://via.placeholder.com/150",
//     name: "Sophia Martinez",
//     desc: "A content writer crafting compelling stories and brand narratives.",
//   },
// ];

// function Testimonial() {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   // Handle Next Click (Circular Movement)
//   const handleNext = () => {
//     setCurrentIndex((prev) => (prev + 1) % dummyData.length);
//   };

//   // Handle Prev Click (Circular Movement)
//   const handlePrev = () => {
//     setCurrentIndex((prev) => (prev - 1 + dummyData.length) % dummyData.length);
//   };

//   return (
//     <div className="relative w-full h-screen flex flex-col items-center justify-center">
//       {/* Testimonial Container */}
//       <div className="relative w-full h-[400px] flex justify-center items-center bg-neutral-200 overflow-hidden">
//         {dummyData.map((item, index) => {
//           // Calculate position based on index difference
//           let position = index - currentIndex;

//           // Infinite Loop Effect
//           if (position < -Math.floor(dummyData.length / 2))
//             position += dummyData.length;
//           if (position > Math.floor(dummyData.length / 2))
//             position -= dummyData.length;

//           let transformValue = `translateX(${position * 350}px) scale(${
//             index === currentIndex ? 1 : 0.8
//           })`;
//           let zIndex = index === currentIndex ? 10 : 0;
//         //   let opacity = index === currentIndex ? 1 : 0.5;

//           return (
//             <div
//               key={index}
//               className="absolute flex flex-col items-center justify-center p-8 text-black transition-all duration-500 ease-in-out bg-white rounded-lg shadow-lg border border-black"
//               style={{
//                 clipPath:
//                   "polygon(50px 0%, calc(100% - 50px) 0%, 100% 50px, 100% 100%, calc(100% - 50px) 100%, 50px 100%, 0px 100%, 0px 0px)",
//                 width: "320px",
//                 height: "320px",
//                 boxShadow: "black 2px 2px 10px 0px",
//                 transform: transformValue,
//                 zIndex: zIndex,
//                 // opacity: opacity,
//               }}
//             >
//               <img
//                 src={item.image}
//                 alt={item.name}
//                 className="w-24 h-24 rounded-full mx-auto mb-4"
//               />
//               <h1 className="text-lg font-semibold">{item.name}</h1>
//               <p className="text-gray-600">{item.desc}</p>
//             </div>
//           );
//         })}
//       </div>

//       {/* Navigation Buttons */}
//       <div className="flex gap-4 mt-10">
//         <button
//           onClick={handlePrev}
//           className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600"
//         >
//           Prev
//         </button>
//         <button
//           onClick={handleNext}
//           className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600"
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Testimonial;

// correct one
// import { useState } from "react";

// const testimonials = [
//   {
//     image: "https://via.placeholder.com/150",
//     name: "John Doe",
//     desc: "A passionate web developer specializing in MERN stack.",
//   },
//   {
//     image: "https://via.placeholder.com/150",
//     name: "Jane Smith",
//     desc: "A creative UI/UX designer with a love for minimalistic designs.",
//   },
//   {
//     image: "https://via.placeholder.com/150",
//     name: "Mark Johnson",
//     desc: "An experienced backend engineer focusing on Node.js and databases.",
//   },
//   {
//     image: "https://via.placeholder.com/150",
//     name: "Sarah Lee",
//     desc: "A front-end developer skilled in React.js and Tailwind CSS.",
//   },
//   {
//     image: "https://via.placeholder.com/150",
//     name: "Alex Brown",
//     desc: "A product manager with expertise in agile development and strategy.",
//   },
//   {
//     image: "https://via.placeholder.com/150",
//     name: "Emily Davis",
//     desc: "A digital marketer helping brands grow through SEO and social media.",
//   },
//   {
//     image: "https://via.placeholder.com/150",
//     name: "Michael Green",
//     desc: "A data scientist passionate about AI, ML, and data visualization.",
//   },
//   {
//     image: "https://via.placeholder.com/150",
//     name: "Olivia Wilson",
//     desc: "An eCommerce specialist optimizing online sales and conversion rates.",
//   },
//   {
//     image: "https://via.placeholder.com/150",
//     name: "Daniel White",
//     desc: "A cybersecurity expert ensuring online safety and data privacy.",
//   },
//   {
//     image: "https://via.placeholder.com/150",
//     name: "Sophia Martinez",
//     desc: "A content writer crafting compelling stories and brand narratives.",
//   },
// ];

// export default function TestimonialSlider() {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handleNext = () => {
//     setCurrentIndex((prev) => (prev + 1) % testimonials.length);
//   };

//   const handlePrev = () => {
//     setCurrentIndex(
//       (prev) => (prev - 1 + testimonials.length) % testimonials.length
//     );
//   };

//   return (
//     <div className="relative w-full flex flex-col items-center justify-center h-screen">
//       {/* Testimonial Container */}
//       <div className="relative w-full h-[400px] flex items-center justify-center overflow-hidden bg-neutral-200">
//         {testimonials.map((item, index) => {
//           const isActive = index === currentIndex;
//           const position = index - currentIndex;

//           let transformStyle = `translateX(${position * 200}px) rotate(${
//             isActive ? "0deg" : "-2.5deg"
//           })`;
//           let zIndex = isActive ? 10 : 5;
//           let scale = isActive ? 1.1 : 1;

//           return (
//             <div
//               key={index}
//               className={`absolute flex flex-col p-6 shadow-lg transition-all duration-500 ease-in-out bg-white border-2 border-black`}
//               style={{
//                 transform: transformStyle,
//                 zIndex: zIndex,
//                 width: isActive ? "300px" : "280px",
//                 height: isActive ? "300px" : "280px",
//                 scale: scale,
//                 boxShadow: isActive ? "0 8px 24px rgba(0,0,0,0.3)" : "none",
//               }}
//             >
//               <img
//                 src={item.image}
//                 alt={item.name}
//                 className="w-12 h-12 rounded-md mb-3"
//               />
//               <p className="text-lg font-medium">{item.quote}</p>
//               <p className="mt-4 text-sm opacity-80">{item.name}</p>
//             </div>
//           );
//         })}
//       </div>

//       {/* Navigation Buttons */}
//       <div className="flex gap-4 mt-8">
//         <button
//           onClick={handlePrev}
//           className="px-4 py-2 bg-gray-800 text-white rounded-md shadow-md"
//         >
//           Prev
//         </button>
//         <button
//           onClick={handleNext}
//           className="px-4 py-2 bg-gray-800 text-white rounded-md shadow-md"
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// }

// import { useState } from "react";

// const testimonials = [
//   {
//     image: "https://via.placeholder.com/150",
//     name: "John Doe",
//     desc: "MERN stack developer.",
//   },
//   {
//     image: "https://via.placeholder.com/150",
//     name: "Jane Smith",
//     desc: "Creative UI/UX designer.",
//   },
//   {
//     image: "https://via.placeholder.com/150",
//     name: "Mark Johnson",
//     desc: "Backend engineer.",
//   },
//   {
//     image: "https://via.placeholder.com/150",
//     name: "Sarah Lee",
//     desc: "Front-end React developer.",
//   },
//   {
//     image: "https://via.placeholder.com/150",
//     name: "Alex Brown",
//     desc: "Product manager.",
//   },
//   {
//     image: "https://via.placeholder.com/150",
//     name: "Emily Davis",
//     desc: "SEO and social media expert.",
//   },
//   {
//     image: "https://via.placeholder.com/150",
//     name: "Michael Green",
//     desc: "Data scientist.",
//   },
//   {
//     image: "https://via.placeholder.com/150",
//     name: "Olivia Wilson",
//     desc: "eCommerce specialist.",
//   },
//   {
//     image: "https://via.placeholder.com/150",
//     name: "Daniel White",
//     desc: "Cybersecurity expert.",
//   },
//   {
//     image: "https://via.placeholder.com/150",
//     name: "Sophia Martinez",
//     desc: "Content writer.",
//   },
// ];

// export default function CircularTestimonialSlider() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const totalItems = testimonials.length;
//   const radius = 180; // Controls the circular effect size

//   const handleNext = () => {
//     setCurrentIndex((prev) => (prev + 1) % totalItems);
//   };

//   const handlePrev = () => {
//     setCurrentIndex((prev) => (prev - 1 + totalItems) % totalItems);
//   };

//   return (
//     <div className="relative flex flex-col items-center justify-center h-screen w-full bg-neutral-200">
//       {/* Circular Container */}
//       <div className="relative w-[400px] h-[400px]">
//         {testimonials.map((item, index) => {
//           // Calculate angle for circular positioning
//           const angle =
//             (360 / totalItems) *
//             ((index - currentIndex + totalItems) % totalItems);
//           const radians = (angle * Math.PI) / 180;
//           const x = radius * Math.cos(radians);
//           const y = radius * Math.sin(radians);

//           return (
//             <div
//               key={index}
//               className={`absolute flex flex-col items-center p-4 rounded-lg shadow-lg bg-white transition-all duration-700`}
//               style={{
//                 transform: `translate(${x}px, ${y}px)`,
//                 zIndex: index === currentIndex ? 10 : 5,
//                 opacity: index === currentIndex ? 1 : 0.6,
//                 scale: index === currentIndex ? 1.2 : 1,
//               }}
//             >
//               <img
//                 src={item.image}
//                 alt={item.name}
//                 className="w-12 h-12 rounded-full mb-3"
//               />
//               <p className="text-lg font-medium">{item.desc}</p>
//               <p className="mt-2 text-sm font-semibold">{item.name}</p>
//             </div>
//           );
//         })}
//       </div>

//       {/* Navigation Buttons */}
//       <div className="flex gap-4 mt-8">
//         <button
//           onClick={handlePrev}
//           className="px-4 py-2 bg-gray-800 text-white rounded-md shadow-md"
//         >
//           Prev
//         </button>
//         <button
//           onClick={handleNext}
//           className="px-4 py-2 bg-gray-800 text-white rounded-md shadow-md"
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// }

// const testimonials = [
//   {
//     image: "https://via.placeholder.com/150",
//     name: "John Doe",
//     desc: "A passionate web developer specializing in MERN stack.",
//   },
//   {
//     image: "https://via.placeholder.com/150",
//     name: "Jane Smith",
//     desc: "A creative UI/UX designer with a love for minimalistic designs.",
//   },
//   {
//     image: "https://via.placeholder.com/150",
//     name: "Mark Johnson",
//     desc: "An experienced backend engineer focusing on Node.js and databases.",
//   },
//   {
//     image: "https://via.placeholder.com/150",
//     name: "Sarah Lee",
//     desc: "A front-end developer skilled in React.js and Tailwind CSS.",
//   },
//   {
//     image: "https://via.placeholder.com/150",
//     name: "Alex Brown",
//     desc: "A product manager with expertise in agile development and strategy.",
//   },
//   {
//     image: "https://via.placeholder.com/150",
//     name: "Emily Davis",
//     desc: "A digital marketer helping brands grow through SEO and social media.",
//   },
//   {
//     image: "https://via.placeholder.com/150",
//     name: "Michael Green",
//     desc: "A data scientist passionate about AI, ML, and data visualization.",
//   },
//   {
//     image: "https://via.placeholder.com/150",
//     name: "Olivia Wilson",
//     desc: "An eCommerce specialist optimizing online sales and conversion rates.",
//   },
//   {
//     image: "https://via.placeholder.com/150",
//     name: "Daniel White",
//     desc: "A cybersecurity expert ensuring online safety and data privacy.",
//   },
//   {
//     image: "https://via.placeholder.com/150",
//     name: "Sophia Martinez",
//     desc: "A content writer crafting compelling stories and brand narratives.",
//   },
// ];

// export default function InfiniteTestimonialCarousel() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const totalItems = testimonials.length;
//   const autoPlay = true;
//   const intervalTime = 3000; // Auto slide every 3s

//   useEffect(() => {
//     if (!autoPlay) return;
//     const interval = setInterval(() => {
//       handleNext();
//     }, intervalTime);
//     return () => clearInterval(interval);
//   }, [currentIndex]);

//   const handleNext = () => {
//     setCurrentIndex((prev) => (prev + 1) % totalItems);
//   };

//   const handlePrev = () => {
//     setCurrentIndex((prev) => (prev - 1 + totalItems) % totalItems);
//   };

//   return (
//     <div className="relative flex flex-col items-center justify-center h-screen w-full bg-gray-100">
//       {/* Circular Testimonials */}
//       <div className="relative w-[400px] h-[400px]">
//         {testimonials.map((item, index) => {
//           let position = index - currentIndex;

//           // Infinite Loop Effect
//           if (position < -Math.floor(totalItems / 2)) position += totalItems;
//           if (position > Math.floor(totalItems / 2)) position -= totalItems;

//           const scale = position === 0 ? 1.2 : 1;
//         //   const opacity = position === 0 ? 1 : 0.5;
//           const zIndex = position === 0 ? 10 : 5;
//           const transform = `translateX(${position * 200}px) scale(${scale})`;

//           return (
//             <div
//               key={index}
//               className={`absolute flex flex-col items-center p-6 shadow-lg rounded-lg bg-white transition-all duration-500 ease-in-out`}
//               style={{
//                 transform,
//                 // opacity,
//                 zIndex,
//               }}
//             >
//               <img
//                 src={item.image}
//                 alt={item.name}
//                 className="w-12 h-12 rounded-full mb-3"
//               />
//               <p className="text-lg font-medium text-center">{item.desc}</p>
//               <p className="mt-4 text-sm text-gray-600">{item.name}</p>
//             </div>
//           );
//         })}
//       </div>

//       {/* Navigation Buttons */}
//       <div className="flex gap-4 mt-8">
//         <button
//           onClick={handlePrev}
//           className="px-4 py-2 bg-gray-800 text-white rounded-md shadow-md"
//         >
//           Prev
//         </button>
//         <button
//           onClick={handleNext}
//           className="px-4 py-2 bg-gray-800 text-white rounded-md shadow-md"
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// }

//  correct one
// import { useState } from "react";

// const testimonials = [
//   {
//     image: "https://via.placeholder.com/150",
//     name: "John Doe",
//     desc: "A passionate web developer specializing in MERN stack.",
//   },
//   {
//     image: "https://via.placeholder.com/150",
//     name: "Jane Smith",
//     desc: "A creative UI/UX designer with a love for minimalistic designs.",
//   },
//   {
//     image: "https://via.placeholder.com/150",
//     name: "Mark Johnson",
//     desc: "An experienced backend engineer focusing on Node.js and databases.",
//   },
//   {
//     image: "https://via.placeholder.com/150",
//     name: "Sarah Lee",
//     desc: "A front-end developer skilled in React.js and Tailwind CSS.",
//   },
//   {
//     image: "https://via.placeholder.com/150",
//     name: "Alex Brown",
//     desc: "A product manager with expertise in agile development and strategy.",
//   },
//   {
//     image: "https://via.placeholder.com/150",
//     name: "Emily Davis",
//     desc: "A digital marketer helping brands grow through SEO and social media.",
//   },
//   {
//     image: "https://via.placeholder.com/150",
//     name: "Michael Green",
//     desc: "A data scientist passionate about AI, ML, and data visualization.",
//   },
//   {
//     image: "https://via.placeholder.com/150",
//     name: "Olivia Wilson",
//     desc: "An eCommerce specialist optimizing online sales and conversion rates.",
//   },
//   {
//     image: "https://via.placeholder.com/150",
//     name: "Daniel White",
//     desc: "A cybersecurity expert ensuring online safety and data privacy.",
//   },
//   {
//     image: "https://via.placeholder.com/150",
//     name: "Sophia Martinez",
//     desc: "A content writer crafting compelling stories and brand narratives.",
//   },
// ];

// export default function TestimonialSlider() {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handleNext = () => {
//     setCurrentIndex((prev) => (prev + 1) % testimonials.length);
//   };

//   const handlePrev = () => {
//     setCurrentIndex(
//       (prev) => (prev - 1 + testimonials.length) % testimonials.length
//     );
//   };

//   return (
//     <div className="relative w-full flex flex-col items-center justify-center h-screen">
//       {/* Testimonial Container */}
//       <div className="relative w-full h-[400px] flex items-center justify-center overflow-hidden bg-neutral-200">
//         {testimonials.map((item, index) => {
//           const isActive = index === currentIndex;
//           const position = index - currentIndex;
//             if (position < -Math.floor(testimonials.length / 2))
//             position += testimonials.length;
//           if (position > Math.floor(testimonials.length / 2))
//             position -= testimonials.length;

//           let transformStyle = `translateX(${position * 200}px) rotate(${
//             isActive ? "0deg" : "-2.5deg"
//           })`;
//           let zIndex = isActive ? 10 : 5;
//           let scale = isActive ? 1.1 : 1;

//           return (
//             <div
//               key={index}
//               className={`absolute flex flex-col p-6 shadow-lg transition-all duration-500 ease-in-out bg-white border-2 border-black`}
//               style={{
//                 transform: transformStyle,
//                 zIndex: zIndex,
//                 width: isActive ? "300px" : "280px",
//                 height: isActive ? "300px" : "280px",
//                 scale: scale,
//                 boxShadow: isActive ? "0 8px 24px rgba(0,0,0,0.3)" : "none",
//               }}
//             >
//               <img
//                 src={item.image}
//                 alt={item.name}
//                 className="w-12 h-12 rounded-md mb-3"
//               />
//               <p className="text-lg font-medium">{item.quote}</p>
//               <p className="mt-4 text-sm opacity-80">{item.name}</p>
//             </div>
//           );
//         })}
//       </div>

//       {/* Navigation Buttons */}
//       <div className="flex gap-4 mt-8">
//         <button
//           onClick={handlePrev}
//           className="px-4 py-2 bg-gray-800 text-white rounded-md shadow-md"
//         >
//           Prev
//         </button>
//         <button
//           onClick={handleNext}
//           className="px-4 py-2 bg-gray-800 text-white rounded-md shadow-md"
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// }

// import { useState } from "react";

// const testimonials = [
//   {
//     image: "https://via.placeholder.com/150",
//     name: "John Doe",
//     desc: "A passionate web developer specializing in MERN stack.",
//   },
//   {
//     image: "https://via.placeholder.com/150",
//     name: "Jane Smith",
//     desc: "A creative UI/UX designer with a love for minimalistic designs.",
//   },
//   {
//     image: "https://via.placeholder.com/150",
//     name: "Mark Johnson",
//     desc: "An experienced backend engineer focusing on Node.js and databases.",
//   },
//   {
//     image: "https://via.placeholder.com/150",
//     name: "Sarah Lee",
//     desc: "A front-end developer skilled in React.js and Tailwind CSS.",
//   },
//   {
//     image: "https://via.placeholder.com/150",
//     name: "Alex Brown",
//     desc: "A product manager with expertise in agile development and strategy.",
//   },
//   {
//     image: "https://via.placeholder.com/150",
//     name: "Emily Davis",
//     desc: "A digital marketer helping brands grow through SEO and social media.",
//   },
//   {
//     image: "https://via.placeholder.com/150",
//     name: "Michael Green",
//     desc: "A data scientist passionate about AI, ML, and data visualization.",
//   },
//   {
//     image: "https://via.placeholder.com/150",
//     name: "Olivia Wilson",
//     desc: "An eCommerce specialist optimizing online sales and conversion rates.",
//   },
//   {
//     image: "https://via.placeholder.com/150",
//     name: "Daniel White",
//     desc: "A cybersecurity expert ensuring online safety and data privacy.",
//   },
//   {
//     image: "https://via.placeholder.com/150",
//     name: "Sophia Martinez",
//     desc: "A content writer crafting compelling stories and brand narratives.",
//   },
// ];

// export default function TestimonialSlider() {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handleNext = () => {
//     setCurrentIndex((prev) => (prev + 1) % testimonials.length);
//   };

//   const handlePrev = () => {
//     setCurrentIndex(
//       (prev) => (prev - 1 + testimonials.length) % testimonials.length
//     );
//   };

//   return (
//     <div className="relative w-full flex flex-col items-center justify-center h-screen">
//       {/* Testimonial Container */}
//       <div className="relative w-full h-[600px] flex items-center justify-center overflow-hidden bg-neutral-200">
//         {testimonials.map((item, index) => {
//           const isActive = index === currentIndex;
//           let position = index - currentIndex;

//           // Adjust position for infinite loop
//           if (position < -Math.floor(testimonials.length / 2)) {
//             position += testimonials.length;
//           }
//           if (position > Math.floor(testimonials.length / 2)) {
//             position -= testimonials.length;
//         }

//           // Calculate transform and scale
//           const transformStyle = `translateX(${position * 200}px) rotate(${
//             isActive ? "0deg" : "-2.5deg"
//           })`;
//           const scale = isActive ? 1.1 : 1;

//           return (
//             <div
//               key={index}
//               className={`absolute flex flex-col p-6 transition-all duration-500 ease-in-out bg-white border-4 shadow-inner border-black`}
//               style={{
//                 rotate:
//                   index % 2 !== 0 && !isActive
//                     ? "2.5deg"
//                     : isActive
//                     ? "0deg"
//                     : "-2.5deg",
//                 transform: transformStyle,
//                 zIndex: isActive ? 10 : 5,
//                 bottom: isActive ? "120px" : "",
//                 width: isActive ? "320px" : "280px",
//                 height: isActive ? "320px" : "280px",
//                 scale: scale,
//                 backgroundColor: isActive ? "#4f46e5" : "",
//                 boxShadow: isActive ? "0 8px 24px rgba(0,0,0,0.3)" : "none",
//               }}
//             >
//               <img
//                 src={item.image}
//                 alt={item.name}
//                 className="w-12 h-12 rounded-md mb-3"
//               />
//               <p className="text-lg font-medium">{item.desc}</p>
//               <p className="mt-4 text-sm opacity-80">{item.name}</p>
//             </div>
//           );
//         })}
//       </div>

//       {/* Navigation Buttons */}
//       <div className="flex gap-4 mt-8">
//         <button
//           onClick={handlePrev}
//           className="px-4 py-2 bg-gray-800 text-white rounded-md shadow-md"
//         >
//           Prev
//         </button>
//         <button
//           onClick={handleNext}
//           className="px-4 py-2 bg-gray-800 text-white rounded-md shadow-md"
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// }

// import { useState } from "react";

// const testimonials = [
//   {
//     image: "https://via.placeholder.com/150",
//     name: "John Doe",
//     desc: "A passionate web developer specializing in MERN stack.",
//   },
//   {
//     image: "https://via.placeholder.com/150",
//     name: "Jane Smith",
//     desc: "A creative UI/UX designer with a love for minimalistic designs.",
//   },
//   {
//     image: "https://via.placeholder.com/150",
//     name: "Mark Johnson",
//     desc: "An experienced backend engineer focusing on Node.js and databases.",
//   },
//   {
//     image: "https://via.placeholder.com/150",
//     name: "Sarah Lee",
//     desc: "A front-end developer skilled in React.js and Tailwind CSS.",
//   },
//   {
//     image: "https://via.placeholder.com/150",
//     name: "Alex Brown",
//     desc: "A product manager with expertise in agile development and strategy.",
//   },
//   {
//     image: "https://via.placeholder.com/150",
//     name: "Emily Davis",
//     desc: "A digital marketer helping brands grow through SEO and social media.",
//   },
//   {
//     image: "https://via.placeholder.com/150",
//     name: "Michael Green",
//     desc: "A data scientist passionate about AI, ML, and data visualization.",
//   },
//   {
//     image: "https://via.placeholder.com/150",
//     name: "Olivia Wilson",
//     desc: "An eCommerce specialist optimizing online sales and conversion rates.",
//   },
//   {
//     image: "https://via.placeholder.com/150",
//     name: "Daniel White",
//     desc: "A cybersecurity expert ensuring online safety and data privacy.",
//   },
//   {
//     image: "https://via.placeholder.com/150",
//     name: "Sophia Martinez",
//     desc: "A content writer crafting compelling stories and brand narratives.",
//   },
// ];

// export default function TestimonialSlider() {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handleNext = () => {
//     setCurrentIndex((prev) => (prev + 1) % testimonials.length);
//   };

//   const handlePrev = () => {
//     setCurrentIndex(
//       (prev) => (prev - 1 + testimonials.length) % testimonials.length
//     );
//   };

//   return (
//     <div className="relative w-full flex flex-col items-center justify-center h-screen">
//       {/* Testimonial Container */}
//       <div className="relative w-full h-[600px] flex items-center justify-center overflow-hidden bg-neutral-200">
//         {testimonials.map((item, index) => {
//           const isActive = index === currentIndex;
//           let position = index - currentIndex;

//           // Adjust position for infinite loop
//           if (position < -Math.floor(testimonials.length / 2)) {
//             position += testimonials.length;
//           }
//           if (position > Math.floor(testimonials.length / 2)) {
//             position -= testimonials.length;
//           }

//           // Calculate transform, scale, and zIndex
//           const transformStyle = `translateX(${position * 200}px) rotate(${
//             isActive ? "0deg" : "-2.5deg"
//           })`;
//           const scale = isActive ? 1.1 : 1;
//           const zIndex = isActive ? 10 : 5 - Math.abs(position); // Adjust zIndex based on position

//           return (
//             <div
//               key={index}
//               className={`absolute flex flex-col p-6 transition-all duration-500 ease-in-out bg-white border-4 shadow-inner border-black`}
//               style={{
//                 rotate:
//                   index % 2 !== 0 && !isActive
//                     ? "2.5deg"
//                     : isActive
//                     ? "0deg"
//                     : "-2.5deg",
//                 transform: transformStyle,
//                 zIndex: zIndex,
//                 bottom: isActive ? "120px" : "",
//                 width: isActive ? "320px" : "280px",
//                 height: isActive ? "320px" : "280px",
//                 scale: scale,
//                 backgroundColor: isActive ? "#4f46e5" : "",
//                 boxShadow: isActive ? "0 8px 24px rgba(0,0,0,0.3)" : "none",
//               }}
//             >
//               <img
//                 src={item.image}
//                 alt={item.name}
//                 className="w-12 h-12 rounded-md mb-3"
//               />
//               <p className="text-lg font-medium">{item.desc}</p>
//               <p className="mt-4 text-sm opacity-80">{item.name}</p>
//             </div>
//           );
//         })}
//       </div>

//       {/* Navigation Buttons */}
//       <div className="flex gap-4 mt-8">
//         <button
//           onClick={handlePrev}
//           className="px-4 py-2 bg-gray-800 text-white rounded-md shadow-md"
//         >
//           Prev
//         </button>
//         <button
//           onClick={handleNext}
//           className="px-4 py-2 bg-gray-800 text-white rounded-md shadow-md"
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// }

// Completed One

import { useState } from "react";

const testimonials = [
  {
    image: "https://via.placeholder.com/150",
    name: "John Doe",
    desc: "A passionate web developer specializing in MERN stack.",
  },
  {
    image: "https://via.placeholder.com/150",
    name: "Jane Smith",
    desc: "A creative UI/UX designer with a love for minimalistic designs.",
  },
  {
    image: "https://via.placeholder.com/150",
    name: "Mark Johnson",
    desc: "An experienced backend engineer focusing on Node.js and databases.",
  },
  {
    image: "https://via.placeholder.com/150",
    name: "Sarah Lee",
    desc: "A front-end developer skilled in React.js and Tailwind CSS.",
  },
  {
    image: "https://via.placeholder.com/150",
    name: "Alex Brown",
    desc: "A product manager with expertise in agile development and strategy.",
  },
  {
    image: "https://via.placeholder.com/150",
    name: "Emily Davis",
    desc: "A digital marketer helping brands grow through SEO and social media.",
  },
  {
    image: "https://via.placeholder.com/150",
    name: "Michael Green",
    desc: "A data scientist passionate about AI, ML, and data visualization.",
  },
  {
    image: "https://via.placeholder.com/150",
    name: "Olivia Wilson",
    desc: "An eCommerce specialist optimizing online sales and conversion rates.",
  },
  {
    image: "https://via.placeholder.com/150",
    name: "Daniel White",
    desc: "A cybersecurity expert ensuring online safety and data privacy.",
  },
  {
    image: "https://via.placeholder.com/150",
    name: "Sophia Martinez",
    desc: "A content writer crafting compelling stories and brand narratives.",
  },
];

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };
  console.log(currentIndex);

  return (
    <div className="relative w-full flex flex-col items-center justify-center h-screen  bg-neutral-200">
      {/* Testimonial Container */}
      <div className="relative w-full h-[600px] flex items-center justify-center overflow-hidden">
        {testimonials.map((item, index) => {
          const isActive = index === currentIndex;
          let position = index - currentIndex;

          // Adjust position for infinite loop
          if (position < -Math.floor(testimonials.length / 2)) {
            position += testimonials.length;
          }
          if (position > Math.floor(testimonials.length / 2)) {
            position -= testimonials.length;
          }

          // Only render testimonials within the visible range
          const isVisible = Math.abs(position) <= 3; // Adjust this range as needed

          // Calculate transform, scale, and zIndex
          const transformStyle = `translateX(${position * 200}px) rotate(${
            isActive ? "0deg" : "-2.5deg"
          })`;
          const scale = isActive ? 1.1 : 1;
          const zIndex = isActive ? 10 : 5 - Math.abs(position);

          return (
            <div
              key={index}
              className={`absolute flex flex-col p-6 transition-all duration-500 ease-in-out bg-white border-4 border-black`}
              style={{
                rotate:
                  index % 2 !== 0 && !isActive
                    ? "2.5deg"
                    : isActive
                    ? "0deg"
                    : "-2.5deg",
                transform: transformStyle,
                zIndex: zIndex,
                bottom: isActive ? "160px" : "",
                width: isActive ? "320px" : "280px",
                height: isActive ? "320px" : "280px",
                scale: scale,
                backgroundColor: isActive ? "#F9E897" : "",
                border: isActive ? "black 8px solid" : "black 4px solid",
                boxShadow: isActive ? "inset 0 0 4px rgba(0,0,0,0.9)" : "none",
                opacity: isVisible ? 1 : 0, // Hide out-of-range testimonials
                visibility: isVisible ? "visible" : "hidden", // Hide out-of-range testimonials
              }}
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-12 h-12 rounded-md mb-3"
              />
              <p className="text-lg font-medium">{item.desc}</p>
              <p className="mt-4 text-sm opacity-80">{item.name}</p>
            </div>
          );
        })}
      </div>

      {/* Navigation Buttons */}
      <div className="absolute bottom-10 flex gap-4 mt-8">
        <button
          onClick={handlePrev}
          className="px-4 py-2 bg-gray-800 text-white rounded-md shadow-md"
        >
          Prev
        </button>
        <button
          onClick={handleNext}
          className="px-4 py-2 bg-gray-800 text-white rounded-md shadow-md"
        >
          Next
        </button>
      </div>
    </div>
  );
}
