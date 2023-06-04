import React from "react";

import {
  FaUsers,
  FaHeart,
  BsCheck2Circle,
  FaGithub,
  FaLinkedinIn,
  FaDiscord,
  FaInstagram,
} from "react-icons/all";

import Anemo from "../assets/icons/Element_Anemo.jpg";
import Cryo from "../assets/icons/Element_Cryo.jpg";
import Dendro from "../assets/icons/Element_Dendro.jpg";
import Electro from "../assets/icons/Element_Electro.jpg";
import Geo from "../assets/icons/Element_Geo.jpg";
import Hydro from "../assets/icons/Element_Hydro.jpg";
import Pyro from "../assets/icons/Element_Pyro.jpg";

export const links = [
  {
    id: "",
    name: "Inicio",
  },
  {
    id: "elementos",
    name: "Elementos",
  },
  {
    id: "nosotros",
    name: "Nosotros",
  },
];

export const about = [
  {
    id: 1,
    title: "Siempre Actualizados",
    text: "Siempre investigamos las mejores opciones para ti",
    icon: React.createElement(BsCheck2Circle),
  },
  {
    id: 2,
    title: "Escuchamos a la comunidad",
    text: "Si la comunidad lo exige lo hacemos. Ustedes son primero",
    icon: React.createElement(FaUsers),
  },
  {
    id: 3,
    title: "¡Disponibles para ti!",
    text: "Nos esforzamos en traerte lo mejor de lo mejor.",
    icon: React.createElement(FaHeart),
  },
];

export const socialMedias = [
  { id: 1, link: 'https://github.com/KoeKun', icon: React.createElement(FaGithub) },
  { id: 2, link: 'https://www.instagram.com/mj3d_kun/', icon: React.createElement(FaInstagram) },
];

export const gallery = [
  { id: 1, img: Anemo, classId: "gallery__thumb-1", sectionId: "anemo" },
  { id: 2, img: Cryo, classId: "gallery__thumb-2", sectionId: "cryo" },
  { id: 3, img: Electro, classId: "gallery__thumb-3", sectionId: "dendro" },
  { id: 4, img: Dendro, classId: "gallery__thumb-4", sectionId: "electro" },
  { id: 5, img: Geo, classId: "gallery__thumb-5", sectionId: "geo" },
  { id: 6, img: Hydro, classId: "gallery__thumb-6", sectionId: "hydro" },
  { id: 7, img: Pyro, classId: "gallery__thumb-7", sectionId: "pyro" },
];

export const sections = [
  {
    id: 1,
    title: "Seccion Anemo",
    element: 'anemo',
    desc: "Si buscas aventura y un toque de ligereza, los personajes Anemo te llevarán a nuevas alturas con su espíritu juguetón y su poderososoplo. ¡Prepárate para volar alto!",
  },
  {
    id: 2,
    title: "Seccion Cryo",
    element: 'cryo',
    desc: "Si buscas aventura y un toque de ligereza, los personajes Cryo te llevarán a nuevas alturas con su espíritu juguetón y su poderoso soplo. ¡Prepárate para volar alto!",
  },
  {
    id: 3,
    title: "Seccion Dendro",
    element: 'dendro',
    desc: "Estos guardianes de la flora y fauna desatan la fuerza de la madre naturaleza en cada uno de sus ataques. Con sus habilidades botánicas y su conexión profunda con el entorno, son capaces de crear un mundo lleno de vida y sorpresas.",
  },
  {
    id: 4,
    title: "Seccion Electro",
    element: 'electro',
    desc: "Estos electrizantes luchadores dominan el poder de los relámpagos, convirtiéndose en auténticos rayos de destrucción. Con sus habilidades electrizantes y su capacidad para controlar la electricidad, desatarán una tormenta de poder en cada batalla.",
  },
  {
    id: 5,
    title: "Seccion Geo",
    element: 'geo',
    desc: "Explora el poder elemental de la tierra y descubre la solidez y estabilidad de los personajes Geo. ¡Con su determinación y fortaleza, ningún obstáculo será demasiado difícil de superar!",
  },
  {
    id: 6,
    title: "Seccion Hydro",
    element: 'hydro',
    desc: "Con su dominio sobre el elemento del agua, pueden crear torrentes arrolladores, congelar a sus enemigos en su lugar y sanar a sus aliados con el poder curativo del líquido vital.",
  },
  {
    id: 7,
    title: "Seccion Pyro",
    element: 'pyro',
    desc: "¡Descubre su pasión por la batalla y desata el poder ardiente de los personajes Pyro en tu aventura por el mundo de Genshin Impact!",
  },
];
