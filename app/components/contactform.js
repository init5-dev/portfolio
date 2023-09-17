'use client'

import React, { useState } from "react";

const FORM_ENDPOINT = "https://formsubmit.co/nelson.ochagavia@gmail.com"; // TODO - update to the correct endpoint

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();

    const inputs = e.target.elements;
    const data = {};

    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].name) {
        data[inputs[i].name] = inputs[i].value;
      }
    }

    fetch(FORM_ENDPOINT, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('La respuesta del formulario es incorrecta.');
        }

        setSubmitted(true);
      })
      .catch((err) => {
        // Submit the form manually
        e.target.submit();
      });
  };

  if (submitted) {
    return (
      <>
        <div className="text-2xl">¡Gracias!</div>
        <div className="text-md">Te contactaré pronto</div>
      </>
    );
  }

  return (
      <form
        action="https://getform.io/f/5560cfc7-5e9d-40cc-b75b-e8ecb3146990"
        method="POST"
        className="flex flex-col justify-center items-center p-2"
      >
          <input
            type="text"
            placeholder="Nombre"
            name="name"
            className="glass focus:outline-none px-1 py-3 my-4 m-2 text-sm w-full text-gray-600 placeholder-gray-400 bg-white border-0 rounded shadow outline-none"
            required
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            className="glass focus:outline-none px-1 py-3 my-4 m-2 text-sm w-full text-gray-600 placeholder-gray-400 bg-white border-0 rounded shadow outline-none"
            required
          />
          <textarea
            placeholder="Mensaje"
            rows='10'
            name="message"
            className="resize-none glass focus:outline-none px-1 py-3 my-4 m-2 text-sm w-full text-gray-600 placeholder-gray-400 bg-white border-0 rounded shadow outline-none"
            required
          />
        <div className="w-full sm:mx-2 md:mx-0 lg:mx-0 pt-0 flex justify-center">
          <button
            className="active:bg-lime-600 hover:shadow-lg focus:outline-none px-6 py-3 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear bg-lime-700 rounded shadow outline-none"
            type="submit"
          >
            Enviar
          </button>
        </div>
      </form>

  );
};

export default ContactForm;