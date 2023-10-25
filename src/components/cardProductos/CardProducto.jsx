import React, {useState} from "react";
import Grid from "@mui/material/Grid";
import img1 from "../../images/Productos/Prefabricados/Caja_para_lodos_remplazable.png";
import img2 from "../../images/Productos/Prefabricados/Caja_de_pozo_a_tierra_remplazable.png";
import img3 from "../../images/Productos/Prefabricados/Caja de valbulas.png";
import img4 from "../../images/Productos/Prefabricados/Ducto_de_cuatro_vias.png";
import img5 from "../../images/Productos/Prefabricados/Ducto_de_dos_vias.png";
import img6 from "../../images/Productos/Prefabricados/Tapa_para_caja_de_lodos_60x60.jpg";
import img7 from "../../images/Productos/Prefabricados/Tapa para cajas de pozo a tierra.png";
import img8 from "../../images/Productos/Prefabricados/Cocina pre fabricada 2 hornillas.png";
import img9 from "../../images/Productos/Prefabricados/Buzón prefabricado.png";
import img10 from "../../images/Productos/Prefabricados/Bloc Grass_tipo8.png";
import img11 from "../../images/Productos/Prefabricados/Retenidas.png";
import img12 from "../../images/Productos/Prefabricados/Dado_de_concreto.png";
import img13 from "../../images/Productos/Prefabricados/Base_marco_tapa_concreto.jpg";
import img14 from "../../images/Productos/Prefabricados/Aro y tapa para buzon.png";
import img15 from "../../images/Productos/Prefabricados/Bloc_grass_tipo_michi.jpg";
import ProductCard from "./ProductCard";
import { FichaTecnica } from "./FichaTecnica";
import lodos1 from "../../images/FichasTecnicas/FICHA TECNICA _ CAJA DE CONCRETO DE LODOS.jpg";
import lodos2 from "../../images/FichasTecnicas/FICHA TECNICA _ CAJA DE CONCRETO DE LODOS2.jpg";
import tierra from "../../images/FichasTecnicas/FICHA TECNICA _ CAJA DE POZO A TIERRA.jpg";
import valvulas from "../../images/FichasTecnicas/FICHA TECNICA _ CAJA DE VALVULA DE 30x 30.jpg";
import dto4 from "../../images/FichasTecnicas/FICHA TECNICA _ DUCTO DE CONCRETO DE CUATRO VIAS.jpg";
import dto4p2 from "../../images/FichasTecnicas/FICHA TECNICA _ DUCTO DE CONCRETO DE CUATRO VIAS2.jpg";
import dto2 from "../../images/FichasTecnicas/FICHA TECNICA _ DUCTO DE CONCRETO DE DOS VIAS.jpg";
import dto2p2 from "../../images/FichasTecnicas/FICHA TECNICA _ DUCTO DE CONCRETO DE DOS VIAS2.jpg";


export const CardProducto = () => {
  const [showFicha, setShowFicha] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedFicha, setSelectedFicha] = useState(null);

  //Fotos de los productos
  const images = [
    img1,img2,img3,img4,img5,img6,img7,img8,img9,img10,img11,img12,img13,img14,img15,
  ];

  const products = [
    {
      title: "Caja de concreto de lodos",
      description:
        "Descripción del producto 1. Lizards are a widespread group of squamate reptiles...",
      fichasTecnicas: [
        {
          imageSrc: lodos1
        },
        {
          imageSrc:lodos2          
        },
      ],
    },
    {
      title: "Caja de pozo a tierra",
      description:
        "Descripción del producto 2. Lizards are a widespread group of squamate reptiles...",
      fichasTecnicas:[
        {
          imageSrc:tierra
        },
      ],
    },
    {
      title: "Caja de Valvulas 30x30",
      description:
        "Descripción del producto 3. Lizards are a widespread group of squamate reptiles...",
      fichasTecnicas:[
        {
          imageSrc: valvulas
        },
      ],
    },
    {
      title: "Ducto de Concreto de Cuatro Vias",
      description:
        "Descripción del producto 4. Lizards are a widespread group of squamate reptiles...",
      fichasTecnicas:[
        {
          imageSrc: dto4
        },
        {
          imageSrc: dto4p2
        },
      ],
    },
    {
      title: "Ducto de Concreto de Dos Vias",
      description:
        "Descripción del producto 5. Lizards are a widespread group of squamate reptiles...",
      fichasTecnicas: [
        {
          imageSrc: dto2
        },
        {
          imageSrc: dto2p2
        },
      ],
    },

    {
      title: "Tapa para Caja de Lodos",
      description:
        "Descripción del producto 6. Lizards are a widespread group of squamate reptiles...",
    },
    {
      title: "Tapa para Caja de Pozo a Tierra ",
      description:
        "Descripción del producto 5. Lizards are a widespread group of squamate reptiles...",
    },
    {
      title: "Cocina Pre-Fabricada Tres Hornillas",
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
      title: "Retenidas",
      description:
        "Descripción del producto 5. Lizards are a widespread group of squamate reptiles...",
    },
    {
      title: "Dado de concreto",
      description:
        "Descripción del producto 5. Lizards are a widespread group of squamate reptiles...",
    },
    {
      title: "Base, Marco y Tapa para desagüe",
      description:
        "Descripción del producto 5. Lizards are a widespread group of squamate reptiles...",
    },
    {
      title: "Aro de fierro fundido y Tapa de concreto para desagüe",
      description:
        "Descripción del producto 5. Lizards are a widespread group of squamate reptiles...",
    },
    {
      title: "Bloc Grass Tipo #",
      description:
        "Descripción del producto 5. Lizards are a widespread group of squamate reptiles...",
    },
  ];

 
  const showFichaTecnica = (productIndex, fichaIndex) => {
    setSelectedProduct(productIndex);
    setSelectedFicha(fichaIndex);
    setShowFicha(true);
  };

  const closeFichaTecnica = () => {
    setSelectedProduct(null);
    setSelectedFicha(null);
    setShowFicha(false);
  };

  return (
    <>
      <h1 className="heading">Concreto</h1>
      <div
        style={{
          width: "100%",
          padding: "5rem 5% 7rem 5% ",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid container spacing={12} justifyContent={"center"}>
          {products.map((product, productIndex) => (
            <Grid item xs={12} sm={6} md={4} key={productIndex}>
              <ProductCard
                justifyContent={"center"}
                alignItems="center"
                title={product.title}
                description={product.description}
                image={images[productIndex % images.length]}
                fichasTecnicas={product.fichasTecnicas} // Pasa las fichas técnicas como una prop
                showFichaTecnica={showFichaTecnica} // Pasa la función showFichaTecnica
                productIndex={productIndex} // Pasa el índice del producto
              />
            </Grid>
          ))}
        </Grid>
        {showFicha && selectedProduct !== null && selectedFicha !== null && (
          <FichaTecnica
            imageSrc={
              products[selectedProduct].fichasTecnicas[selectedFicha].imageSrc
            }
            onClose={closeFichaTecnica}
          />
        )}
      </div>
    </>
  );
};
