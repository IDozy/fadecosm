// datosProductos.js
import img from "../../images/Productos/Prefabricados/Caja de valbulas.png";
//PREFABRICADOS
import preaguapot from "../../images/Productos/Prefabricados/Aguapotable/Caja_de_agua_con_ceja.jpg";
import prealcan from "../../images/Productos/Prefabricados/Alcantarillado/Buzón prefabricado.png";
import cercop from "../../images/Productos/Prefabricados/Cercosperimetricos/cercop1.JPG";
import jardineria from "../../images/Productos/Prefabricados/JardineriaEdific/Bloc_grass_tipo_michi.png";
import jardineria1 from "../../images/Productos/Prefabricados/JardineriaEdific/Bloc Grass_tipo8.png";
import jardineria2 from "../../images/Productos/Prefabricados/JardineriaEdific/Adoquines.jpg";
//electrificación
import electric from "../../images/Productos/Prefabricados/Electrificacion/Ducto_cuatro_vias.png";
import electric1 from "../../images/Productos/Prefabricados/Electrificacion/Ducto_de_dos_vias.png";
//pistasycarreteras
import pistas from "../../images/Productos/Prefabricados/PistasyCarreteras/Itos_kilometricos.png";
//separadores
import sepa from "../../images/Productos/Prefabricados/Separadores/Separadores.png";
//TERMOPLÁSTICOS
import termo_aguap from "../../images/Productos/Plasticos/Caja de válvulas termoplastica 33x26.png";
import termo_aguap1 from "../../images/Productos/Plasticos/Tapa_termoplastica_para_medidor_de_agua.png";
import termo_aguap2 from "../../images/Productos/Plasticos/Caja_termoplastica_para.png";
//saneamiento
import termo from "../../images/Productos/Plasticos/Tapa termoplática 30x60.png";
//F I E R R O F U N D I D O
//saneamieno
import ff from "../../images/Productos/Fierro Fundido/Aro y tapa para buzón.png";
import ff1 from "../../images/Productos/Fierro Fundido/Tapa galvanizada 30x60.png";
import ff2 from "../../images/Productos/Fierro Fundido/Tapa-galvanizada.png";
import ff3 from "../../images/Productos/Fierro Fundido/Tapa_y_Marco_de_fierro_fundido.png";
import ff4 from "../../images/Productos/Fierro Fundido/Tapa para reservorio.png";
//TABLAS DE  ESPECIFICACIONES
import tespc from "../../images/TablasEspecificaciones/Valvulas30x30.png";
import tespc1 from "../../images/TablasEspecificaciones/Caja_de_agua_ceja.png";
import tespcgras from "../../images/TablasEspecificaciones/Bloc_grass_michi.png";
import tespecgras8 from "../../images/TablasEspecificaciones/Bloc_grass_8.png";
import tespecadoquines from "../../images/TablasEspecificaciones/Adoquines.png";
import tespecducto2v from "../../images/TablasEspecificaciones/Ducto_dos_vias.png";
import separadores from "../../images/TablasEspecificaciones/Separadores.png";


const datosProductos = {
  "Prefabricados-De-Concreto": {
    Aguapotable: {
      producto1: {
        nombre: "Caja de válvulas 30x30",
        imagen: img,
        descripcion: "La caja de válvulas es un producto ",
        especificaciones: tespc,
      },
      producto2: {
        nombre: "Caja de agua con ceja",
        imagen: preaguapot,
        descripcion: "La caja de agua con ceja es un producto encargado de contener el medidor de agua",
        especificaciones: tespc1,
      },
      producto3:{
        nombre: "",
        imagen: "",
        descripcion: "",

      },
      // ... más productos
    },
    Alcantarillado:{
      producto1:{
        nombre: "Buzón prefabricado de concreto",
        imagen: prealcan,
        descripcion: "Descripcion breve",
      },
    },
    Cercosperimétricos:{
      producto1:{
        nombre: "Cerco perimétrico tipo cuadrado",
        imagen: cercop ,
        descripcion:"Los cercos perimétricos son ",


      },

    },
    "Pistas-y-carreteras":{
      producto1:{
        nombre:"Hitos kilométricos",
        imagen:pistas,
        descripcion:"Los hitos kilométricos son utilizados para indicar la distancia entre el inicio de una vía y un punto específico a lo largo de la misma. ",

      },

    },
    "Jardinería-para-edificaciones":{
      producto1:{
        nombre:"Bloc grass Tipo #",
        imagen:jardineria,
        descripcion:"",
        especificaciones:tespcgras,
      },
      producto2:{
        nombre:"Bloc Grass tipo 8",
        imagen:jardineria1,
        descripcion:"",
        especificaciones:tespecgras8,
      },
      producto3:{
        nombre: "Adoquines",
        imagen:jardineria2,
        descripcion:"",
        especificaciones:tespecadoquines,

      },

    },
    Electrificación:{
      producto1:{
        nombre:"Ducto de cuatro vias",
        imagen:electric,
        descripcion:"Los ductos de cuatro vias son esenciales para trabajos con cableado eléctrico y fibra óptica",

      },
      producto2:{
        nombre:"Ductos de dos vías",
        imagen:electric1,
        descripcion:"Los ductos de dos vías son empleados en trabajos con cableado eléctrico y fibra óptica",
        especificaciones: tespecducto2v,
      },

    },
    Separadores:{
      producto1:{
        nombre: "Separadores de concreto",
        imagen:sepa,
        descripcion:"Los separadores de concreto son empleados",
        especificaciones: separadores,
      }

    },

    // ... más subcategorías
  },
  "Termoplásticos": {
    Aguapotable: {
      producto1: {
        nombre: "Caja de válvulas termoplástica 33 x 26",
        imagen: termo_aguap,
        descripcion: "Descripción del producto 1",
      },
      producto2:{
        nombre: "Tapa termoplásica para medidor de agua",
        imagen: termo_aguap1,
        descripcion: "",
      },
      productos3:{
        nombre: "Caja de válvulas para ",
        imagen: termo_aguap2,
        descripcion: "",

      },
      // ... más productos
    },
    Saneamiento: {
      producto1: {
        nombre: "Tapa termoplstica 30 x 60 para desagüe",
        imagen: termo,
        descripcion: "Descripción del producto 1",
      },

      producto2: {
        nombre:"Caja de válvulas plastico",
        imagen: termo,
        descripcion:"Caja de valvulas 33x26",
      
      },
      // ... más productos
    },
    // ... más subcategorías
  },
  "Fierro-Fundido": {
    Saneamiento: {
      producto1: {
        nombre: "Aro y Tapa para buzón ",
        imagen: ff,
        descripcion: "Tapa para reservorio de agua ",
      },
      producto2:{
        nombre: "Tapa galvanizada 30x60",
        imagen: ff1,
        descripcion: "",

      },
      producto3:{
        nombre: "Tapa galvanizada",
        imagen: ff2,
        descripcion: "",

      },
      producto4:{
        nombre: "Tapa y marco de Fierro Fundido",
        imagen: ff3,
        descripcion: "",
      },
      producto5:{
        nombre: "Tapa para reservorio de agua",
        imagen: ff4,
        descripcion:"",

      },
      // ... más productos
    },
    // ... más subcategorías
  },
  // ... más categorías
};

export default datosProductos;
