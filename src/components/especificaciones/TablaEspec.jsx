import React from 'react'


const TablaEspec = ({ datosProductos }) => {
  console.log('Datos de productos:', datosProductos);
  
  if (!datosProductos) {
    return <div>No hay datos de especificaciones disponibles</div>;
  }

  return (
    <div>
      {Object.keys(datosProductos).map((categoriaId) => {
        const categoria = datosProductos[categoriaId];

        return (
          <div key={categoriaId}>
            <h2>{categoriaId}</h2>
            {Object.keys(categoria).map((subcategoriaId) => {
              const subcategoria = categoria[subcategoriaId];

              return (
                <div key={subcategoriaId}>
                  <h3>{subcategoriaId}</h3>
                  {Object.keys(subcategoria).map((productoId) => {
                    const producto = subcategoria[productoId];

                    return (
                      <div key={productoId}>
                        <h4>{producto.nombre}</h4>
                        {producto.especificaciones &&
                          Object.keys(producto.especificaciones).map((especificacionId) => {
                            const especificacion = producto.especificaciones[especificacionId];

                            return (
                              <div key={especificacionId}>
                                <h5>{especificacion.titulo}</h5>
                                <table className="tg" style={{ tableLayout: 'fixed', width: '100%' }}>
                                  <thead>
                                    <tr>
                                      <th>Label</th>
                                      <th>Medida</th>
                                      <th>Valor</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {especificacion.datos.map((fila, filaIndex) => (
                                      <tr key={filaIndex}>
                                        <td>{fila.label}</td>
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
                  })}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  )
}

export default TablaEspec