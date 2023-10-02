import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from "@mui/material/Grid";
import img1 from '../../images/Productos/prod1.jpg'
import img2 from '../../images/Productos/prod2.jpg'
import img3 from '../../images/Productos/prod3.jpg'
import img4 from '../../images/Productos/prod4.jpg'
import img5 from '../../images/Productos/prod5.jpg'
import img6 from '../../images/Productos/prod6.jpg'

export const CardProducto = () => {
  //array de fotos
  const images = [img1,img2,img3,img4,img5,img6
  ];

   //array de productos
   const products = [
    {
      title: "Base, marco y tapa de concreto para desagüe",
      description:
        "Descripción del producto 1. Lizards are a widespread group of squamate reptiles...",
    },
    {
      title: "Caja para pozo a tierra",
      description:
        "Descripción del producto 2. Lizards are a widespread group of squamate reptiles...",
    },
    {
      title: "Aro",
      description:
        "Descripción del producto 3. Lizards are a widespread group of squamate reptiles...",
    },
    {
        title: "Hornilla para cocina mejorada",
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

  ];

  return (
    <Grid container spacing={3}>
        {products.map((product, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 400 }}
                image={images[index %images.length]} // Debes reemplazarlo con la imagen correcta
                title={product.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{fontSize: "16px"}}>
                  {product.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{fontSize: "14px"}}>
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
  );
};
