import React from 'react';
import './Info.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas);

const ContainerInfo = ({ cards, cardClassName, }) => {


  return (
    <div>
      <section >      
          <div className="cards" >
            {cards.map((card, i) => (
              <div key={i} className={cardClassName} data-aos={card.data}
           
              data-aos-duration="2000">
               {card.icon ? <FontAwesomeIcon icon={card.icon} className='icono'/>:null}
                <h6 className='text-info'>{card.subtitle}</h6>
                <h3 className='card-text-title-info' >{card.title}</h3>
                <p style={{ textAlign: "left", padding:".5rem " }}>{card.text}</p>
              </div>
            ))}
          </div>
      </section>
    </div>
  );
};

export default ContainerInfo;
