import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

  


const ProductCard = ({ title, description, image,fichasTecnicas,showFichaTecnica,productIndex }) => (
  
  <Card>
    <CardMedia
      sx={{ height: 400, width: "100%" }}
      image={image}
      title={title}
      style={{ objectFit: "cover" }}
    />
    <CardContent>
      <Typography
        gutterBottom
        variant="h5"
        component="div"
        sx={{ fontSize: "16px" }}
      >
        {title}
      </Typography>
      <Typography
        variant="body2"
        color="text.secondary"
        sx={{ fontSize: "14px" }}
      >
        {description}
      </Typography>
    </CardContent>
    <CardActions style={{ justifyContent: "center" }}>
      {fichasTecnicas &&
        fichasTecnicas.length > 0 &&
        fichasTecnicas.map((ficha, fichaIndex) => (
          <Button
            key={fichaIndex}
            size="small"
            onClick={() => showFichaTecnica(productIndex, fichaIndex)}
          >
            Ver Ficha Técnica {fichaIndex + 1}
          </Button>
        ))}
    </CardActions>
  </Card>
);

export default ProductCard;
