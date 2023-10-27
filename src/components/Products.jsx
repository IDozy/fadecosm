import React from "react";
import { CardProducto } from "./cardProductos/CardProducto";
import CardFierro from "./cardProductos/CardFierro";
import { CardPlastico } from "./cardProductos/CardPlastico";

export const Products = () => {
  return (
    <div>
      <CardProducto />
      <CardFierro />
      <CardPlastico />
    </div>
  );
};
