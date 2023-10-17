import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import img1 from "../../images/Productos/Plasticos/Caja de válvulas termoplatica 33x26.png";
import img2 from "../../images/Productos/Plasticos/Tapa termoplática 30x60.png";
import img3 from "../../images/Productos/Plasticos/Tapa_termoplastica_para_medidor_de_agua.png";

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
                <Button variant="contained" disableElevation>Ver ficha técnica</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
