import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import img1 from "../../images/Productos/prod1.jpg";
import img2 from "../../images/Productos/Prefabricados/Aro y tapa para buzon.png";
import img3 from "../../images/Productos/Prefabricados/Retenidas.png";
import img4 from "../../images/Productos/Prefabricados/Adoquines.png";
import img5 from "../../images/Productos/Prefabricados/Bloc_grass_tipo_michi.jpg";
import img6 from "../../images/Productos/prod6.jpg";
import img7 from "../../images/Productos/Prefabricados/Tapa para cajas de pozo a tierra.png";
import img8 from "../../images/Productos/Prefabricados/Cocina pre fabricada 2 hornillas.png";
import img9 from "../../images/Productos/Prefabricados/Buzón prefabricado.png";
import img10 from "../../images/Productos/Prefabricados/Bloc Grass_tipo8.png";
import img11 from "../../images/Productos/Prefabricados/Caja de valbulas.png";
import img12 from "../../images/Productos/Prefabricados/Dado_de_concreto.png";

export const CardProducto = () => {
  const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
  ];

  const products = [
    {
      title: "Caja de concreto para registro",
      description:
        "Descripción del producto 1. Lizards are a widespread group of squamate reptiles...",
    },
    {
      title: "Aro y tapa para buzón",
      description:
        "Descripción del producto 2. Lizards are a widespread group of squamate reptiles...",
    },
    {
      title: "Retenidas",
      description:
        "Descripción del producto 3. Lizards are a widespread group of squamate reptiles...",
    },
    {
      title: "Adoquines",
      description:
        "Descripción del producto 4. Lizards are a widespread group of squamate reptiles...",
    },
    {
      title: "Bloc Grass tipo #",
      description:
        "Descripción del producto 5. Lizards are a widespread group of squamate reptiles...",
    },

    {
      title: "Tapa para Caja de Lodos",
      description:
        "Descripción del producto 6. Lizards are a widespread group of squamate reptiles...",
    },
    {
      title: "Tapa para caja de pozo a tierra ",
      description:
        "Descripción del producto 5. Lizards are a widespread group of squamate reptiles...",
    },
    {
      title: "Cocina pre-fabricada 2 hornillas",
      description:
        "Descripción del producto 5. Lizards are a widespread group of squamate reptiles...",
    },
    {
      title: "Buzón pre fabricado",
      description:
        "Descripción del producto 5. Lizards are a widespread group of squamate reptiles...",
    },
    {
      title: "Bloc Grass tipo 8",
      description:
        "Descripción del producto 5. Lizards are a widespread group of squamate reptiles...",
    },
    {
      title: "Caja de válbulas",
      description:
        "Descripción del producto 5. Lizards are a widespread group of squamate reptiles...",
    },
    {
      title: "Dado de concreto",
      description:
        "Descripción del producto 5. Lizards are a widespread group of squamate reptiles...",
    },
  ];

  return (
    <div
      style={{
        width: "100%",
        padding: "5rem 5% 7rem 5% ",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid container spacing={3} justifyContent={"center"}>
        {products.map((product, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ maxWidth: 700, margin: "3rem" }}>
              <CardMedia
                sx={{ height: 400 }}
                image={images[index % images.length]}
                title={product.title}
                style={{ objectFit: "cover" }}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{ fontSize: "16px" }}
                >
                  {product.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ fontSize: "14px" }}
                >
                  {product.description}
                </Typography>
              </CardContent>
              <CardActions style={{ justifyContent: "center" }}>
                <Button variant="contained" disableElevation>
                  Ver ficha técnica
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
