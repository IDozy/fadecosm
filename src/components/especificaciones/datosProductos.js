// datosProductos.js
//PREFABRICADOS
//aguapotable
import preaguapot from "../../images/Productos/Prefabricados/Aguapotable/CajaParaLlaveDePaso30x30.png";
import preaguapot1 from "../../images/Productos/Prefabricados/Aguapotable/CajaparaRegistrodeAgua30x60.png";
import preaguapot2 from "../../images/Productos/Prefabricados/Aguapotable/CajaParaValvula30x40.png";
import preaguapot3 from "../../images/Productos/Prefabricados/Aguapotable/Caja40x60paraAgua.png"
//alcatarillado
import prealcan from "../../images/Productos/Prefabricados/Alcantarillado/Buzoncircular.png";
import prealcan1 from "../../images/Productos/Prefabricados/Alcantarillado/Buzoncuadrado.png";
import prealcan2 from "../../images/Productos/Prefabricados/Alcantarillado/aro_de_ff_tapa_deconcretoarmadopara_buzon.png";
import prealcan3 from "../../images/Productos/Prefabricados/Alcantarillado/CajaCondominial.png";
import prealcan4 from "../../images/Productos/Prefabricados/Alcantarillado/Conexionparadesague 40X70.png";
import prealcan5 from "../../images/Productos/Prefabricados/Alcantarillado/ConexionCajaparaLodos60x60.png";
import prealcan6 from "../../images/Productos/Prefabricados/Alcantarillado/Conexion_Prefabricada_35_x_60.png";
//cercos perimetricos
import cercop from "../../images/Productos/Prefabricados/Cercosperimetricos/cercop1.JPG";
//jardineria y edificaciones
import jardineria from "../../images/Productos/Prefabricados/JardineriaEdific/BlocGrassTipoMichi.png";
import jardineria1 from "../../images/Productos/Prefabricados/JardineriaEdific/Bloc_Grass_tipo8.png";
import jardineria2 from "../../images/Productos/Prefabricados/JardineriaEdific/Adoquines.png";
//electrificación
import electric from "../../images/Productos/Prefabricados/Electrificacion/Ducto4vias.png";
import electric1 from "../../images/Productos/Prefabricados/Electrificacion/Ducto2vias.png";
import electric2 from "../../images/Productos/Prefabricados/Electrificacion/CajaCircularPozoATierra.png";
import electric3 from "../../images/Productos/Prefabricados/Electrificacion/CajaCuadradaPozoaTierra.png";
import electric4 from "../../images/Productos/Prefabricados/Electrificacion/Retenidas.png";
//pistasycarreteras
import pistas from "../../images/Productos/Prefabricados/PistasyCarreteras/HitosKilometricos.png";
//separadores
import sepa from "../../images/Productos/Prefabricados/Separadores/Separadores.png";
//TERMOPLÁSTICOS
import termo_aguap from "../../images/Productos/Plasticos/Caja_de_valvulas_termoplastica_33x26.png";
import termo_aguap1 from "../../images/Productos/Plasticos/TapaSinVisorParaAgua.png";
import termo_aguap2 from "../../images/Productos/Plasticos/TapaConVisorParaAgua.png";
import termo_aguap3 from "../../images/Productos/Plasticos/CajaDeParedParaMedidor.png";
import termo_aguap4 from "../../images/Productos/Plasticos/CajaParaRegistroDeAgua.png";
import termo_aguap5 from "../../images/Productos/Plasticos/TapaTermoplasticaParaCisterna.png";

