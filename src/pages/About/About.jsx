import React from "react";

export const About = () => {
  return (
    <div id="about" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">Einführung</h4>
      <h2 className="text-center text-5xl font-yanone">Über uns</h2>
      <div className="flex flex-col lg:flex-row items-center gap-20 my-20">
        <div className="w-64 sm:w-80 rounded-3xl max-w-none lg:ml-auto mb-6 lg:mb-0">
          <img src="/assets/User_Image.png" alt="user" className="w-72 rounded-3xl" />
        </div>

        <div className="flex-l lg:mr-auto">
          <p className="mb-6 max-w-[36rem] font-yanone text-[1.3rem] leading-none text-gray-800">
            Herr Damir Dzambic - Bekannter Fliesenleger aus Hamm mit über 20
            Jahren Berufserfahrung freut sich immer wieder auf neue Aufträge und
            neue Herausforderungen.
          </p>
          <p className="mb-6 max-w-[36rem] font-yanone text-[1.3rem] leading-none text-gray-800">
            Seine Leidenschaft für das Handwerk und seine Liebe zum Detail
            spiegeln sich in jedem seiner Projekte wieder. Egal ob es um die
            Boden- und Fliesenverlegung im Innen- und Außenbereich geht, werden
            ebenfalls Badezimmer Komplettsanierungen und Trockenbauarbeiten,
            sowie verschieden Spachteltechniken angeboten.
          </p>
          <p className="mb-6 max-w-[36rem] font-yanone text-[1.3rem] leading-none text-gray-800">
            Dabei setzt er ausschließlich hochwertige Materialien ein - denn
            Qualität steht bei ihm an oberster Stelle.
          </p>
          <p className="mb-6 max-w-[36rem] font-yanone text-[1.3rem] leading-none text-gray-800">
            Wer also einen kompetenten Partner rund ums Thema Fliesenverlegung
            sucht, ist beim erfahrenen Profi gut beraten! Überzeugen Sie sich
            selbst von der Qualität seiner Arbeit!
          </p>
          <p className="mb-6 max-w-[36rem] font-yanone text-[1.3rem] leading-none text-gray-800">
            Kontaktieren Sie den Fliesenleger Ihres Vertrauens noch heute für
            eine unverbindliche Beratung oder ein Angebot - denn Ihre
            Zufriedenheit liegt ihm am Herzen.
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-between items-center font-yanone gap-10 mt-10">
        <div className="bg-orange-300 p-6 rounded-lg shadow-lg w-full lg:w-1/3 text-center">
          <h3 className="text-[1.8rem] font-bold mb-4 text-bg-gray-800">
            Erfahrung
          </h3>
          <p className="text-[1.2rem] text-gray-800">
            Die D2 Fliesen gibt es seit über 20 Jahren.
            <br />
            Wir arbeiten vor allem in Dortmun und Hamm.
          </p>
        </div>
        <div className="bg-orange-300 p-6 rounded-lg shadow-lg w-full lg:w-1/3 text-center">
          <h3 className="text-[1.8rem] font-bold mb-4 text-bg-gray-800">
            Hohe Kundenzufriedenheit
          </h3>
          <p className="text-[1.2rem] text-gray-800">
            Wir arbeiten nach den höchsten Standards.
            <br />
            Sie werden davon profitieren.
          </p>
        </div>
        <div className="bg-orange-300 p-6 rounded-lg shadow-lg w-full lg:w-1/3 text-center">
          <h3 className="text-[1.8rem] font-bold mb-4 text-bg-gray-800">
            Schnelle Realisierung
          </h3>
          <p className="text-[1.2rem] text-gray-800">
            Unsere eingespielten Teams arbeiten effizient.
            <br />
            Lassen Sie sich überzeugen.
          </p>
        </div>
      </div>
    </div>
  );
};
