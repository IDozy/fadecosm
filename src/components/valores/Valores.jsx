import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPeopleGroup,
  faBusinessTime,
  faRankingStar,
} from "@fortawesome/free-solid-svg-icons";
import "./Valores.css";

export const Valores = () => {
  return (
    <div>
      <h2>Valores Empresariales</h2>
      <br />
      <ul className="valores-list">
        <li className="valor-item">
          <article>
            <div>
              <div>
              <figure className="valor-icon">
                  <FontAwesomeIcon
                    icon={faRankingStar}
                    fade
                    size="lg"
                    style={{ color: "#77859c" }}
                  />
                </figure>
              </div>
            </div>
            <h3 className="titulo-valores">Cálidad</h3>
            <div className="texto-valores">
              <p>
                Nuestros productos cumplen con metricas de cálidad requeridas
                por el sector construcción.
              </p>
            </div>
          </article>
        </li>

        <li className="valor-item">
          <article>
            <div>
              <div>
                <figure className="valor-icon">
                  <FontAwesomeIcon
                    icon={faPeopleGroup}
                    beat
                    size="lg"
                    style={{ color: "#77859c" }}
                  />
                </figure>
              </div>
            </div>
            <h3 className="titulo-valores">Trabajo en Equipo</h3>
            <div className="texto-valores">
              <p>
                Nuestro equipo de profesionales esta apto para cubrir todo lo
                requerido en cada proyecto.
              </p>
            </div>
          </article>
        </li>

        <li className="valor-item">
          <article>
            <div>
              <div>
                <figure className="valor-icon">
                  <FontAwesomeIcon
                    icon={faBusinessTime}
                    bounce
                    size="lg"
                    style={{ color: "#77859c" }}
                  />
                </figure>
              </div>
            </div>
            <h3 className="titulo-valores">Puntualidad</h3>
            <div className="texto-valores">
              <p>La Puntualidad es nuestra mejor carta de presentación.</p>
            </div>
          </article>
        </li>
      </ul>
    </div>
  );
};
