import React from "react";
import {
  FaHome,
  FaServicestack,
  FaInfoCircle,
  FaPhone,
} from "react-icons/fa";
import { FaTrowelBricks } from "react-icons/fa6";
import { HashLink } from "react-router-hash-link";
import { MdPhotoSizeSelectActual } from "react-icons/md";


export const Navbar = () => {
  return (
    <header>
      <div className="hidden md:fixed md:top-1/2 md:-translate-y-1/2 md:right-14 md:w-[70px] md:h-[470px] md:flex md:flex-col justify-between items-center bg-orange-300 shadow-lg rounded-lg py-4 z-20">
        <ul className="flex flex-col justify-between h-full">
          <li className="relative group hover:bg-gray-800 transition-all rounded-lg p-4">
            <HashLink
              to="/#home"
              className="text-3xl text-gray-800 group-hover:text-orange-300 transition-all"
            >
              <FaHome />
            </HashLink>
            <div className="absolute left-[-120px] top-1/2 -translate-y-1/2 w-24 p-2 bg-gray-800 text-orange-300 text-center text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300">
              Startseite
              <div className="absolute top-1/2 -right-2 -translate-y-1/2 w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[6px] border-l-gray-800"></div>
            </div>
          </li>

          <li className="relative group hover:bg-gray-800 transition-all rounded-lg p-4">
            <HashLink
              to="/#about"
              className="text-3xl text-gray-800 group-hover:text-orange-300 transition-all"
            >
              <FaInfoCircle />
            </HashLink>

            <div className="absolute left-[-120px] top-1/2 -translate-y-1/2 w-24 p-2 bg-gray-800 text-orange-300 text-center text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300">
              Über uns
              <div className="absolute top-1/2 -right-2 -translate-y-1/2 w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[6px] border-l-gray-800"></div>
            </div>
          </li>

          <li className="relative group hover:bg-gray-800 transition-all rounded-lg p-4">
            <HashLink
              to="/#services"
              className="text-3xl text-gray-800 group-hover:text-orange-300 transition-all"
            >
              <FaTrowelBricks />
            </HashLink>

            <div className="absolute left-[-120px] top-1/2 -translate-y-1/2 w-24 p-2 bg-gray-800 text-orange-300 text-center text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300">
              Services
              <div className="absolute top-1/2 -right-2 -translate-y-1/2 w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[6px] border-l-gray-800"></div>
            </div>
          </li>

          <li className="relative group hover:bg-gray-800 transition-all rounded-lg p-4">
            <HashLink
              to="/#gallery"
              className="text-3xl text-gray-800 group-hover:text-orange-300 transition-all"
            >
              <MdPhotoSizeSelectActual />
            </HashLink>
 
            <div className="absolute left-[-120px] top-1/2 -translate-y-1/2 w-24 p-2 bg-gray-800 text-orange-300 text-center text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300">
              Gallery
              <div className="absolute top-1/2 -right-2 -translate-y-1/2 w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[6px] border-l-gray-800"></div>
            </div>
          </li>

          <li className="relative group hover:bg-gray-800 transition-all rounded-lg p-4">
            <HashLink
              to="/#contact"
              className="text-3xl text-gray-800 group-hover:text-orange-300 transition-all"
            >
              <FaPhone />
            </HashLink>

            <div className="absolute left-[-120px] top-1/2 -translate-y-1/2 w-24 p-2 bg-gray-800 text-orange-300 text-center text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300">
              Kontakt
              <div className="absolute top-1/2 -right-2 -translate-y-1/2 w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[6px] border-l-gray-800"></div>
            </div>
          </li>
        </ul>
      </div>

      <div className="fixed bottom-0 w-full h-[70px] bg-orange-300 shadow-lg flex md:hidden justify-around items-center z-50">
        <HashLink
          to="/#home"
          className="text-3xl text-gray-800 hover:text-orange-300 hover:bg-gray-800 transition-all p-4 focus:text-orange-300 active:text-orange-300"
        >
          <FaHome />
        </HashLink>
        <HashLink
          to="/#services"
          className="text-3xl text-gray-800 hover:text-orange-300 hover:bg-gray-800 transition-all p-4 focus:text-orange-300 active:text-orange-300"
        >
          <FaServicestack />
        </HashLink>
        <HashLink
          to="/#about"
          className="text-3xl text-gray-800 hover:text-orange-300 hover:bg-gray-800 transition-all p-4 focus:text-orange-300 active:text-orange-300"
        >
          <FaInfoCircle />
        </HashLink>
        <HashLink
          to="/#gallery"
          className="text-3xl text-gray-800 hover:text-orange-300 hover:bg-gray-800 transition-all p-4 focus:text-orange-300 active:text-orange-300"
        >
          <MdPhotoSizeSelectActual />
        </HashLink>
        <HashLink
          to="/#contact"
          className="text-3xl text-gray-800 hover:text-orange-300 hover:bg-gray-800 transition-all p-4 focus:text-orange-300 active:text-orange-300"
        >
          <FaPhone />
        </HashLink>
      </div>
    </header>
  );
};
