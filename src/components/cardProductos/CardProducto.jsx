import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import foto1 from "../../images/Productos/Cocina_3hornillas.jpg";

export const CardProducto = () => {
  return (
    <div class="container col-xxl-8 px-4 py-5">
      <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div class="col-10 col-sm-8 col-lg-6">
          <img
            src={foto1}
            class="d-block mx-lg-auto img-fluid"
            alt="Bootstrap Themes"
            width="700"
            height="500"
            loading="lazy"
          />
        </div>
        <div class="col-lg-6">
          <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">
            Nuestro Personal Capacitado
          </h1>
          <p class="lead">
            La experiencia de FADECO de más de 10 años en el sector de
            prefabricados permiten brindar un producto de cálidad con los
            mejores stándares de construcción solicitados por la demanda
            nacional.
          </p>
          <div class="d-grid gap-2 d-md-flex justify-content-md-start">
            <button type="button" class="btn btn-primary btn-lg px-4 me-md-2">
              Primary
            </button>
            <button type="button" class="btn btn-outline-secondary btn-lg px-4">
              Default
            </button>
          </div>
        </div>
      </div>
    </div>
    
  );
};
