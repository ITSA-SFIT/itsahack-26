import React, { useState } from "react";
import Navbar from "./Navbar";
import Content from "./Content";
import Background from "./Background";
import Timer from "./Timer";
import Devfolio1 from "./devfolio1";
import Marquee from "./marquee";
const Hero = ({ isLoaded }) => {
  const [mousePos, setMousePos] = useState({ x: null, y: null });

  return (
    <div
      className="Hero text-white h-dvh flex flex-col relative overflow-hidden"
      onMouseMove={(e) => setMousePos({ x: e.clientX, y: e.clientY })}
    >
      <Background mousePos={mousePos} />
      {isLoaded && (
        <>
          <Navbar />
          <div className="grow flex flex-col justify-around gap-y-4 pb-10">
            <Content />
            <Timer />
            <Marquee/>
            <Devfolio1/>
          </div>
        </>
      )}
    </div>
  );
};

export default Hero;
