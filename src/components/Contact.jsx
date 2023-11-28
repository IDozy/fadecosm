import React from "react";
import { Form } from "./contacto/Mapa";
import ContactForm from "./contacto/ContactForm";
import { Helmet } from "react-helmet";

export const Contact = () => {
  return (
    <div>
      <Helmet>
      <title>FADECO SAN MARTIN - Contacto</title>
      <meta name="description" content="¿Tienes preguntas o necesitas asesoramiento? Contacta a FADECO SAN MARTIN. Estamos aquí para brindarte soluciones en prefabricados de concreto. ¡Comunícate con nosotros y conoce cómo podemos ayudarte!"/>

      </Helmet>
      <ContactForm />
      <Form />
    </div>
  );
};
