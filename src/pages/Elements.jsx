import React from "react";
import useAnimation from "../hooks/useAnimation";
import Gallery from "../components/Gallery";

const Elements = () => {
  const [animation] = useAnimation();
  return (
    <section className={`relative w-full flex items-center justify-center gap-8 sm:gap-16 py-28 flex-col ${
      animation ? "opacity-0" : "opacity-1"
    } transition-opacity duration-[1s]`}>

      <div className="flex justify-center items-center w-full max-w-[1280px] gap-5 sm:gap-12 flex-col tracking-normal">
        <h2 className="text-2xl text-center sm:text-5xl font-medium">
          Todos los <span className="text-1">elementos</span> en un solo lugar
        </h2>

        <p className="font-light text-[0.75em] sm:text-xl text-center">
          Descubre y domina los elementos de Genshin Impact. Sumérgete en un
          mundo de magia elemental y desata tu poder en este emocionante juego
          de aventuras.
        </p>

      </div>

      <Gallery />
    </section>
  );
};

export default Elements;
