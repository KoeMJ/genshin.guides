import React from "react";
import { socialMedias } from "../constants";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="flex justify-center items-center w-full left-0 h-[125px] absolute bottom-0 z-40">
      <ul className="flex gap-5 text-xl transition-transform duration-500 sm:text-3xl">
        {socialMedias.map((media) => {
          return (
            <li
              className="transition-transform duration-300 ease-in-out cursor-pointer  hover:duration-500 hover:scale-125 hover:text-1"
              key={media.id}
            >
              <Link to={media.link} target="about_blank">{media.icon}</Link>
            </li>
          );
        })}
      </ul>
    </footer>
  );
};

export default Footer;
