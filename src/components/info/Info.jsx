import React, { useState } from 'react'
import "./Info.css"
import ContainerInfo from './ContainerInfo'
import { faRankingStar, faPeopleGroup } from '@fortawesome/free-solid-svg-icons';

const Info = () => {
  const [cards] = useState([
    {
      icon: faRankingStar,
      title:"CÁLIDAD",
      text:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quas minima fugit accusamus asperiores repellendus cum recusandae hic corporis mollitia molestiae, in deleniti saepe ab vel, neque delectus assumenda distinctio.`
    },
    {
      icon: faPeopleGroup,
      title: "TRABAJO EN EQUIPO",
      text:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quas minima fugit accusamus asperiores repellendus cum recusandae hic corporis mollitia molestiae, in deleniti saepe ab vel, neque delectus assumenda distinctio.`
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


