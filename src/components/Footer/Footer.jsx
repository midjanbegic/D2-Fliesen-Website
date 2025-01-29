import React from "react";
import { HashLink } from "react-router-hash-link";

const Footer = () => {
  return (
    <footer className="bg-gray-800 px-4 md:px-16 lg:px-28 font-yanone py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-4 text-white">Über uns</h2>
          <p className="text-gray-300">
            Über 20 Jahre Erfahrung. Ihre Wünsche, unsere Ausführung.
          </p>
          <p className="text-gray-300">
            <strong className="text-orange-300">Email: </strong>{" "}
            d2-fliesen@gmx.de
          </p>
          <p className="text-gray-300">
            <strong className="text-orange-300">Telefon: </strong> +49 177
            3504060
          </p>
          <p className="text-gray-300">
            <strong className="text-orange-300">Adresse: </strong> Ahlener Str.
            31, 59073 Hamm
          </p>
          <p className="text-gray-300">
            <strong className="text-orange-300">Steuernummer:</strong> USt-IdNr.
            DE348627868
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4 text-white">Links</h2>
          <ul>
            <li>
              <HashLink to="/#home" className="hover:underline text-gray-300">
                Home
              </HashLink>
            </li>
            <li>
              <HashLink to="/#about" className="hover:underline text-gray-300">
                Über uns
              </HashLink>
            </li>
            <li>
              <HashLink
                to="/#services"
                className="hover:underline text-gray-300"
              >
                Services
              </HashLink>
            </li>
            <li>
              <HashLink
                to="/#gallery"
                className="hover:underline text-gray-300"
              >
                Gallery
              </HashLink>
            </li>
            <li>
              <HashLink
                to="/#contact"
                className="hover:underline text-gray-300"
              >
                Kontakt
              </HashLink>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4 text-white">Partner</h2>
          <ul className="flex flex-col space-y-4 justify-center md:justify-start">
            <img
              src="/assets/OTTO.png"
              alt="Otto"
              className="h-10 md:h-10 w-[6rem] max-w-full"
            />
            <img
              src="/assets/RYWA.png"
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
