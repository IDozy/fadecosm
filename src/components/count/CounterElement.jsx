import React, { useState } from 'react'
import CountUp from 'react-countup/'
import ScrollTrigger from 'react-scroll-trigger';
import "./Counter.css"

const CounterElement = () => {
  const [counterOn, setCounterOn] = useState(false);


  return (
    
  
    <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)} >
      <div className="container__count" style={{
       
        background: "red",
        marginTop: "3rem",
        padding: "5rem",
      }}>
        
        {counterOn &&
        < >
        
            <div className='container__item'>
              <h1>mas de</h1>
              <h2>

                <CountUp start={0} end={150} duration={3} delay={0} />

              </h2>
              <p>años de experiencia</p>
            </div>

            <div className='container__item'>
              <h1>mas de</h1>
              <h2>

                <CountUp start={0} end={150} duration={3} delay={0} />

              </h2>
              <p>años de experiencia</p>
            </div>

            <div className='container__item'>
              <h1>mas de</h1>
              <h2>

                <CountUp start={0} end={150} duration={3} delay={0} />

              </h2>
              <p>años de experiencia</p>
            </div>

            <div className='container__item'>
              <h1>mas de</h1>
              <h2>

                <CountUp start={0} end={150} duration={3} delay={0} />

              </h2>
              <p>años de experiencia</p>
            </div>

        </>
        }

      </div>

    </ScrollTrigger>

    

  )
}

export default CounterElement
