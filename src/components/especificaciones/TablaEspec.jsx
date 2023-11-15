import React from 'react'
import "./TablaEspec.css";

const TablaEspec = ({ datosProductos }) => {
  return (
    <div>
      {Object.keys(datosProductos).map((categoria) => {
        const subcategorias = datosProductos[categoria];

        return Object.keys(subcategorias).map((subcategoria) => {
          const productos = subcategorias[subcategoria];

          return Object.keys(productos).map((productoId) => {
            const producto = productos[productoId];

            return (
              <div key={productoId}>
                <h4>{producto.nombre}</h4>

                {/* Iterar sobre las propiedades de especificaciones */}
                {Object.keys(producto.especificaciones).map((tipoEspec) => {
                  const especificacion = producto.especificaciones[tipoEspec];

                  return (
                    <div key={tipoEspec}>
                      <h5>{especificacion.titulo}</h5>
                      <table className="tg" style={{ tableLayout: 'fixed', width: '100%' }}>
                        {/* Contenido de la tabla */}
                        <thead>
                          <tr>
                            <th>Medida</th>
                            <th>Especificación</th>
                          </tr>
                        </thead>
                        <tbody>
                          {especificacion.datos.map((fila, index) => (
                            <tr key={index}>
                              <td>{fila.medida}</td>
                              <td>{fila.valor}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  );
                })}
              </div>
            );
          });
        });
      })}
    </div>
  )
}

export default TablaEspec