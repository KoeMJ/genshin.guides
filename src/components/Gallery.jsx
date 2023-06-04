import React from "react";
import { NavLink } from "react-router-dom";
import { gallery } from "../constants";

const Gallery = () => {
  return (
    <aside className="flex h-[20rem] w-3/4 gap-4 rounded-xl">
      {gallery.map((thumbs) => {
        return (
          <NavLink
            key={thumbs.id}
            className={`flex-1 rounded-xl bg-center bg-no-repeat bg-cover shadow-xl shadow-zinc-950/50 transition-all duration-[800ms] ease-in-out hover:flex-[5] ${thumbs.classId}`}
            to={`/seccion/${thumbs.id}`}
          />
        );
      })}
    </aside>
  );
};

export default Gallery;
