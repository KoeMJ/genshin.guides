import React from "react";
import { anemoCards } from "../elements/cardsJS/anemoCards";
import { NavLink } from "react-router-dom";
import { cryoCards } from "../elements/cardsJS/cryoCards";
import { dendroCards } from "../elements/cardsJS/dendroCards";
import { electroCards } from "../elements/cardsJS/electroCards";
import { geoCards } from "../elements/cardsJS/geoCards";
import { hydroCards } from "../elements/cardsJS/hydroCards";
import { pyroCards } from "../elements/cardsJS/pyroCards";

export const AnemoCards = () => {
  return (
    <>
      {anemoCards.map((cards) => {
        return (
          <article
            className="w-full lg:max-w-[400px] text-center bg-anemo rounded-lg flex flex-col overflow-hidden transition-all ease-out duration-500 shadow-lg shadow-gray-950/25 hover:-translate-y-4"
            key={cards.id}
          >
            <NavLink to={`/personaje/${cards.id}`}>
              <img className="w-full" src={cards.img} alt={cards.name} />
            </NavLink>
            <span className="text-5 tracking-widest text-xl font-medium py-3 px-0">
              {cards.name}
            </span>
          </article>
        );
      })}
    </>
  );
};
export const CryoCards = () => {
  return (
    <>
      {cryoCards.map((cards) => {
        return (
          <article
            className="w-full lg:max-w-[400px] text-center bg-cryo rounded-lg flex flex-col overflow-hidden transition-all ease-out duration-500 shadow-lg shadow-gray-950/25 hover:-translate-y-4"
            key={cards.id}
          >
            <NavLink to={`/personaje/${cards.id}`}>
              <img className="w-full" src={cards.img} alt={cards.name} />
            </NavLink>
            <span className="text-5 tracking-widest text-xl font-medium py-3 px-0">
              {cards.name}
            </span>
          </article>
        );
      })}
    </>
  );
};
export const DendroCards = () => {
  return (
    <>
      {dendroCards.map((cards) => {
        return (
          <article
            className="w-full lg:max-w-[400px] text-center bg-dendro rounded-lg flex flex-col overflow-hidden transition-all ease-out duration-500 shadow-lg shadow-gray-950/25 hover:-translate-y-4"
            key={cards.id}
          >
            <NavLink to={`/personaje/${cards.id}`}>
              <img className="w-full" src={cards.img} alt={cards.name} />
            </NavLink>
            <span className="text-5 tracking-widest text-xl font-medium py-3 px-0">
              {cards.name}
            </span>
          </article>
        );
      })}
    </>
  );
};
export const ElectroCards = () => {
  return (
    <>
      {electroCards.map((cards) => {
        return (
          <article
            className="w-full lg:max-w-[400px] text-center bg-electro rounded-lg flex flex-col overflow-hidden transition-all ease-out duration-500 shadow-lg shadow-gray-950/25 hover:-translate-y-4"
            key={cards.id}
          >
            <NavLink to={`/personaje/${cards.id}`}>
              <img className="w-full" src={cards.img} alt={cards.name} />
            </NavLink>
            <span className="text-5 tracking-widest text-xl font-medium py-3 px-0">
              {cards.name}
            </span>
          </article>
        );
      })}
    </>
  );
};
export const GeoCards = () => {
  return (
    <>
      {geoCards.map((cards) => {
        return (
          <article
            className="w-full lg:max-w-[400px] text-center bg-geo rounded-lg flex flex-col overflow-hidden transition-all ease-out duration-500 shadow-lg shadow-gray-950/25 hover:-translate-y-4"
            key={cards.id}
          >
            <NavLink to={`/personaje/${cards.id}`}>
              <img className="w-full" src={cards.img} alt={cards.name} />
            </NavLink>
            <span className="text-5 tracking-widest text-xl font-medium py-3 px-0">
              {cards.name}
            </span>
          </article>
        );
      })}
    </>
  );
};
export const HydroCards = () => {
  return (
    <>
      {hydroCards.map((cards) => {
        return (
          <article
            className="w-full lg:max-w-[400px] text-center bg-hydro rounded-lg flex flex-col overflow-hidden transition-all ease-out duration-500 shadow-lg shadow-gray-950/25 hover:-translate-y-4"
            key={cards.id}
          >
            <NavLink to={`/personaje/${cards.id}`}>
              <img className="w-full" src={cards.img} alt={cards.name} />
            </NavLink>
            <span className="text-5 tracking-widest text-xl font-medium py-3 px-0">
              {cards.name}
            </span>
          </article>
        );
      })}
    </>
  );
};
export const PyroCards = () => {
  return (
    <>
      {pyroCards.map((cards) => {
        return (
          <article
            className="w-full lg:max-w-[400px] text-center bg-pyro rounded-lg flex flex-col overflow-hidden transition-all ease-out duration-500 shadow-lg shadow-gray-950/25 hover:-translate-y-4"
            key={cards.id}
          >
            <NavLink to={`/personaje/${cards.id}`}>
              <img className="w-full" src={cards.img} alt={cards.name} />
            </NavLink>
            <span className="text-5 tracking-widest text-xl font-medium py-3 px-0">
              {cards.name}
            </span>
          </article>
        );
      })}
    </>
  );
};
