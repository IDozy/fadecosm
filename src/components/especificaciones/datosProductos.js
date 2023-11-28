// datosProductos.js
//PREFABRICADOS
//aguapotable
import preaguapot from "../../images/Productos/Prefabricados/Aguapotable/Caja_de_valvulas_30x30.png";
import preaguapot1 from "../../images/Productos/Prefabricados/Aguapotable/Caja_para_medidor_de_agua_30x60.png";
import preaguapot2 from "../../images/Productos/Prefabricados/Aguapotable/Caja_para_valvula_30x40.png";
//alcatarillado
import prealcan from "../../images/Productos/Prefabricados/Alcantarillado/Buzon_prefabricado.png";
import prealcan1 from "../../images/Productos/Prefabricados/Alcantarillado/Aro_FF_Tapa_de_concreto.png";
import prealcan2 from "../../images/Productos/Prefabricados/Alcantarillado/Caja_Condominial.png";
import prealcan3 from "../../images/Productos/Prefabricados/Alcantarillado/Conexion_prefabriacada_40x70.png";
import prealcan4 from "../../images/Productos/Prefabricados/Alcantarillado/Conexion_Prefabricada_caja_de_lodos_60x60.png";
import prealcan5 from "../../images/Productos/Prefabricados/Alcantarillado/Conexion_Prefabricada_35_x_60.png";
//cercos perimetricos
import cercop from "../../images/Productos/Prefabricados/Cercosperimetricos/cercop1.JPG";
//jardineria y edificaciones
import jardineria from "../../images/Productos/Prefabricados/JardineriaEdific/Bloc_grass_tipo_michi.png";
import jardineria1 from "../../images/Productos/Prefabricados/JardineriaEdific/Bloc_Grass_tipo8.png";
import jardineria2 from "../../images/Productos/Prefabricados/JardineriaEdific/Adoquines.jpg";
//electrificación
import electric from "../../images/Productos/Prefabricados/Electrificacion/Ducto_cuatro_vias.png";
import electric1 from "../../images/Productos/Prefabricados/Electrificacion/Ducto_de_dos_vias.png";
import electric2 from "../../images/Productos/Prefabricados/Electrificacion/Pozo_a_tierra_circular.png";
import electric3 from "../../images/Productos/Prefabricados/Electrificacion/Pozo_a_tierra_cuadrado.png";
import electric4 from "../../images/Productos/Prefabricados/Electrificacion/Retenidas.png";
//pistasycarreteras
import pistas from "../../images/Productos/Prefabricados/PistasyCarreteras/Hitos_Kilometricos.png";
//separadores
import sepa from "../../images/Productos/Prefabricados/Separadores/Separadores.png";
//TERMOPLÁSTICOS
import termo_aguap from "../../images/Productos/Plasticos/Caja_de_valvulas_termoplastica_33x26.png";
import termo_aguap1 from "../../images/Productos/Plasticos/Tapa_sin_visor_para_agua.png";
import termo_aguap2 from "../../images/Productos/Plasticos/Tapa_con_visor_para_agua.png";
import termo_aguap3 from "../../images/Productos/Plasticos/Caja_de_pared_para_medidor.png";
import termo_aguap4 from "../../images/Productos/Plasticos/Caja_termoplastica_para.png";
import termo_aguap5 from "../../images/Productos/Plasticos/Tapa_para_registro_de_desague.png";
//saneamiento
import termo_san from "../../images/Productos/Plasticos/Tapa_para_registro_de_desague.png";
//F I E R R O F U N D I D O
//saneamieno
import ff from "../../images/Productos/Fierro Fundido/Marco_y_Tapa_de_FF_para_buzon.png";
import ff1 from "../../images/Productos/Fierro Fundido/Tapa_de_FF_para_registro_de_desague.png";
import ff2 from "../../images/Productos/Fierro Fundido/Tapa_de_FF_para_valvula.png";
import ff3 from "../../images/Productos/Fierro Fundido/Tapa_y_Marco_de_fierro_fundido.png";
import ff4 from "../../images/Productos/Fierro Fundido/Tapa_para_reservorio.png";
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
        imagen: preaguapot,
        descripcion: "La caja de válvulas es un producto ",
        especificaciones: tespc,
      },
      producto2: {
        nombre: "Caja para medidor de agua 30 x 60",
        imagen: preaguapot1,
        descripcion: "La caja de agua con ceja es un producto encargado de contener el medidor de agua",
        especificaciones: tespc1,
      },
      producto3:{
        nombre: "Caja de válvulas 30x40",
        imagen: preaguapot2,
        descripcion: "La caja de válvulas de 30x40 permite",

      },
      // ... más productos
    },
    Alcantarillado:{
      producto1:{
        nombre: "Buzón prefabricado de concreto",
        imagen: prealcan,
        descripcion: "Descripcion breve",
      },
      producto2:{
        nombre: "Aro de FF con Tapa de Concreto Armado para Buzón. ",
        imagen: prealcan1,
        descripcion: "Ideales para buzónes de desague "
      },
      producto3:{
        nombre: "Caja Condominial de 400 mm y 600mm",
        imagen: prealcan2,
        descripcion: "La "

      },
      producto4:{
        nombre: "Conexión Prefabricada de 40 x 70",
        imagen: prealcan3,
        descripcion: ""
      },
      producto5: {
        nombre:"Conexión Prefabricada Caja de lodos 60 x 60",
        imagen: prealcan4,
        descripcion: "",
      },
      producto6: {
        nombre: "Conexión Prefabricada 35 x 60",
        imagen: prealcan5,
        descripcion: "",

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
      producto3:{
        nombre: "Caja de pozo a Tierra Circular",
        imagen: electric2,
        descripcion: "La caja de pozo a tierra",

      },
      producto4: {
        nombre: "Caja de pozo a Tierra Cuadrado",
        imagen: electric3,
        descripcion: "La caja de pozo a tierra cuadrada",

      },
      producto5:{
        nombre: "Retenidas",
        imagen: electric4,
        descripcion: "Las retenidas son empleadas",

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
        nombre: "Tapa sin visor para medidor de agua",
        imagen: termo_aguap1,
        descripcion: "",
      },
      producto3:{
        nombre: "Tapa con visor para medidor de agua ",
        imagen: termo_aguap2,
        descripcion: "",
      },
      producto4:{
        nombre:"Caja de pared para medidor de agua",
        imagen: termo_aguap3,
        descripcion: "La caja de medidor termoplástica para pared ",

      },
      producto5:{
        nombre: "Caja termoplática para registro de agua",
        imagen: termo_aguap4,
        descripcion: "",

      },
      producto6:{
        nombre: "Tapa para registro de desagüe",
        imagen: termo_aguap5,
        descripcion: "",

      },
      
      // ... más productos
    },
    Saneamiento: {
      producto1: {
        nombre: "Tapa para Registro de Desagüe",
        imagen: termo_san,
        descripcion: "Descripción del producto 1",
      },

      // ... más productos
    },
    // ... más subcategorías
  },
  "Fierro-Fundido": {
    Saneamiento: {
      producto1: {
        nombre: "Marco y Tapa para buzón ",
        imagen: ff,
        descripcion: "Tapa para reservorio de agua ",
      },
      producto2:{
        nombre: "Tapa para registro de desagüe",
        imagen: ff1,
        descripcion: "",

      },
      producto3:{
        nombre: "Tapa para válvula",
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
