import React, { useState } from 'react';
import CountUp from 'react-countup/';
import ScrollTrigger from 'react-scroll-trigger';
import "./Counter.css"

const CounterElement = () => {
  const [counterOn, setCounterOn] = useState(false);

  // Definir un arreglo de datos para los contadores
  const countersData = [
    { title: 'MÁS DE' , end: 15, description: 'Años de experiecia' },
    { title: 'MÁS DE' , end: 250, description: 'Proyectos realizados' },
    { title: 'MÁS DE' , end: 1000, description: 'Clientes satisfechos'  },
    { title: 'MÁS DE' , end: 50, description: 'Empresas que nos prefieren' },
  ];

  const formatNumber = (value) => {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "");
  };

  return (
    <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
      <div className="container__count" style={{
        background: "#aaafff",
        marginTop: "3rem",
        padding: "8rem 4rem 1.5rem ",
      }}>
        {counterOn && (
          countersData.map((counter, index) => (
            <div className='container__item' key={index}>
              <h1 className='count-title'>{counter.title}</h1>
              <h2 className='count-number'>
                <CountUp start={0} end={counter.end} duration={2} delay={0}  formattingFn={(value) => formatNumber(value)} />
              </h2>
              <p className='count-description'>{counter.description}</p>
            </div>
          ))
        )}
      </div>
    </ScrollTrigger>
  )
}

export default CounterElement;
