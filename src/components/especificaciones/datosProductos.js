// datosProductos.js
const datosProductos = {
  prefabricadosDeConcreto: {
    aguaPotable: {
      producto1: {
        nombre: "Caja de válvulas 30x30",
        imagen: "/ruta/imagen1.png",
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
        nombre: "Producto 2",
        imagen: "/ruta/imagen2.png",
        descripcion: "Descripción del producto 2",
        especificaciones: {
          // Estructura similar a la del producto1
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
            dimensionesExteriores: { aXB: "400 x 600", aberturaTapa: "205 x 275", alturaTotal: 300, espesor: 50, aberturaPasoTuberia: "80 x 130", peso: 70 },
          },
          descripcionSolado: {
            dimensionesExteriores: { aXB: "400 x 600", aberturaSolado: "70 x 150", peso: 26 },
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
        imagen: "/ruta/imagen1.png",
        descripcion: "Descripción del producto 1",
        especificaciones: {
          // Datos específicos para el producto1 en termoplásticos y aguapotable
        },
      },
      // ... más productos
    },
    saneamiento: {
      producto1: {
        nombre: "Producto 1",
        imagen: "/ruta/imagen1.png",
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
        nombre:"",
        imagen:"",
        descripcion:"",
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
        imagen: "/ruta/imagen1.png",
        descripcion: "Descripción del producto 1",
        especificaciones: {
          // Datos específicos para el producto1 en fierro fundido y saneamiento
        },
      },
      // ... más productos
    },
    // ... más subcategorías
  },
  // ... más categorías
};

export default datosProductos;