//saneamiento
import termo_san from "../../images/Productos/Plasticos/TapaParaRegistroDeDesague35x60.png";
import termo_san1 from "../../images/Productos/Plasticos/TapaParaRegistroDeDesague40x70.png";
//F I E R R O F U N D I D O
//saneamieno
import ff from "../../images/Productos/Fierro Fundido/MarcoyTapadeFFparaBuzon.png";
import ff1 from "../../images/Productos/Fierro Fundido/TapaParaRegistroDeDesague.png";
import ff2 from "../../images/Productos/Fierro Fundido/TapaFFParaValvula.png";
import ff3 from "../../images/Productos/Fierro Fundido/TapaFFparaAgua.png";
import ff4 from "../../images/Productos/Fierro Fundido/PlanchaFF2hornillas.png";
import ff5 from "../../images/Productos/Fierro Fundido/PlanchaFF3hornillas.png";
import ff6 from "../../images/Productos/Fierro Fundido/PlanchaFF4hornillas.png";
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
        nombre: "CAJA PARA LLAVE DE PASO DE 30 x 30",
        imagen: preaguapot,
        descripcion: "Utilizada en las zonas rurales.",
        especificaciones: tespc,
      },
      producto2: {
        nombre: "CAJA PARA REGISTRO DE AGUA DE 30 x 60",
        imagen: preaguapot1,
        descripcion: "Utilizada para almacenar el medidor, válvula de aire y llave de paso.",
        especificaciones: tespc1,
      },
      producto3:{
        nombre: "CAJA PARA REGISTRO DE AGUA DE 40 X 60",
        imagen: preaguapot3,
        descripcion: "Utilizada para almacenar el medidor, válvula de aire y llave de paso. ",

      },
      producto4:{
        nombre: "CAJA PARA VÁLVULA DE 30x40",
        imagen: preaguapot2,
        descripcion: "Utilizada para la protección de llaves de paso y válvulas. ",
      },
      producto5:{
        nombre: "CAJA PARA VÁLVULA DE 30x50 Falta FOTO",
        imagen: preaguapot2,
        descripcion: "Utilizada para la protección de llaves de paso, válvulas, mangueras de riego. ",

      },
      // ... más productos
    },
    Alcantarillado:{
      producto1:{
        nombre: "BUZÓN PREFABRICADO CIRCULAR ",
        imagen: prealcan,
        descripcion: "Se utilizan en obras de saneamiento y alcantarillado, principalmente, en el tendido y restructuración de sistemas de redes primarias y secundarias que abastecen los servicios básicos de agua y desagüe para una ciudad.",
      },
      producto2:{
        nombre: "BUZÓN ELÉCTRICO",
        imagen: prealcan1,
        descripcion: "Se utiliza para cubrir y proteger las cajas de registro de cables de comunicación y electricidad. Estos elementos son utilizados en la construcción de infraestructuras de comunicación y electricidad para asegurar la integridad y seguridad de los cables y conexiones."
      },
      producto3:{
        nombre: "ARO DE FF CON TAPA DE CONCRETO ARMADO PARA BUZÓN. ",
        imagen: prealcan2,
        descripcion: "Se utiliza para cubrir y proteger las cajas de registro de cables de comunicación y electricidad. Estos elementos son utilizados en la construcción de infraestructuras de comunicación y electricidad para asegurar la integridad y seguridad de los cables y conexiones."
      },
      producto4:{
        nombre: "CAJA CONDOMINIAL de 400 mm y 600 mm",
        imagen: prealcan3,
        descripcion: "Se utiliza en sistemas de alcantarillado sanitario para la recolección y transporte de aguas residuales y pluviales."

      },
      producto5:{
        nombre: "CONEXIÓN DE REGISTRO PARA DESAGÜE DE 40 x 70",
        imagen: prealcan4,
        descripcion: "Estas conexiones permiten unir de manera segura y eficiente diferentes componentes, como tuberías, cables o estructuras, facilitando la instalación y el mantenimiento de sistemas."
      },
      producto6: {
        nombre:"CONEXIÓN DE CAJA PARA LODOS DE 60 x 60",
        imagen: prealcan5,
        descripcion: "Se utiliza en aplicaciones relacionadas con el manejo de lodos, como en sistemas de tratamiento de aguas residuales o en la industria de la minería, por lo que también tienen como finalidad recibir y almacenar los lodos tratados por el Biodigestor Rotoplas.",
      },
      producto7: {
        nombre: "CONEXIÓN DE REGISTRO PARA DESAGÜE DE 35 x 60 ",
        imagen: prealcan6,
        descripcion: "FALTA FOTO",

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
        nombre:"HITOS KILOMÉTRICOS",
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
        nombre:"DUCTO DE CUADRO VÍAS",
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
        nombre: "CAJA DE VÁLVULAS DE 33 x 26",
        imagen: termo_aguap,
        descripcion: "Descripción del producto 1",
      },
      producto2:{
        nombre: "TAPA SIN VISOR PARA MEDIDOR DE AGUA",
        imagen: termo_aguap1,
        descripcion: "",
      },
      producto3:{
        nombre: "TAPA CON VISOR PARA MEDIDOR DE AGUA ",
        imagen: termo_aguap2,
        descripcion: "",
      },
      producto4:{
        nombre:"CAJA DE PARED PARA MEDIDOR DE AGUA",
        imagen: termo_aguap3,
        descripcion: "La caja de medidor termoplástica para pared ",

      },
      producto5:{
        nombre: "CAJA TERMOPLÁSTICA PARA REGISTRO DE AGUA",
        imagen: termo_aguap4,
        descripcion: "",
      },
      producto6:{
        nombre: "CAJA TERMOPLÁSTICA PARA CISTERNA",
        imagen: termo_aguap5,
        descripcion: "",

      },
     
      
      // ... más productos
    },
    Saneamiento: {
      producto1: {
        nombre: "TAPA PARA REGISTRO DE DESAGÜE DE 35 x 60",
        imagen: termo_san,
        descripcion: "Descripción del producto 1",
      },
      producto2:{
        nombre: "TAPA PARA REGISTRO DE DESAGÜE DE 70 x 40",
        imagen: termo_san1,
        descripcion: "Descripción del producto 1",

      },

      // ... más productos
    },
    // ... más subcategorías
  },
  "Fierro-Fundido": {
    Saneamiento: {
      producto1: {
        nombre: "MARCO Y TAPA PARA BUZÓN ",
        imagen: ff,
        descripcion: "Tapa para reservorio de agua ",
      },
      producto2:{
        nombre: "TAPA PARA REGISTRO DE DESAGÜE",
        imagen: ff1,
        descripcion: "",

      },
      producto3:{
        nombre: "TAPA PARA VÁLVULA",
        imagen: ff2,
        descripcion: "",

      },
      producto4:{
        nombre: "TAPA PARA AGUA",
        imagen: ff3,
        descripcion: "",
      },
      producto5:{
        nombre: "PLANCHA DE DOS HORNILLAS PARA COCINA MEJORADA",
        imagen: ff4,
        descripcion:"",

      },
      producto6:{
        nombre: "PLANCHA DE TRES HORNILLAS PARA COCINA MEJORADA",
        imagen: ff5,
        descripcion:"",

      },
      producto7:{
        nombre: "PLANCHA DE CUATRO HORNILLAS PARA COCINA MEJORADA",
        imagen: ff6,
        descripcion:"",

      },
      // ... más productos
    },
    // ... más subcategorías
  },
  // ... más categorías
};

export default datosProductos;
