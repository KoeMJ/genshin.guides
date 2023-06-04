import React from "react";
import { NavLink } from "react-router-dom";
import Error404 from "../assets/Error404.svg";

const NoMatch = () => {
  return (
    <div className="flex flex-col p-8 items-center gap-10">

      <figure className="w-1/3 animate-move-slow2">
        <img className="w-full" src={Error404} alt="Error 404" />
      </figure>

      <div className="flex flex-col gap-4 text-center">
        <h3 className="text-5xl font-semibold ">
          Error 404
        </h3>
        <p className="text-2xl">
          Esta pagina no esta disponible.
          Volver a <span className="text-1"><NavLink to="/">Inicio</NavLink></span> 
        </p>
      </div>
    </div>
  );
};

export default NoMatch;
