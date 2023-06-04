import React from "react";
import { useParams } from "react-router-dom";
import NoMatch from "./NoMatch";
import {
  AnemoCards,
  CryoCards,
  DendroCards,
  ElectroCards,
  GeoCards,
  HydroCards,
  PyroCards,
} from "../components/CardsCharacters";
import useAnimation from "../hooks/useAnimation";
import { sections } from "../constants";
import Gallery from "../components/Gallery";
import Loading from "../components/Loading";

const Section = () => {
  const [animation, loading] = useAnimation();
  const { id } = useParams();
  const UID = id - 1;

  const ID = id;
  const URL__RENDER = {
    1: <AnemoCards />,
    2: <CryoCards />,
    3: <DendroCards />,
    4: <ElectroCards />,
    5: <GeoCards />,
    6: <HydroCards />,
    7: <PyroCards />,
  };
  const DEFAULT__RENDER = <NoMatch />;
  const URL__ACCESS = () => URL__RENDER[ID] || DEFAULT__RENDER;

  return (
    <>
      {sections[UID] ? (
        <section
          className={`w-full py-28 flex justify-center ${
            animation ? "opacity-0" : "opacity-1"
          } transition-opacity duration-[1s]`}
        >
          <div className="w-[1280px] flex justify-center items-center flex-col gap-16">
            <div className="w-full flex flex-col gap-8">
              <h2
                className={`py-3 sm:py-4 text-5 font-medium rounded-xl text-xl sm:text-2xl lg:text-4xl tracking-wide text-center shadow-lg shadow-gray-950/25 bg-${sections[UID].element}`}
              >
                {sections[UID].title}
              </h2>
              <p className="font-light text-[0.75em] sm:text-xl text-center">
                {sections[UID].desc}
              </p>
            </div>

            {loading === true ? (
              <Loading />
            ) : (
              <aside className="flex justify-center gap-6 flex-row flex-wrap">
                {URL__ACCESS()}
              </aside>
            )}

            <div className="w-full flex flex-col gap-12">
              <h2
                className={`py-4 px-16 text-5 font-medium rounded-xl text-xl md:text-2xl lg:text-4xl tracking-wide text-center shadow-lg shadow-gray-950/25 bg-${sections[UID].element}`}
              >
                Otras Secciones
              </h2>
            </div>

            <Gallery />
          </div>
        </section>
      ) : (
        <NoMatch />
      )}
    </>
  );
};

export default Section;
