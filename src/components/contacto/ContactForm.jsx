import {
  faEnvelope,
  faLocationDot,
  faPhone,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./ContactForm.css"
const ContactForm = () => {
  return (
    <div>
      <section className="contact">
        <div className="content-contact">
          <h2>Conctacto</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
            obcaecati non molestias cum reiciendis ratione possimus laboriosam,
            
          </p>
        </div>
        <div className="container-contact">
          <div className="contactInfo">
            <div className="box-contact">
              <div className="icon-contact">
                <FontAwesomeIcon icon={faLocationDot} />{" "}
              </div>
              <div className="text-contact">
                <h3>Address</h3>
                <p>Jr. Alfonso Ugarte 2069 y Av. Héroes del Cenepa c17</p>
              </div>
            </div>

            <div className="box-contact">
              <div className="icon-contact">
                {" "}
                <FontAwesomeIcon icon={faPhone} />
              </div>
              <div className="text-contact">
                <h3>Telefono</h3>
                <p>955445875 / 952066393 / 976631901 </p>
                <p>fadecosanmartin321@gmail.com</p>
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
            <form action="">
              <h2>Enviar mensaje</h2>
              <div className="inputBox">
                <input type="text" name="" required="required" />
                <span>nombre completo</span>
              </div>
              <div className="inputBox">
                <input type="text" name="" required="required" />
                <span>Correo Electronico</span>
              </div>
              <div className="inputBox">
                <input type="text" name="" required="required" />
                <span>Empresa</span>
              </div>
              <div className="inputBox">
                <textarea name="" required="required" />
                <span>Escribe tu mensaje</span>
              </div>
              <div className="inputBox">
                <input type="submit" name="" value="send" />
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactForm;
