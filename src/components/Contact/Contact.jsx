import React from "react";
import Swal from "sweetalert2";

export const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "d7b84926-12f1-4d72-ad3e-3b7f41de8835");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Vielen Dank!",
        text: "Sie haben die E-Mail erfolgreich gesendet!",
        icon: "success",
      });
    }
  };

  return (
    <div
      id="contact"
      className="flex flex-col items-center bg-white p-8 rounded-lg shadow-lg mt-24 pb-24"
    >
      <h2 className="text-5xl text-center font-yanone font-bold">Kontakt</h2>
        <p className="text-center text-gray-600 mb-8 max-w-3xl text-2xl font-yanone">
          Für alle weiteren Informationen, die Sie interessieren, schreiben Sie
          uns gerne über das untenstehende Formular. Unser Support-Team steht
          Ihnen jederzeit zur Verfügung, um Ihre Fragen zu beantworten. Egal, ob
          Sie ein technisches Problem haben oder weitere Informationen über
          unsere Dienstleistungen benötigen, wenden Sie sich vertrauensvoll an
          uns. Vielen Dank, dass Sie sich für unser Unternehmen entschieden
          haben!
        </p>
      <form
        onSubmit={onSubmit}
        className="flex flex-col gap-4 bg-white p-6 rounded-lg shadow-md w-full sm:w-2/5"
      >
        <div className="flex gap-4">
          <input
            type="text"
            className="w-full sm:w-1/2 p-2 border border-orange-300 rounded"
            placeholder="Name"
            name="name"
            required
          />
          <input
            type="email"
            className="w-full sm:w-1/2 p-2 border border-orange-300 rounded"
            placeholder="E-Mail"
            name="email"
            required
          />
        </div>
        <textarea
          name="message"
          className="w-full p-2 border border-orange-300 rounded"
          placeholder="Nachricht"
          required
        ></textarea>
        <button
          type="submit"
          className="w-full bg-gray-800 text-orange-300 py-2 rounded font-yanone hover:bg-gray-700 hover:text-orange-300 transition"
        >
          Schicken
        </button>
      </form>
    </div>
  );
};
