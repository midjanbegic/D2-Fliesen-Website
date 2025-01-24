import React from "react";
import Otto from "../../assets/OTTO.png";
import Rywa from "../../assets/RYWA.png";

const Footer = () => {
  return (
    <footer className="bg-gray-800 px-4 md:px-16 lg:px-28 font-yanone py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
        <div>
          <h2 className="text-2xl font-bold mb-4 text-white">Über uns</h2>
          <p className="text-gray-300">
            Über 20 Jahre Erfahrung. Ihre Wünsche, unsere Ausführung.
          </p>
          <p className="text-gray-300">
            <strong className="text-orange-300">Email: </strong> d2-fliesen@gmx.de
          </p>
          <p className="text-gray-300">
            <strong className="text-orange-300">Telefon: </strong> +49 177 3054060
          </p>
          <p className="text-gray-300">
            <strong className="text-orange-300">Adresse: </strong> Ahlener Str. 31, 59073 Hamm
          </p>
          <p className="text-gray-300"><strong className="text-orange-300">Steuernummer:</strong> USt-IdNr. DE348627868</p>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4 text-white">Links</h2>
          <ul>
            <li>
              <a href="/" className="hover:underline text-gray-300">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:underline text-gray-300">
                Über uns
              </a>
            </li>
            <li>
              <a href="#services" className="hover:underline text-gray-300">
                Services
              </a>
            </li>
            <li>
              <a href="#gallery" className="hover:underline text-gray-300">
                Projekte
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:underline text-gray-300">
                Kontakt
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4 text-white">Partner</h2>
          <ul className="flex flex-col space-y-4 justify-center md:justify-start">
            <img
              src={Otto}
              alt="Otto"
              className="h-10 md:h-10 w-[6rem] max-w-full"
            />
            <img
              src={Rywa}
              alt="Rywa"
              className="h-10 md:h-8 w-[8rem] max-w-full"
            />
          </ul>
        </div>
      </div>
      <div className="border-gray-600 border-t pt-6 text-gray-300 text-center mt-6">
        Copyright by www.d2-fliesen.de
      </div>
    </footer>
  );
};

export default Footer;
