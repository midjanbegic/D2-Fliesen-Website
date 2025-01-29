import React from "react";

export const About = () => {
  return (
    <div id="about" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">Einführung</h4>
      <h2 className="text-center text-5xl font-yanone">Über uns</h2>
      <div className="flex flex-col lg:flex-row items-center gap-20 my-20">
        <div className="w-64 sm:w-80 rounded-3xl max-w-none lg:ml-auto mb-6 lg:mb-0">
          <img
            src="/assets/User_Image.png"
            alt="user"
            className="w-72 rounded-3xl"
          />
        </div>

        <div className="flex-l lg:mr-auto">
          <p className="mb-6 max-w-[36rem] font-yanone text-[1.3rem] leading-none text-gray-800">
            Mein Name ist Damir Dzambic - Ein bekannter Fliesenleger aus Hamm
            mit über 20 Jahren Berufserfahrung und freue mich immer wieder auf
            neue Aufträge und neue Herausforderungen.
          </p>
          <p className="mb-6 max-w-[36rem] font-yanone text-[1.3rem] leading-none text-gray-800">
            Meine Leidenschaft für das Handwerk und meine Liebe zum Detall
            spiegeln sich in jedem meiner Projekte wieder. Egal ob es um die
            Boden- und Fliesenverlegung im Innen- und Außenbereich geht, ich
            biete Ihnen ebenfalls Badezimmer Komplettsanierungen und
            Trockenbauarbeiten, sowie verschieden Spachteltechniken an. Dabei
            setze ich ausschließlich hochwertige Materialien ein - denn Qualität
            steht bei mir an oberster Stelle.
          </p>
          <p className="mb-6 max-w-[36rem] font-yanone text-[1.3rem] leading-none text-gray-800">
            Wer also einen kompetenten Partner rund ums Thema Fliesenverlegung
            sucht, ist bei mir an der richtigen Adresse und wird gut beraten!
          </p>
          <p className="mb-6 max-w-[36rem] font-yanone text-[1.3rem] leading-none text-gray-800">
            Überzeugen Sie sich selbst von der Qualität meiner Arbeit!
            Kontaktieren Sie mich als den Fliesenleger Ihres Vertrauens noch
            heute für eine unverbindliche Beratung und/oder ein faires Angebot -
            denn Ihre Zufriedenheit liegt mir am Herzen.
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
            Wir arbeiten vor allem in Dortmund und Hamm.
          </p>
        </div>
        <div className="bg-orange-300 p-6 rounded-lg shadow-lg w-full lg:w-1/3 text-center">
          <h3 className="text-[1.8rem] font-bold mb-4 text-bg-gray-800">
            Hohe Kundenzufriedenheit
          </h3>
          <p className="text-[1.2rem] text-gray-800">
            Wir legen großen Wert auf höchste Standards.
            <br />
            Sie werden die Qualität deutlich spüren.
          </p>
        </div>
        <div className="bg-orange-300 p-6 rounded-lg shadow-lg w-full lg:w-1/3 text-center">
          <h3 className="text-[1.8rem] font-bold mb-4 text-bg-gray-800">
            Schnelle Realisierung
          </h3>
          <p className="text-[1.2rem] text-gray-800">
            Unsere professionellen Teams sorgen für reibungslose Abläufe.
            <br />
            Überzeugen Sie sich selbst.
          </p>
        </div>
      </div>
    </div>
  );
};
