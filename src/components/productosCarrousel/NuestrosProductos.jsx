import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./NuestrosProductos.css";
import img from "../../images/Elaboracion/calidad1.jpg";
import img1 from "../../images/Elaboracion/calidad2.jpg";
import img2 from "../../images/Elaboracion/Elaboracion1.jpg";
import img3 from "../../images/Elaboracion/Elaboracion2.jpg";


export const NuestrosProductos = () => {
  const images = [img,img1,img2,img3 ];
  const groupSize = images.length;
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Cambia de imagen cada 3 segundos (ajusta según tus preferencias)

    return () => {
      clearInterval(interval);
    };
  }, [images.length]);

  const displayImages = images.slice(currentIndex, currentIndex + groupSize);

  return (
    <div className="nuestros-productos-card">
      <div className="image-carousel">
        {displayImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Descripción de la imagen ${index + 1}`}
            className={`product-image ${index === 0 ? "active" : ""}`}
          />
        ))}
      </div>
      <div className="product-description">
        <h2>Nuestros Productos</h2>
        <p>
          Son elaborados con un proceso supervisado desde la preparación del
          material, hasta los últimos acabados, contamos con la posibilidad de
          ajustar tú producto acorde a las medidas solicitadas en tus proyectos.
        </p>
      </div>
    </div>
  );
};
