import React from 'react'
import imagen1 from "../../assets/imagen-1.jpg"
import imagen2 from "../../assets/imagen-2.jpg"
import imagen3 from "../../assets/imagen-3.jpg"
import "./slie.css"

const Slider = () => {
    return (
        <div className='cube-container'>
 <div className='cube'>
            <img src={imagen1} alt="avatar 1"  height={"250px"} />
            <img src={imagen2} alt="avatar 1"height={"250px"}/>
            <img src={imagen3} alt="avatar 1"  height={"250px"}/>
            <img src={imagen1} alt="avatar 1"  height={"250px"}/>
            <img src={imagen2} alt="avatar 1"  height={"250px"}/>
            <img src={imagen3} alt="avatar 1" height={"250px"}/>

        </div>
        </div>
       
    )
}

export default Slider
