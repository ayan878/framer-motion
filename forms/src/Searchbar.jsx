// import { useState } from "react";
// import { CiSearch } from "react-icons/ci";
// import { motion } from "framer-motion";

// function Searchbar() {
//   const [isExpanded, setIsExpanded] = useState(false);

//   return (
//     <div className="flex items-center justify-center h-screen">
//       <div className="relative flex items-center">
//         {/* Animated Input Field */}
//         <motion.input
//           type="text"
//           className="border-2 border-gray-300 rounded-full px-4 py-2 outline-none"
//           placeholder={isExpanded ? "Search..." : ""}
//           animate={{
//             width: isExpanded ? "200px" : "0px",
//             opacity: isExpanded ? 1 : 0, 
//             paddingLeft: isExpanded ? "10px" : "0px", 
//             paddingRight: isExpanded ? "40px" : "0px",
//           }}
//           initial={{ width: "0px", opacity: 0 }}
//           transition={{ duration: 0.6, ease: "easeInOut" }}
//         />

//         {/* Search Icon */}
//         <CiSearch
//           className="absolute right-0 mr-4 text-gray-500 cursor-pointer"
//           onClick={() => setIsExpanded((prev) => !prev)}
//         />
//       </div>
//     </div>
//   );
// }

// export default Searchbar;


import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { motion } from "framer-motion";

function Searchbar() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="relative flex items-center">
        {/* Search Icon - Stays at the Right */}
        <CiSearch
          className="text-gray-500 cursor-pointer z-10 mr-4"
          onClick={() => setIsExpanded((prev) => !prev)}
        />

        {/* Animated Input Field - Expands Left */}
        <motion.input
          type="text"
          className="border-2 border-gray-300 rounded-full px-4 py-2 outline-none absolute right-0"
          placeholder={isExpanded ? "Search..." : ""}
          animate={{
            width: isExpanded ? "200px" : "0px",
            opacity: isExpanded ? 1 : 0,
          }}
          initial={{ width: "0px", opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          style={{
            transformOrigin: "right",
          }}
        />
      </div>
    </div>
  );
}

export default Searchbar;
