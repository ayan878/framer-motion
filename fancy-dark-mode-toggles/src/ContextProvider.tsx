import React, { createContext, useState, ReactNode, useEffect } from "react";

// Define the Type for the Context Value
type ThemeContextType = {
  theme: "light" | "dark"; // Only "light" or "dark" can be valid values for theme
  setTheme: React.Dispatch<React.SetStateAction<"light" | "dark">>; // Function to update the theme
};

// Create the Context with the Default Value Typed
const Context = createContext<ThemeContextType>({
  theme: "light", // Default theme is "light"
  setTheme: () => {}, // Default noop function
});

// Context Provider Component with Typed Props
type ContextProviderProps = {
  children: ReactNode; // Type for children prop
};

const ContextProvider: React.FC<ContextProviderProps> = ({ children }) => {
  // Retrieve theme from localStorage (if available), otherwise default to 'light'
  const storedTheme =
    typeof window !== "undefined" ? localStorage.getItem("theme") : null;
  const [theme, setTheme] = useState<"light" | "dark">(
    storedTheme === "dark" ? "dark" : "light"
  );

  // Effect to apply theme to the <html> element
  useEffect(() => {
    const htmlElement = document.documentElement;
    if (theme === "dark") {
      htmlElement.classList.add("dark");
      htmlElement.classList.remove("light");
    } else {
      htmlElement.classList.add("light");
      htmlElement.classList.remove("dark");
    }

    // Save the current theme to localStorage
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <Context.Provider value={{ theme, setTheme }}>{children}</Context.Provider>
  );
};

export { Context, ContextProvider };
