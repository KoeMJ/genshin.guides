import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { links } from "../constants";
import { GlobalContext } from "../context/GlobalContext";

const NavBarDesktop = () => {
  return (
    <div className={`hidden lg:block`}>
      <nav className="z-50">
        <ul className="flex gap-10">
          {links.map((link) => {
            return (
              <li className="list-none" key={link.id}>
                <NavLink className="font-medium text-xl" to={`/${link.id}`}>
                  {link.name}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

const NavBarMobile = () => {
  const { isToggleMenu, toggleMenu } = useContext(GlobalContext);

  return (
    <div
      className={`lg:hidden inline-flex justify-center items-center fixed top-0 w-full py-20 h-full min-h-screen bg-11 backdrop-blur-xl z-[100] ${
        isToggleMenu ? "left-0" : "left-[100%]"
      } transition-all duration-1000`}
      onClick={toggleMenu}
    >
      <nav>
        <ul className="flex flex-col text-center gap-16">
          {links.map((link) => {
            return (
              <li key={link.id}>
                <NavLink
                  className="font-medium text-2xl md:text-5xl py-8 px-16 rounded-xl transition duration-500 hover:bg-1"
                  to={`/${link.id}`}
                >
                  {link.name}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export { NavBarDesktop, NavBarMobile };
