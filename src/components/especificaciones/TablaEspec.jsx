import React from 'react'
import "./TablaEspec.css";

const TablaEspec = ({ datosProductos }) => {
  return (
    <div>
    {datosProductos.map((fila, index) => (
      <table key={index} className="tg" style={{ tableLayout: 'fixed', width: '100%' }}>
        {/* ... contenido de la tabla */}
      </table>
    ))}
  </div>
  )
}

export default TablaEspec