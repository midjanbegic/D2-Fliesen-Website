import React, { useState } from "react";
import { Link } from "react-router-dom";
import { TfiArrowCircleRight } from "react-icons/tfi";
import { MdArrowForward } from "react-icons/md";
import { useSwipeable } from "react-swipeable";

export const Gallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    { src: "/assets/Photo5.jpg", alt: "Project 1" },
    { src: "/assets/Photo1.jpg", alt: "Project 2" },
    { src: "/assets/Photo4.jpg", alt: "Project 3" },
    { src: "/assets/Photo2.jpg", alt: "Project 4" },
  ];

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const handlers = useSwipeable({
    onSwipedLeft: nextImage,
    onSwipedRight: prevImage,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <div id="gallery" className="py-10">
      <div className="text-center mb-16 font-yanone">
        <h1 className="text-5xl font-bold text-gray-900">
          Was wir genau machen ?
        </h1>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 font-yanone">
        {images.map((image, index) => (
          <div
            key={index}
            className="flex flex-col items-center cursor-pointer"
            onClick={() => openLightbox(index)}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="max-w-[13rem] max-h-[20rem] object-contain rounded-lg transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
            />
          </div>
        ))}
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

      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={closeLightbox}
        >
          <div
            {...handlers}
            className="relative flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={images[currentImageIndex].src}
              alt={images[currentImageIndex].alt}
              className="max-w-full max-h-screen object-contain rounded-lg"
            />

            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700"
            >
              <MdArrowForward
                size={18}
                className="rotate-180"
              />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700"
            >
              <MdArrowForward size={18} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
