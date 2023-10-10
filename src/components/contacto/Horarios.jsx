import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faEnvelope,
  faLocationDot,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";
import "./Horarios.css";

export const Horarios = () => {
  return (
    <div className="opening-hours">
      <h2>Horarios de Atención</h2>
      <ul>
        <li>
          <FontAwesomeIcon icon={faClock} shake /> Lunes - Viernes:
          <p className="text-horarios">
            7:00 AM - 12:00 PM & 2:00 PM - 6:00 PM
          </p>
        </li>
        <li>
          <FontAwesomeIcon icon={faClock} shake /> Sábados:
          <p className="text-horarios">7:30 AM - 1:00 PM</p>
        </li>
        <h2>Ubícanos</h2>
        <li>
          <FontAwesomeIcon icon={faEnvelope} flip />
          {""}
          <p className="text-horarios">
            <a href="mailto:ventas@fadecosanmartin.com.pe">
              ventas@fadecosanmartin.com.pe
            </a>
          </p>

          <br />
        </li>
        <li>
          <FontAwesomeIcon icon={faEnvelope} flip />
          {""}
          <p className="text-horarios">
            <a href="mailto:fadecosanmartin321@gmail.com">
              fadecosanmartin321@gmail.com
            </a>
          </p>
        </li>
        <li>
          <FontAwesomeIcon icon={faPhoneVolume} shake />
          <p className="text-horarios">
            <a href="https://wa.me/51955445875">955445875 / 952066393 / 976631901</a>
          </p>
        </li>
        <li>
          <FontAwesomeIcon icon={faLocationDot} bounce />
          <p className="text-horarios">
            {" "}
            Jr. Alfonso Ugarte 2069 y Av. Héroes del Cenepa c17
          </p>
        </li>
      </ul>
    </div>
  );
};
