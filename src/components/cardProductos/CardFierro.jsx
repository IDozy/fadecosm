import * as React from "react";
import Grid from "@mui/material/Grid";
import img1 from "../../images/Productos/Fierro Fundido/Aro_para_buzon.png";
import img2 from "../../images/Productos/Fierro Fundido/Aro y tapa para buzón.png";
import img3 from "../../images/Productos/Fierro Fundido/Plancha 2 hornillas.png";
import img4 from "../../images/Productos/Fierro Fundido/Tapa-galvanizada.png";
import img5 from "../../images/Productos/Fierro Fundido/Tapa_y_Marco_de_fierro_fundido.png";
import img6 from "../../images/Productos/Fierro Fundido/Tapa para reservorio.png";
import img7 from "../../images/Productos/Fierro Fundido/Tapa galvanizada 30x60.png";
import img8 from "../../images/Productos/Fierro Fundido/Tapa para.png";

import ProductCard from "./ProductCard";

const CardFierro = () => {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8];

  const products = [
    {
      title: "Aro para buzon",
      description:
        "Descripción del producto 1. Lizards are a widespread group of squamate reptiles...",
    },
    {
      title: "Aro y tapa para buzón",
      description: "Ambos productos se pueden vender por separado.",
    },
    {
      title: "Plancha de dos hornillas para cocina mejorada",
      description:
        "Descripción del producto 3. Lizards are a widespread group of squamate reptiles...",
    },
    {
      title: "Tapa galvanizada para medidor de agua",
      description:
        "Descripción del producto 4. Lizards are a widespread group of squamate reptiles...",
    },
    {
      title: "Tapa y marco de fierro fundido",
      description:
        "Descripción del producto 5. Lizards are a widespread group of squamate reptiles...",
    },
    {
      title: "Tapa para reservorio de agua",
      description:
        "Descripción del producto 6. Lizards are a widespread group of squamate reptiles...",
    },
    {
      title: "Tapa Galvanizada 30 x 60",
      description:
        "Descripción del producto 6. Lizards are a widespread group of squamate reptiles...",
    },
    {
      title: "Tapa de ",
      description:
        "Descripción del producto 6. Lizards are a widespread group of squamate reptiles...",
    },
  ];
  return (
    <>
      <h1 className="heading">Fierro</h1>
      <div
        style={{
          width: "100%",
          padding: "5rem 5% 7rem 5% ",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid
          container
          spacing={12}
          justifyContent={"center"}
          alignItems="center"
        >
          {products.map((product, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <ProductCard
                justifyContent={"center"}
                alignItems="center"
                title={product.title}
                description={product.description}
                image={images[index % images.length]}
              />
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
};

export default CardFierro;
