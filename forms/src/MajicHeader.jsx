import { CiCamera, CiChat1, CiHome, CiSettings, CiUser } from "react-icons/ci";

function MajicNavigation() {
  const navItems = [
    { name: "Home", icon: <CiHome />, href: "#" },
    { name: "Profile", icon: <CiUser />, href: "#" },
    { name: "Message", icon: <CiChat1 />, href: "#" },
    { name: "Photos", icon: <CiCamera />, href: "#" },
    { name: "Settings", icon: <CiSettings />, href: "#" },
  ];

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <ul className="relative flex w-96 h-16 bg-gradient-to-r from-blue-500 to-pink-500 rounded-lg">
        {navItems.map((item, index) => (
          <li
            key={index}
            className={`relative w-16 h-16 flex justify-center items-center ${
              index === 0 ? "active" : ""
            }`}
          >
            <a
              href={item.href}
              className="flex flex-col justify-center items-center text-center font-medium text-white"
            >
              <span className="block text-2xl transition-transform duration-500">
                {item.icon}
              </span>
              <span className="absolute text-xs opacity-0 transform translate-y-5 transition-all duration-500">
                {item.name}
              </span>
              <span className="absolute w-12 h-12 bg-transparent border-2 border-white rounded-full transform -translate-y-9 scale-0 transition-all duration-500"></span>
            </a>
          </li>
        ))}
        <div className="absolute top-0 w-16 h-16 bg-gradient-to-r from-blue-500 to-pink-500 border-4 border-gray-900 rounded-full flex justify-center items-center transition-transform duration-500"></div>
      </ul>
    </div>
  );
}

export default MajicNavigation;
