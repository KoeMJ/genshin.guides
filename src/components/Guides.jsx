import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { anemoCards } from "../elements/cardsJS/anemoCards";
import { cryoCards } from "../elements/cardsJS/cryoCards";
import { dendroCards } from "../elements/cardsJS/dendroCards";
import { electroCards } from "../elements/cardsJS/electroCards";
import { geoCards } from "../elements/cardsJS/geoCards";
import { hydroCards } from "../elements/cardsJS/hydroCards";
import { pyroCards } from "../elements/cardsJS/pyroCards";
import { GlobalContext } from "../context/GlobalContext";
import { FaTimes } from "react-icons/fa";

const Guides = () => {
  const { isGuides, toggleGuides } = useContext(GlobalContext);

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

  if (isGuides) {
    document.body.classList.add("overflow-y-hidden");
  } else {
    document.body.classList.remove("overflow-y-hidden");
  }

  return (
    <div
      className={`fixed top-0 w-full h-screen flex flex-col justify-center items-center overflow-hidden z-50 transition-all duration-[1s] ${
        isGuides ? "left-0" : "left-[100%]"
      }`}
    >
      <div
        className="fixed bg-11 w-full h-screen backdrop-blur-2xl"
        onClick={toggleGuides}
      ></div>

      <div className="w-[1280px] max-w-full p-8 flex flex-col gap-12 z-50 relative">
        <h2
          className={`py-4 px-16 text-5 font-medium rounded-xl text-center text-xl sm:text-2xl lg:text-4xl tracking-wide shadow-lg shadow-gray-950/25 bg-${allCards[ID].elementId}`}
        >
          {allCards[ID].name} Infografia
        </h2>

        <img
          className="rounded-2xl"
          src={allCards[ID].img}
          alt={allCards[ID].name}
        />
      </div>
    </div>
  );
};

export default Guides;
