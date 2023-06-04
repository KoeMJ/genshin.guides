import React, { useContext } from "react";

import { Routes, Route } from "react-router-dom";
import { GlobalContext } from "./context/GlobalContext";

import Header from "./components/Header";
import Hero from "./pages/Hero";
import Elements from "./pages/Elements";
import About from "./pages/About";
import Footer from "./components/Footer";
import NoMatch from "./pages/NoMatch";
import Section from "./pages/Section";
import Character from "./pages/Character";

const App = () => {
  const { isDark } = useContext(GlobalContext);

  return (
    <div
      className={`relative overflow-hidden flex items-center py-8 px-5 sm:py-16 lg:px-16 bg-slate-100 min-h-screen font-roboto transition-all duration-500 ${isDark ? "dark" : "light"}`}
    >
      <Header />
      <main className="w-[100%] ">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/elementos" element={<Elements />} />
          <Route path="/seccion/:id" element={<Section />} />
          <Route path="/personaje/:id" element={<Character />} />
          <Route path="/nosotros" element={<About />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
