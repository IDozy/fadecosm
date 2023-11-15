// datosProductos.js
const datosProductos = {
  PrefabricadosDeConcreto: {
    Aguapotable: {
      producto1: {
        nombre: "Caja de válvulas 30x30",
        imagen: "../../images/Productos/Prefabricados/Caja de valbulas.png",
        descripcion: "Descripción del producto 1",
        especificaciones: {
          descripcionCaja: {
            titulo: "DESCRIPCION DE CAJA PORTAMEDIDORA",
            datos: [
              { label: "Dimensiones Exteriores (mm)", medida: "A x B", valor: "400 x 600" },
              { label: "Abertura para tapa (mm)", medida: "a x b", valor: "205 x 275" },
              { label: "Altura Total (mm)", medida: "H", valor: "300" },
              { label: "Espesor (mm)", medida: "e", valor: "50" },
              { label: "Abertura para paso de tubería", medida: "C x h", valor: "80 x 130" },
              { label: "Peso (aprox.)", medida: "Kg.", valor: "70" },
            ],
          },
          descripcionSolado: {
            titulo: "DESCRIPCION DE SOLADO",
            datos: [
              { label: "Dimensiones Exteriores (mm)", medida: "A x B", valor: "400 x 600" },
              { label: "Abertura del solado (mm)", medida: "a x b", valor: "70 x 150" },
              { label: "Peso aprox.", medida: "Kg.", valor: "26" },
            ],
          },
        },
      },
      producto2: {
        nombre: "Producto 2",
        imagen: "../../images/Productos/Prefabricados/Buzón prefabricado.png",
        descripcion: "Descripción del producto 2",
        especificaciones: {
          descripcionCaja: {
            titulo: "DESCRIPCION DE CAJA PORTAMEDIDORA",
            datos: [
              { label: "Dimensiones Exteriores (mm)", medida: "A x B", valor: "400 x 600" },
              { label: "Abertura para tapa (mm)", medida: "a x b", valor: "205 x 275" },
              { label: "Altura Total (mm)", medida: "H", valor: "300" },
              { label: "Espesor (mm)", medida: "e", valor: "50" },
              { label: "Abertura para paso de tubería", medida: "C x h", valor: "80 x 130" },
              { label: "Peso (aprox.)", medida: "Kg.", valor: "70" },
            ],
          },
          descripcionSolado: {
            titulo: "DESCRIPCION DE SOLADO",
            datos: [
              { label: "Dimensiones Exteriores (mm)", medida: "A x B", valor: "400 x 600" },
              { label: "Abertura del solado (mm)", medida: "a x b", valor: "70 x 150" },
              { label: "Peso aprox.", medida: "Kg.", valor: "26" },
            ],
          },
        },
      },
      // ... más productos
    },
    alcantarillado:{
      producto1:{
        nombre: "Producto 32",
        imagen: "../../images/Productos/Prefabricados/Caja_para_lodos_remplazable.png",
        descripcion: "Descripcion breve",
        especificaciones: {
          descripcionCaja: {
            titulo: "DESCRIPCION DE CAJA PORTAMEDIDORA",
            datos: [
              { label: "Dimensiones Exteriores (mm)", medida: "A x B", valor: "400 x 600" },
              { label: "Abertura para tapa (mm)", medida: "a x b", valor: "205 x 275" },
              { label: "Altura Total (mm)", medida: "H", valor: "300" },
              { label: "Espesor (mm)", medida: "e", valor: "50" },
              { label: "Abertura para paso de tubería", medida: "C x h", valor: "80 x 130" },
              { label: "Peso (aprox.)", medida: "Kg.", valor: "70" },
            ],
          },
          descripcionSolado: {
            titulo: "DESCRIPCION DE SOLADO",
            datos: [
              { label: "Dimensiones Exteriores (mm)", medida: "A x B", valor: "400 x 600" },
              { label: "Abertura del solado (mm)", medida: "a x b", valor: "70 x 150" },
              { label: "Peso aprox.", medida: "Kg.", valor: "26" },
            ],
          },
        },
      },
    },
    // ... más subcategorías
  },
  termoplasticos: {
    aguapotable: {
      producto1: {
        nombre: "Producto 1",
        imagen: "../../images/Productos/Plasticos/Tapa termoplática 30x60.png",
        descripcion: "Descripción del producto 1",
        especificaciones: {
          descripcionCaja: {
            titulo: "DESCRIPCION DE CAJA PORTAMEDIDORA",
            datos: [
              { label: "Dimensiones Exteriores (mm)", medida: "A x B", valor: "400 x 600" },
              { label: "Abertura para tapa (mm)", medida: "a x b", valor: "205 x 275" },
              { label: "Altura Total (mm)", medida: "H", valor: "300" },
              { label: "Espesor (mm)", medida: "e", valor: "50" },
              { label: "Abertura para paso de tubería", medida: "C x h", valor: "80 x 130" },
              { label: "Peso (aprox.)", medida: "Kg.", valor: "70" },
            ],
          },
          descripcionSolado: {
            titulo: "DESCRIPCION DE SOLADO",
            datos: [
              { label: "Dimensiones Exteriores (mm)", medida: "A x B", valor: "400 x 600" },
              { label: "Abertura del solado (mm)", medida: "a x b", valor: "70 x 150" },
              { label: "Peso aprox.", medida: "Kg.", valor: "26" },
            ],
          },
        },
      },
      // ... más productos
    },
    saneamiento: {
      producto1: {
        nombre: "Producto 1",
        imagen: "../../images/Productos/Plasticos/Tapa_termoplastica_para_medidor_de_agua.png",
        descripcion: "Descripción del producto 1",
        especificaciones: {
          descripcionCaja: {
            dimensionesExteriores: { aXB: "400 x 600", aberturaTapa: "205 x 275", alturaTotal: 300, espesor: 50, aberturaPasoTuberia: "80 x 130", peso: 70 },
          },
          descripcionSolado: {
            dimensionesExteriores: { aXB: "400 x 600", aberturaSolado: "70 x 150", peso: 26 },
          },
        },
      },
      producto2: {
        nombre:"Caja de válvulas plastico",
        imagen:"../../images/Productos/Plasticos/Caja de válvulas termoplatica 33x26.png",
        descripcion:"Caja de valvulas 33x26",
        especificaciones:{
          descripcionCaja: {
            dimensionesExteriores: { aXB: "400 x 600", aberturaTapa: "205 x 275", alturaTotal: 300, espesor: 50, aberturaPasoTuberia: "80 x 130", peso: 70 },
          },
          descripcionSolado: {
            dimensionesExteriores: { aXB: "400 x 600", aberturaSolado: "70 x 150", peso: 26 },
          },

        },

      },
      // ... más productos
    },
    // ... más subcategorías
  },
  fierroFundido: {
    saneamiento: {
      producto1: {
        nombre: "Producto 1",
        imagen: "../../images/Productos/Fierro Fundido/Tapa para reservorio.png",
        descripcion: "Tapa para reservorio de agua ",
        especificaciones: {
          descripcionCaja: {
            dimensionesExteriores: { aXB: "400 x 600", aberturaTapa: "205 x 275", alturaTotal: 300, espesor: 50, aberturaPasoTuberia: "80 x 130", peso: 70 },
          },
          descripcionSolado: {
            dimensionesExteriores: { aXB: "400 x 600", aberturaSolado: "70 x 150", peso: 26 },
          },
        },
      },
      // ... más productos
    },
    // ... más subcategorías
  },
  // ... más categorías
};

export default datosProductos;
