import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";
import { MdArrowForward } from "react-icons/md";

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const projects = [
    {
      title: "Raum 1",
      images: ["/assets/Before1.jpg", "/assets/After1.jpg"],
    },
    {
      title: "Raum 2",
      images: ["/assets/Before2.jpg", "/assets/After2.jpg"],
    },
    {
      title: "Raum 3",
      images: ["/assets/Before3.jpg", "/assets/After3.jpg"],
    },
    {
      title: "Raum 4",
      images: ["/assets/Before4.jpg", "/assets/After4.jpg"],
    },
  ];

  const handleImageClick = (projectIndex, imageIndex) => {
    setSelectedProject(projectIndex);
    setSelectedImageIndex(imageIndex);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setSelectedImageIndex(0);
  };

  const nextImage = () => {
    setSelectedImageIndex((prevIndex) => {
      const totalImages = projects[selectedProject].images.length;
      return (prevIndex + 1) % totalImages;
    });
  };

  const prevImage = () => {
    setSelectedImageIndex((prevIndex) => {
      const totalImages = projects[selectedProject].images.length;
      return (prevIndex - 1 + totalImages) % totalImages;
    });
  };

  const handlers = useSwipeable({
    onSwipedLeft: nextImage,
    onSwipedRight: prevImage,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <div className="py-8 px-4 bg-gray-100">
      <h1 className="text-4xl font-yanone font-bold text-center mb-12">
        Unsere Arbeit
      </h1>
      <h2 className="text-6xl font-yanone font-bold text-center mb-12">
        Vorher – Nachher Bilder
      </h2>

      <div className="flex flex-wrap justify-center gap-16">
        {projects.map((project, projectIndex) => (
          <div
            key={projectIndex}
            className="flex flex-col items-center gap-6 w-full sm:w-[500px] md:w-[600px] lg:w-[600px] bg-white p-8 rounded-lg shadow-lg"
          >
            <h3 className="text-3xl font-yanone font-semibold text-center mb-6">
              {project.title}
            </h3>
            <div className="flex justify-between gap-8 w-full">
              {project.images.map((image, imageIndex) => (
                <div
                  key={imageIndex}
                  className="flex flex-col items-center gap-3 w-full"
                >
                  <span className="text-xl font-semibold">
                    {imageIndex === 0 ? "Vorher" : "Nachher"}
                  </span>
                  <img
                    src={image}
                    alt={`${project.title} ${imageIndex === 0 ? "Before" : "After"}`}
                    className="w-full sm:w-[400px] md:w-[500px] lg:w-[600px] h-auto rounded-lg object-cover cursor-pointer"
                    onClick={() => handleImageClick(projectIndex, imageIndex)}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {selectedProject !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={closeModal}
        >
          <div
            {...handlers}
            className="relative bg-white p-4 rounded-lg shadow-lg max-w-[90%] sm:max-w-[600px] cursor-default"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={projects[selectedProject].images[selectedImageIndex]}
              alt="Selected"
              className="w-full h-auto rounded-lg"
            />
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700"
            >
              <MdArrowForward size={18}
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
