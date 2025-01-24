import React from "react";
import { Link } from "react-router-dom";
import { TfiArrowCircleRight } from "react-icons/tfi";
import Photo1 from "../../assets/Photo1.jpg";
import Photo2 from "../../assets/Photo2.jpg";
import Photo4 from "../../assets/Photo4.jpg";
import Photo5 from "../../assets/Photo5.jpg";

export const Gallery = () => {
  return (
    <div id="gallery" className="py-10">
      <div className="text-center mb-16 font-yanone">
        <h1 className="text-5xl font-bold text-gray-900">
          Was wir genau machen ?
        </h1>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 font-yanone">
        <div className="flex flex-col items-center">
          <img
            src={Photo5}
            alt="Project 1"
            className="max-w-[13rem] max-h-[20rem] object-contain rounded-lg transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
          />
        </div>
        <div className="flex flex-col items-center">
          <img
            src={Photo1}
            alt="Project 2"
            className="max-w-[13rem] max-h-[20rem] object-contain rounded-lg transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
          />
        </div>
        <div className="flex flex-col items-center">
          <img
            src={Photo4}
            alt="Project 3"
            className="max-w-[13rem] max-h-[20rem] object-contain rounded-lg transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
          />
        </div>
        <div className="flex flex-col items-center">
          <img
            src={Photo2}
            alt="Project 4"
            className="max-w-[13rem] max-h-[20rem] object-contain rounded-lg transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
          />
        </div>
      </div>

      <div className="flex justify-center mt-8 font-yanone">
        <Link
          to="/projects"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <button className="mt-6 inline-block bg-gray-800 text-orange-300 text-lg px-8 py-4 rounded-lg shadow hover:bg-gray-700 flex items-center justify-center">
            Mehr Projekte anzeigen
            <TfiArrowCircleRight className="ml-3 mt-1 animate-bounce" />
          </button>
        </Link>
      </div>
    </div>
  );
};
