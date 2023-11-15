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
          {Object.keys(producto.especificaciones).map((categoria) => (
            <div key={categoria}>
              <h5>{producto.especificaciones[categoria].titulo}</h5>
              <table className="tg" style={{ tableLayout: 'fixed', width: '100%' }}>
                <colgroup>
                  <col style={{ width: '100%' }} />
                  <col style={{ width: '100%' }} />
                  <col style={{ width: '100%' }} />
                </colgroup>
                <tbody>
                  {producto.especificaciones[categoria].datos.map((fila, index) => (
                    <tr key={index}>
                      <td>{fila.label}</td>
                      <td>{fila.medida}</td>
                      <td>{fila.valor}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>
      );
    })}
  </div>
  )
}

export default TablaEspec