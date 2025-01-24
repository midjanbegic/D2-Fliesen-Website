import React from "react";
import { FaThLarge, FaFill, FaWrench } from "react-icons/fa";
import { GiStoneBlock, GiStairs } from "react-icons/gi";
import { MdCleaningServices } from "react-icons/md";

export const Services = () => {
  const services = [
    {
      icon: <FaThLarge size={40} className="text-orange-400" />,
      title: "FLIESEN LEGEN",
      desc: "Fliesenarbeiten in Bad, Küche und gesamten Wohnbereich.",
    },
    {
      icon: <GiStoneBlock size={40} className="text-orange-400" />,
      title: "NATURSTEIN LEGEN",
      desc: "Natursteinverlegung draußen in Garten oder Vorhaus",
    },
    {
      icon: <FaFill size={40} className="text-orange-400" />,
      title: "SILIKONARBEITEN",
      desc: "Hochwertige Fugensanierung, Neuverfugung",
    },
    {
      icon: <GiStairs size={40} className="text-orange-400" />,
      title: "STUFENANLAGEN",
      desc: "Stufenanlagen in Fliesen, Feinsteinzeug im Innen- und Außenbereich",
    },
    {
      icon: <FaWrench size={40} className="text-orange-400" />,
      title: "REPARATUREN",
      desc: "Ausführung von Reparaturen im Fliesen- & Steinbereichen",
    },
    {
      icon: <MdCleaningServices size={40} className="text-orange-400" />,
      title: "REINIGUNG",
      desc: "Pflege von alten Natursteinen und Fliesen",
    },
  ];

  return (
    <div id="services" className="bg-white py-12 font-yanone mt-32 pb-32">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <p className="mt-6 text-xl text-gray-600">Über Fliesenlegen</p>
          <h1 className="text-5xl font-bold text-gray-900">
            Was wir genau machen ?
          </h1>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-2xl rounded-lg p-8 flex flex-col items-center transform transition-all duration-300 hover:scale-105" // Povećana senka i animacija
            >
              <div className="mb-4">{service.icon}</div>
              <h2 className="text-2xl font-semibold text-gray-800">{service.title}</h2>
              <p className="mt-4 text-lg text-gray-700 text-center">{service.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-xl text-gray-700">
            Haben Sie Fragen? Melden Sie sich gerne bei uns für weiter
            Informationen!
          </p>
          <a
            href="#contact"
            className="mt-6 inline-block bg-gray-800 text-orange-300 text-lg px-8 py-4 rounded-lg shadow hover:bg-gray-700"
          >
            Kontaktieren Sie uns
          </a>
        </div>
      </div>
    </div>
  );
};
