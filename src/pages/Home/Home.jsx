import React from "react";
import Bg1 from "/assets/Bg1.png";

export const Home = () => {
  return (
    <div
      id="home"
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${Bg1})` }}
    >
      <div className="absolute inset-0 flex flex-col justify-center items-start px-6 md:px-20 lg:px-40">
        <div className="flex items-center gap-4 mb-[10rem]">
          <img
            src="/assets/logo.png"
            alt="Logo"
            className="w-32 md:w-60 lg:w-98"
          />

          <div className="flex flex-col">
            <h1 className="text-[1.8rem] md:text-[2rem] lg:text-[3.2rem] font-bold text-gray-800">
              D2 Fliesen
            </h1>
            <h2 className="text-[1rem] md:text-[1.2rem] lg:text-[1.5rem] font-medium font-bold font-playfair text-gray-600">
              Fliesen Experte aus Hamm
            </h2>
            <h3 className="text-[1rem] md:text-[1.2rem] lg:text-[1.5rem] font-medium font-bold text-gray-800">
              Telefon:
              <a
                href="tel:+491773054060"
                className="text-orange-300 hover:underline"
              >
                +49 177 3054060
              </a>
            </h3>
          </div>
        </div>

        <h1 className="text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] text-gray-800 font-playfair font-bold leading-tight animate-fadeIn">
          Boden-Decke-Wand <br /> problemlos aus einer Hand
        </h1>

        <div className="flex flex-col justify-start items-start mt-10 animate-fadeInDelay">
          <h2 className="text-[2.2rem] md:text-[2.5rem] lg:text-[2.8rem] text-gray-800 font-bold font-playfair mb-4">
            Jede Fliese ein Meisterwerk
          </h2>
          <p className="text-[1.1rem] md:text-[1.3rem] lg:text-[1.5rem] font-bold text-gray-600">
            Bringen Sie mehr Kreativität in Ihr Leben
          </p>
        </div>
      </div>
    </div>
  );
};
