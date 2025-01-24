import React, { useState } from "react";

export const Projects = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (src) => {
    setSelectedImage(src);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="py-8 px-4 bg-gray-100">
      <h1 className="text-4xl font-yanone font-bold text-center mb-12">
        Unsere Arbeit
      </h1>
      <h2 className="text-6xl font-yanone font-bold text-center mb-12">
        Vorher – Nachher Bilder
      </h2>

      <div className="flex flex-wrap justify-center gap-16">
        {/* Window 1 */}
        <div className="flex flex-col items-center gap-6 w-full sm:w-[500px] md:w-[600px] lg:w-[600px] bg-white p-8 rounded-lg shadow-lg">
          <h3 className="text-3xl font-yanone font-semibold text-center mb-6">
            Raum 1
          </h3>
          <div className="flex justify-between gap-8 w-full">
            {/* Before */}
            <div className="flex flex-col items-center gap-3 w-full">
              <span className="text-xl font-semibold">Vorher</span>
              <img
                src="/assets/Before1.jpg"
                alt="Before Raum 1"
                className="w-full sm:w-[400px] md:w-[500px] lg:w-[600px] h-auto rounded-lg object-cover cursor-pointer"
                onClick={() => handleImageClick("/assets/Before1.jpg")}
              />
            </div>
            {/* After */}
            <div className="flex flex-col items-center gap-3 w-full">
              <span className="text-xl font-semibold">Nachher</span>
              <img
                src="/assets/After1.jpg"
                alt="After Raum 1"
                className="w-full sm:w-[400px] md:w-[500px] lg:w-[600px] h-auto rounded-lg object-cover cursor-pointer"
                onClick={() => handleImageClick("/assets/After1.jpg")}
              />
            </div>
          </div>
        </div>

        {/* Window 2 */}
        <div className="flex flex-col items-center gap-6 w-full sm:w-[500px] md:w-[600px] lg:w-[600px] bg-white p-8 rounded-lg shadow-lg">
          <h3 className="text-3xl font-yanone font-semibold text-center mb-6">
            Raum 2
          </h3>
          <div className="flex justify-between gap-8 w-full">
            {/* Before */}
            <div className="flex flex-col items-center gap-3 w-full">
              <span className="text-xl font-semibold">Vorher</span>
              <img
                src="/assets/Before2.jpg"
                alt="Before Raum 2"
                className="w-full sm:w-[400px] md:w-[500px] lg:w-[600px] h-auto rounded-lg object-cover cursor-pointer"
                onClick={() => handleImageClick("/assets/Before2.jpg")}
              />
            </div>
            {/* After */}
            <div className="flex flex-col items-center gap-3 w-full">
              <span className="text-xl font-semibold">Nachher</span>
              <img
                src="/assets/After2.jpg"
                alt="After Raum 2"
                className="w-full sm:w-[400px] md:w-[500px] lg:w-[600px] h-auto rounded-lg object-cover cursor-pointer"
                onClick={() => handleImageClick("/assets/After2.jpg")}
              />
            </div>
          </div>
        </div>

        {/* Window 3 */}
        <div className="flex flex-col items-center gap-6 w-full sm:w-[500px] md:w-[600px] lg:w-[600px] bg-white p-8 rounded-lg shadow-lg">
          <h3 className="text-3xl font-yanone font-semibold text-center mb-6">
            Raum 3
          </h3>
          <div className="flex justify-between gap-8 w-full">
            {/* Before */}
            <div className="flex flex-col items-center gap-3 w-full">
              <span className="text-xl font-semibold">Vorher</span>
              <img
                src="/assets/Before3.jpg"
                alt="Before Raum 3"
                className="w-full sm:w-[400px] md:w-[500px] lg:w-[600px] h-auto rounded-lg object-cover cursor-pointer"
                onClick={() => handleImageClick("/assets/Before3.jpg")}
              />
            </div>
            {/* After */}
            <div className="flex flex-col items-center gap-3 w-full">
              <span className="text-xl font-semibold">Nachher</span>
              <img
                src="/assets/After3.jpg"
                alt="After Raum 3"
                className="w-full sm:w-[400px] md:w-[500px] lg:w-[600px] h-auto rounded-lg object-cover cursor-pointer"
                onClick={() => handleImageClick("/assets/After3.jpg")}
              />
            </div>
          </div>
        </div>

        {/* Window 4 */}
        <div className="flex flex-col items-center gap-6 w-full sm:w-[500px] md:w-[600px] lg:w-[600px] bg-white p-8 rounded-lg shadow-lg">
          <h3 className="text-3xl font-yanone font-semibold text-center mb-6">
            Raum 4
          </h3>
          <div className="flex justify-between gap-8 w-full">
            {/* Before */}
            <div className="flex flex-col items-center gap-3 w-full">
              <span className="text-xl font-semibold">Vorher</span>
              <img
                src="/assets/Before4.jpg"
                alt="Before Raum 4"
                className="w-full sm:w-[400px] md:w-[500px] lg:w-[600px] h-auto rounded-lg object-cover cursor-pointer"
                onClick={() => handleImageClick("/assets/Before4.jpg")}
              />
            </div>
            {/* After */}
            <div className="flex flex-col items-center gap-3 w-full">
              <span className="text-xl font-semibold">Nachher</span>
              <img
                src="/assets/After4.jpg"
                alt="After Raum 4"
                className="w-full sm:w-[400px] md:w-[500px] lg:w-[600px] h-auto rounded-lg object-cover cursor-pointer"
                onClick={() => handleImageClick("/assets/After4.jpg")}
              />
            </div>
          </div>
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={closeModal}
        >
          <div
            className="relative bg-white p-4 rounded-lg shadow-lg max-w-[90%] sm:max-w-[600px] cursor-default"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-gray-800 hover:text-gray-600 text-2xl font-bold"
              onClick={closeModal}
            >
              &times;
            </button>
            <img
              src={selectedImage}
              alt="Selected"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};
