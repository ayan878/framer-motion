import React, { createContext, useState, useEffect } from "react";

// Create context with default values (undefined to start, we'll provide values later)
const Context = createContext();

const ContextProvider = ({ children }) => {
  // Get theme from localStorage or default to 'light'
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  // Effect to apply theme to <html> and save to localStorage
  useEffect(() => {
    const root = window.document.documentElement;
    const colorTheme = theme === "dark" ? "light" : "dark";

    // Remove the old theme and add the new one
    root.classList.remove(colorTheme);
    root.classList.add(theme);

    // Save theme to localStorage
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <Context.Provider value={{ theme, setTheme }}>{children}</Context.Provider>
  );
};

export { ContextProvider, Context };
