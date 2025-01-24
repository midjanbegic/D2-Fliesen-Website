import React, { useState } from "react";
import emailjs from "emailjs-com";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.email.includes("@")) {
      setErrorMessage("Bitte geben Sie eine gültige E-Mail ein.");
      return;
    }

    emailjs
      .send("your_service_id", "your_template_id", formData, "your_user_id")
      .then(
        () => {
          setSuccessMessage("Ihre Nachricht wurde erfolgreich gesendet!");
          setErrorMessage("");
          setFormData({ fullName: "", email: "", message: "" });
        },
        () => {
          setErrorMessage(
            "Es ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut."
          );
          setSuccessMessage("");
        }
      );
  };

  return (
    <div
      id="contact"
      className="flex flex-col items-center bg-white p-8 rounded-lg shadow-lg mt-24 pb-24"
    >
      <h2 className="text-5xl font-yanone font-bold text-gray-800 mb-4">
        Kontakt
      </h2>
      <p className="text-center text-gray-600 mb-8 max-w-3xl text-2xl font-yanone">
        Für alle weiteren Informationen, die Sie interessieren, schreiben Sie
        uns gerne über das untenstehende Formular. Unser Support-Team steht
        Ihnen jederzeit zur Verfügung, um Ihre Fragen zu beantworten. Egal, ob
        Sie ein technisches Problem haben oder weitere Informationen über unsere
        Dienstleistungen benötigen, wenden Sie sich vertrauensvoll an uns.
        Vielen Dank, dass Sie sich für unser Unternehmen entschieden haben!
      </p>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 bg-white p-6 rounded-lg shadow-md w-full max-w-3xl"
      >
        <div className="flex gap-4">
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Name"
            className="w-1/2 p-2 border border-orange-300 rounded"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="E-Mail"
            className="w-1/2 p-2 border border-orange-300 rounded"
            required
          />
        </div>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Nachricht"
          rows="5"
          className="w-full p-2 border border-orange-300 rounded"
          required
        ></textarea>
        <button
          type="submit"
          className="w-full bg-gray-800 text-orange-300 py-2 rounded font-yanone hover:bg-gray-700 hover:text-orange-300 transition"
        >
          Schicken
        </button>
        {successMessage && <p className="text-green-500">{successMessage}</p>}
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
      </form>
    </div>
  );
};

export default ContactForm;
