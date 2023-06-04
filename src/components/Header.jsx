import React, { useContext } from "react";

import { FaBars, FaTimes, IoMoonOutline, IoSunnyOutline } from "react-icons/all";
import { GlobalContext } from "../context/GlobalContext";
import { NavBarDesktop, NavBarMobile } from "./NavBars";
import { NavLink } from "react-router-dom";

const Header = () => {
  const { isDark, isToggleMenu, toggleDark, toggleMenu } = useContext(GlobalContext);

  return (
    <header className="absolute flex justify-between items-center w-full h-[100px] top-0 left-0 right-0 py-8 px-8 sm:py-16 lg:px-16 z-50 transition-opacity duration-[1s] ">

      <div className="grow-[1] basis-0">
        <NavLink className="font-semibold text-xl sm:text-2xl lg:text-3xl" to={`/`}>Noelle Mains</NavLink>
      </div>

      <NavBarDesktop />
      <NavBarMobile />
      
      <div className="grow-[1] basis-0 justify-end flex gap-2 sm:gap-5">
        <button
          className="text-2xl sm:text-4xl cursor-pointer"
          onClick={toggleDark}>
          {isDark ? <IoMoonOutline /> : <IoSunnyOutline />}
        </button>

        <button
          className="text-2xl sm:text-4xl cursor-pointer z-[150] lg:hidden"
          onClick={toggleMenu}>
          {isToggleMenu ? <FaTimes/> : <FaBars/>}
  
        </button>
      </div>
    </header>
  );
};

export default Header;
