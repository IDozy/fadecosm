import * as React from "react";
import Grid from "@mui/material/Grid";
import img1 from "../../images/Productos/Plasticos/Caja de válvulas termoplatica 33x26.png";
import img2 from "../../images/Productos/Plasticos/Tapa termoplática 30x60.png";
import img3 from "../../images/Productos/Plasticos/Tapa_termoplastica_para_medidor_de_agua.png";
import ProductCard from "./ProductCard";

export const CardPlastico = () => {
  const images = [img1, img2, img3];

  //array de productos
  const products = [
    {
      title: "Caja de Válvulas 33x26",
      description:
        "Descripción del producto 4. Lizards are a widespread group of squamate reptiles...",
    },
    {
      title: "Tapa termoplastica para desagüe",
      description:
        "Descripción del producto 5. Lizards are a widespread group of squamate reptiles...",
    },
    {
      title: "Tapa para medidor de agua",
      description:
        "Descripción del producto 6. Lizards are a widespread group of squamate reptiles...",
    },
  ];

  return (
    <>
    <h1 className="heading">TERMOPLASTICOS</h1>
    <div
    style={{
      width: "100%",
      padding: "5rem 5% 7rem 5% ",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <Grid container spacing={12} justifyContent={"center"} alignItems="center">
      {products.map((product, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <ProductCard
          justifyContent={"center"} alignItems="center"
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
