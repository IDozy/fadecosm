import React, { useState } from 'react'
import "./Info.css"
import ContainerInfo from './ContainerInfo'

const Info = () => {
  const [cards] = useState([
    {
      icon: 'cube',
      subtitle:"ENCONTRARÁS",
      title:"Card-1",
      text:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quas minima fugit accusamus asperiores repellendus cum recusandae hic corporis mollitia molestiae, in deleniti saepe ab vel, neque delectus assumenda distinctio.`
    },
    {
      subtitle:"ENCONTRARÁS",
      title: "Card-2",
      text:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quas minima fugit accusamus asperiores repellendus cum recusandae hic corporis mollitia molestiae, in deleniti saepe ab vel, neque delectus assumenda distinctio.`
    }
  ])
  return (
   
       <div className="container">
       <h1>Responsive Cards</h1>
       <ContainerInfo cards={cards} cardClassName={"card"} /> 
      
     
    </div>
  )
}

export default Info


