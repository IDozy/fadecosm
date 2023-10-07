import React, { useState } from 'react'
import "./Info.css"
import ContainerInfo from './ContainerInfo'
import { faRankingStar, faPeopleGroup } from '@fortawesome/free-solid-svg-icons';

const Info = () => {
  const [cards] = useState([
    {
      icon: faRankingStar,
      title:"CÁLIDAD",
      text:`En nuestra fábrica, nos destacamos por mantener los más rigurosos estándares de calidad, de acuerdo con las normativas establecidas por los organismos de supervisión en la industria de la construcción. Nuestro equipo altamente capacitado realiza una evaluación exhaustiva de nuestros productos en todas las etapas del proceso de fabricación.`
    },
    {
      icon: faPeopleGroup,
      title: "TRABAJO EN EQUIPO",
      text:`Valoramos la colaboración y la sinergia, lo que nos permite lograr resultados excepcionales en prefabricados. Elegirnos significa optar por un equipo unido y comprometido que trabajará incansablemente para cumplir con sus necesidades en cada proyecto.`
    }
  ])
  return (
   
       <div className="container">
       <h1>¿Por qué elegirnos?</h1>
       <br />
       <ContainerInfo cards={cards} cardClassName={"card"} /> 
      
     
    </div>
  )
}

export default Info


