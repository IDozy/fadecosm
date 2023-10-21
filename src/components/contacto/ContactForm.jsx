import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./ContactForm.css";
const ContactForm = () => {
  return (
    <div>
      <section className="contact">
        <div className="content-contact">
          <h2>Conctacto</h2>
          <p>
            Lunes a Viernes de 7:00 AM - 12:00 PM & 2:00 PM - 6:00 PM Sabados de 7:30 AM - 1:00 PM
          </p>
        </div>
        <div className="container-contact">
          <div className="contactInfo">
            <div className="box-contact">
              <div className="icon-contact">
                <FontAwesomeIcon icon={faLocationDot} />{" "}
              </div>
              <div className="text-contact">
                <h3>Ubícanos</h3>
                <p>Jr. Alfonso Ugarte 2069 y Av. Héroes del Cenepa c17</p>
              </div>
            </div>

            <div className="box-contact">
              <div className="icon-contact">
                {" "}
                <FontAwesomeIcon icon={faPhone} />
              </div>
              <div className="text-contact">
                <h3>Teléfonos</h3>
                <p>955445875 / 952066393 / 976631901 </p>
              </div>
            </div>

            <div className="box-contact">
              <div className="icon-contact">
                <FontAwesomeIcon icon={faEnvelope} />{" "}
              </div>
              <div className="text-contact">
                <h3>Email</h3>
                <p>ventas@fadecosanmartin.com.pe</p>
                <p>fadecosanmartin321@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="contact-form">
            <form
              action="https://formsubmit.co/gtobyd17@gmail.com"
              method="POST"
            >
              <h2>Escribenos</h2>
              <div className="inputBox">
                <input type="text" id="name" name="name" required="required" />
                <span>Nombre y Apellidos</span>
              </div>
              <div className="inputBox">
                <input
                  type="email"
                  id="email"
                  name="email"
                  required="required"
                />
                <span>Correo Electronico</span>
              </div>
              <div className="inputBox">
                <input
                  type="text"
                  id="empresa"
                  name="empresa"
                  required="required"
                />
                <span>Empresa</span>
              </div>
              <div className="inputBox">
                <textarea name="message" id="message" cols="30" rows="5" required="required" />
                <span>Mensaje</span>
              </div>
              <div className="inputBox">
                <input type="submit" name="" value="Enviar" />
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactForm;
