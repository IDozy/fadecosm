import React, { useState } from 'react'

import ContainerInfo from './ContainerInfo'
import { faRankingStar, faPeopleGroup } from '@fortawesome/free-solid-svg-icons';

const Info = () => {
  const [cards] = useState([
    {
      data: "fade-down",
      icon:"fa-solid fa-cubes-stacked",
      subtitle:"ENCONTRARÁS",
      title:"Variedad de Productos",
      text:`Tenemos una amplia gama de productos de concreto prefabricado para resolver sus exigencias.`
    },
    {
      data: "fade-right",
      subtitle:"OFRECEMOS",
      icon:"fa-solid fa-city",
      title: "Adecuada Infraestructura",
      text:`Planta de producción de más de 5000 m2 y plantas móviles para acercarnos a tu obra. Aseguramos altos volúmenes de producción.`
    },
    {
      data: "fade-up",
      icon:"fa-solid fa-helmet-safety",
      subtitle:"CONTAMOS CON",
      title: "Personal Capacitado",
      text:`Personal técnico altamente calificado para la elaboración de los productos de acuerdo a sus requerimientos.`
    },
    {
      data: "fade-right",
      icon:"fa-solid fa-truck-front",
      subtitle:"CONTAMOS CON",
      title: "Flota Propia",
      text:`Personal técnico altamente calificado para la elaboración de los productos de acuerdo a sus requerimientos.`
    },
  
  
  ])
  return (
  
       <div className="container-info">
       <div className="subcontainer-1" data-aos="fade-right" data-aos-duration="1500">
        <div className='card-1'>
          <h4 className='text-info'>Fadeco SM</h4>
          <h1 className='text-title'>¿Por qué elegirnos?</h1>
        </div>
       </div>
       <div className='subcontainer-2'>
       <ContainerInfo cards={cards} cardClassName={"card"} /> 
       </div>
     
      
     
    </div>
  )
}

export default Info


