import React, { useEffect, useState } from "react";

// Context Global
const GlobalContext = React.createContext();

// Component Functional
const GlobalProvider = ({ children }) => {
  // This function loads the values ​​of the localStorage
  const loadFromLocalStorage = () => {
    const stored = localStorage.getItem("DarkMode");
    return stored ? JSON.parse(stored) : true;
  };

  // State the Dark Mode
  const [isDark, setIsDark] = useState(loadFromLocalStorage());

  // Function to change the state of Dark Mode
  const toggleDark = () => {
    setIsDark(!isDark);
  };

  // We save the state of Dark Mode in the localStorage
  useEffect(() => {
    localStorage.setItem("DarkMode", isDark.toString());
  }, [isDark]);

  // Status to toggle the Menu
  const [isToggleMenu, setIsToggleMenu] = useState(false);

  // Function to change the state of Toggle Menu
  const toggleMenu = () => {
    setIsToggleMenu(!isToggleMenu);
  };

  // Add a class depending on the state value
  if (isToggleMenu) {
    document.body.classList.add("overflow-y-hidden");
  } else {
    document.body.classList.remove("overflow-y-hidden");
  }

  // Estado para alternar el Overlay de las Guias
  const [isGuides, setIsGuides] = useState(false);

  // State to toggle the Overlay of the Guides
  const toggleGuides = () => {
    setIsGuides(!isGuides);
  };

  // We execute an event when the ESC key is pressed
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.keyCode === 27) { // Key code for "ESC" is 27
        setIsGuides(false)
        setIsToggleMenu(false);
      }
    };
    // Add event listener when mounting component
    document.addEventListener('keydown', handleKeyDown);
    // Remove event listener when unmounting component
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isGuides]);

  return (
    <GlobalContext.Provider
      value={{
        isDark,
        isToggleMenu,
        isGuides,
        toggleDark,
        toggleMenu,
        toggleGuides,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalProvider };
