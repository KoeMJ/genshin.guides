import React, { useContext } from "react";
import useAnimation from "../hooks/useAnimation";
import Gallery from "../components/Gallery";
import NoMatch from "./NoMatch";
import Loading from "../components/Loading";
import { useParams } from "react-router-dom";
import { anemoCards } from "../elements/cardsJS/anemoCards";
import { cryoCards } from "../elements/cardsJS/cryoCards";
import { dendroCards } from "../elements/cardsJS/dendroCards";
import { electroCards } from "../elements/cardsJS/electroCards";
import { geoCards } from "../elements/cardsJS/geoCards";
import { hydroCards } from "../elements/cardsJS/hydroCards";
import { pyroCards } from "../elements/cardsJS/pyroCards";
import Guides from "../components/Guides";
import { GlobalContext } from "../context/GlobalContext";

const Character = () => {
  const { toggleGuides } = useContext(GlobalContext);
  const [animation, loading] = useAnimation();
  const { id } = useParams();
  const ID = id - 1;

  const allCards = [
    ...anemoCards,
    ...cryoCards,
    ...dendroCards,
    ...electroCards,
    ...geoCards,
    ...hydroCards,
    ...pyroCards,
  ];

  return (
    <>
      {allCards[ID] ? (
        <section
          className={`w-full py-28 flex justify-center ${
            animation ? "opacity-0" : "opacity-1"
          } transition-opacity duration-[1s]`}
        >
          <div className="w-[1024px] flex justify-center items-center flex-col gap-8 sm:gap-16">
            <div className="w-full flex flex-col gap-12">
              <h2
                className={`py-4 px-16 text-5 font-medium rounded-xl text-xl sm:text-2xl lg:text-4xl tracking-wide text-center shadow-lg shadow-gray-950/25 bg-${allCards[ID].elementId}`}
              >
                {allCards[ID].name} Guia
              </h2>
            </div>

            {loading === true ? (
              <Loading />
              ) : (
                <div className="flex flex-col gap-5 p-1">
                <Guides/>
                <img
                  className="rounded-lg w-full shadow-lg shadow-gray-950/25 cursor-pointer hover:scale-105 hover:drop-shadow-xl transition-all duration-500 select-none"
                  src={allCards[ID].img}
                  alt={allCards[ID].name}
                  onClick={toggleGuides}
                />
              </div>
            )}

            <div className="w-full flex flex-col gap-12">
              <h2
                className={`py-4 px-16 text-5 font-medium rounded-xl text-xl sm:text-2xl lg:text-4xl tracking-wide text-center shadow-lg shadow-gray-950/25 bg-${allCards[ID].elementId}`}
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

export default Character;
