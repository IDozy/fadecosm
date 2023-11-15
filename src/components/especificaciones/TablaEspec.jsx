import React from 'react'
import "./TablaEspec.css";

const TablaEspec = ({ datosProductos }) => {
  return (
    <div>
      {Object.keys(datosProductos).map((productoId) => {
        const producto = datosProductos[productoId];
        return (
          <div key={productoId}>
            <h4>{producto.nombre}</h4>
            <table className="tg" style={{ tableLayout: 'fixed', width: '100%' }}>
              {/* Contenido de la tabla */}
              <thead>
                <tr>
                  <th>Medida</th>
                  <th>Especificación</th>
                </tr>
              </thead>
              <tbody>
                {producto.especificaciones.map((fila, index) => (
                  <tr key={index}>
                    <td>{fila.medida}</td>
                    <td>{fila.especificacion}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      })}
    </div>
  )
}

export default TablaEspec