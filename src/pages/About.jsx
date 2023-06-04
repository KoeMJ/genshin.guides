import React from "react";
import useAnimation from "../hooks/useAnimation";
import { about } from "../constants";

const About = () => {
  const [animation] = useAnimation();
  return (
    <section
      className={`relative w-full flex items-center justify-center gap-8 sm:gap-16 py-28 flex-col ${
        animation ? "opacity-0" : "opacity-1"
      } transition-opacity duration-[1s]`}
    >
      <div className="flex justify-center items-center w-full max-w-[1280px] gap-5 sm:gap-12 flex-col tracking-normal">
        <h2 className="text-2xl text-center sm:text-5xl font-medium">
          ¿Quienes <span className="text-1">somos</span>?{" "}
        </h2>

        <p className="font-light text-[0.75em] sm:text-xl text-center">
          Explorando el mundo de Teyvat: Nuestro equipo de expertos en Genshin
          Impact comparte conocimientos, estrategias y secretos para dominar el
          juego
        </p>
      </div>

      <div className="flex justify-center items-center flex-row flex-wrap gap-8">
        {about.map((info) => (
          <div
            className="flex flex-col items-center text-center gap-2 sm:gap-5 py-12 px-8 bg-1 rounded-xl max-w-[20rem] w-full shadow-lg shadow-gray-950/25 text-5 transition-all duration-500 ease-in-out hover:scale-[1.1]"
            key={info.id}
          >
            <div className="text-2xl sm:text-5xl">{info.icon}</div>
            <h2 className="font-medium text-2xl sm:text-3xl">{info.title}</h2>
            <p className="font-normal text-[0.75em] sm:text-2xl">{info.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
