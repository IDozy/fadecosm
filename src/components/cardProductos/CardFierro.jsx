import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import img1 from "../../images/Productos/Fierro Fundido/Aro_para_buzon.png";
import img2 from "../../images/Productos/Fierro Fundido/Aro_y_tapa_de_fierro_fundido_para_buzón.png";
import img3 from "../../images/Productos/Fierro Fundido/Plancha_de_fierro_fundido_de_2_hornillas.png";
import img4 from "../../images/Productos/Fierro Fundido/Tapa-galvanizada.png";
import img5 from "../../images/Productos/Fierro Fundido/Tapa_y_Marco_de_fierro_fundido.png";
import img6 from "../../images/Productos/Fierro Fundido/Tapas_para_reservorio_sin_fondo.png";

export const CardFierro = () => {
  const images = [img1, img2, img3, img4, img5, img6];

  //array de productos
  const products = [
    {
      title: "Aro para buzon",
      description:
        "Descripción del producto 1. Lizards are a widespread group of squamate reptiles...",
    },
    {
      title: "Aro y tapa de fierro fundido para buzón",
      description:
        "Descripción del producto 2. Lizards are a widespread group of squamate reptiles...",
    },
    {
      title: "Plancha de dos hornillas para cocina mejorada",
      description:
        "Descripción del producto 3. Lizards are a widespread group of squamate reptiles...",
    },
    {
      title: "Tapa galvanizada",
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
  ];

  return (
    <div
      style={{
        width: "100%",
        padding: "5rem  0 7rem 12rem ",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid container spacing={3} justifyContent={"center"}>
        {products.map((product, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 400 }}
                image={images[index % images.length]} // Debes reemplazarlo con la imagen correcta
                title={product.title}
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
                <Button size="small">Ver ficha técnica</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};