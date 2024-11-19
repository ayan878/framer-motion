import React, { useContext } from "react";
import { Context } from "./ContextProvider";
import Toggles from "./Toggles";

const App: React.FC = () => {
  const { theme } = useContext(Context);

  return (
    <div
      className={`mt-24 h-screen flex items-center justify-center mx-auto transition-all ${
        theme === "light" ? "bg-backgroundLight" : "bg-backgroundDark"
      }`}
    >
      <Toggles />
      
    </div>
  );
};

export default App;
