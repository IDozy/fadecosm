import React from "react";
import "./Form.css";
import { Horarios } from "./Horarios";

export const Form = () => {
  return (
    <div className="formbody">
      <div className="title-contact">
        <h1>¿Dudas o Sugerencias? Comunícate con nosotros</h1>
      </div>
      <br />
      <div className="page-container">
        <Horarios />
        <div className="map-container">
          <iframe
            title="Mapa de ubicación FADECO SAN MARTIN EIRL"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d247.40607978500302!2d-78.5051851825409!3d-7.183956650011734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91b25bcd0a17f18f%3A0x279a186f183b1fa6!2sFadeco%20san%20martin!5e0!3m2!1ses!2spe!4v1696651598376!5m2!1ses!2spe"
            width="800"
            height="440"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <br />
          <br />
          <br />
        </div>

        <form action="https://formsubmit.co/gtobyd17@gmail.com" method="POST">
          <h2>Contacto</h2>
          <div className="input-group">
            <label htmlFor="name">Nombre Completo:</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Nombre y Apellidos"
            />
            <label htmlFor="empresa">Empresa:</label>
            <input
              type="text"
              id="empresa"
              name="empresa"
              placeholder="Empresa"
            />
            <label htmlFor="phone">Teléfono</label>
            <input type="tel" id="phone" name="phone" placeholder="Teléfono" />
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" id="email" placeholder="Email" />
            <label htmlFor="message">Mensaje:</label>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="5"
              placeholder="Mensaje"
            ></textarea>
            <input className="btn" type="submit" value="Enviar" />
          </div>
        </form>
      </div>
    </div>
  );
};
