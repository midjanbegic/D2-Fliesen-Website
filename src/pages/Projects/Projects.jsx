import React from "react";
import Before1 from "../../assets/Before1.jpg";
import After1 from "../../assets/After1.jpg";
import Before2 from "../../assets/Before2.jpg";
import After2 from "../../assets/After2.jpg";
import Before3 from "../../assets/Before3.jpg";
import After3 from "../../assets/After3.jpg";
import Before4 from "../../assets/Before4.jpg";
import After4 from "../../assets/After4.jpg";

export const Projects = () => {
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
        <div className="flex flex-col items-center gap-6 w-full sm:w-[500px] lg:w-[600px] bg-white p-8 rounded-lg shadow-lg">
          <h3 className="text-3xl font-yanone font-semibold text-center mb-6">
            Raum 1
          </h3>
          <div className="flex justify-between gap-8">
            {/* Before */}
            <div className="flex flex-col items-center gap-3">
              <span className="text-xl font-semibold">Vorher</span>
              <img
                src={Before1}
                alt="Before Raum 1"
                className="w-[300px] h-auto rounded-lg object-cover"
              />
            </div>
            {/* After */}
            <div className="flex flex-col items-center gap-3">
              <span className="text-xl font-semibold">Nachher</span>
              <img
                src={After1}
                alt="After Raum 1"
                className="w-[300px] h-auto rounded-lg object-cover"
              />
            </div>
          </div>
        </div>

        {/* Window 2 */}
        <div className="flex flex-col items-center gap-6 w-full sm:w-[500px] lg:w-[600px] bg-white p-8 rounded-lg shadow-lg">
          <h3 className="text-3xl font-yanone font-semibold text-center mb-6">
            Raum 2
          </h3>
          <div className="flex justify-between gap-8">
            {/* Before */}
            <div className="flex flex-col items-center gap-3">
              <span className="text-xl font-semibold">Vorher</span>
              <img
                src={Before2}
                alt="Before Raum 2"
                className="w-[300px] h-auto rounded-lg object-cover"
              />
            </div>
            {/* After */}
            <div className="flex flex-col items-center gap-3">
              <span className="text-xl font-semibold">Nachher</span>
              <img
                src={After2}
                alt="After Raum 2"
                className="w-[300px] h-auto rounded-lg object-cover"
              />
            </div>
          </div>
        </div>

        {/* Window 3 */}
        <div className="flex flex-col items-center gap-6 w-full sm:w-[500px] lg:w-[600px] bg-white p-8 rounded-lg shadow-lg">
          <h3 className="text-3xl font-yanone font-semibold text-center mb-6">
            Raum 3
          </h3>
          <div className="flex justify-between gap-8">
            {/* Before */}
            <div className="flex flex-col items-center gap-3">
              <span className="text-xl font-semibold">Vorher</span>
              <img
                src={Before3}
                alt="Before Raum 3"
                className="w-[300px] h-auto rounded-lg object-cover"
              />
            </div>
            {/* After */}
            <div className="flex flex-col items-center gap-3">
              <span className="text-xl font-semibold">Nachher</span>
              <img
                src={After3}
                alt="After Raum 3"
                className="w-[300px] h-auto rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
        {/* Window 4 */}
        <div className="flex flex-col items-center gap-6 w-full sm:w-[500px] lg:w-[600px] bg-white p-8 rounded-lg shadow-lg">
          <h3 className="text-3xl font-yanone font-semibold text-center mb-6">
            Raum 4
          </h3>
          <div className="flex justify-between gap-8">
            {/* Before */}
            <div className="flex flex-col items-center gap-3">
              <span className="text-xl font-semibold">Vorher</span>
              <img
                src={Before4}
                alt="Before Raum 4"
                className="w-[300px] h-auto rounded-lg object-cover"
              />
            </div>
            {/* After */}
            <div className="flex flex-col items-center gap-3">
              <span className="text-xl font-semibold">Nachher</span>
              <img
                src={After4}
                alt="After Raum 4"
                className="w-[300px] h-auto rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
