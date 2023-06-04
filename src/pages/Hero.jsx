import React from "react";
import useAnimation from "../hooks/useAnimation";
import { Link } from "react-router-dom";
import { NoelleThumbOne, NoelleThumbTwo } from "../components/NoelleComponet";

const Hero = () => {
  const [animation] = useAnimation();
  return (
    <section
      className={`relative w-full flex sm:block items-center gap-12 sm:gap-16 py-28 lg:py-0 flex-col ${
        animation ? "opacity-0" : "opacity-1"
      } transition-opacity duration-[1s]`}
    >
      <div className="flex justify-center sm:justify-start w-full max-w-[700px] gap-5 sm:gap-12 flex-row flex-wrap tracking-normal">
        <h2 className="text-[1.25em] text-center sm:text-left sm:text-5xl font-medium">
          Descubre todos los secretos de{" "}
          <span className="text-1">Genshin Impact</span> con nuestras guías
        </h2>

        <p className="font-light text-[0.75em] sm:text-xl text-center sm:text-left mb-3">
          <span>
            Somos una página que investiga y compila las mejores guías de los
            personajes de Genshin Impact de manera rápida y sencilla.
          </span>
        </p>

        <button className="transition-all duration-300 hover:scale-[1.2]">
          <Link to="/nosotros" className="text-5 text-[0.75em] uppercase font-semibold py-4 px-16 rounded-xl cursor-pointer bg-1 shadow-lg shadow-gray-950/25 text-center sm:text-left sm:text-xl">
            <span>Nosotros</span>
          </Link>
        </button>
      </div>

      <NoelleThumbOne />
      <NoelleThumbTwo />
    </section>
  );
};

export default Hero;
