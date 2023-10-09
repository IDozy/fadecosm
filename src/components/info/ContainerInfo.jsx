import React from 'react';
import './Info.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';


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
                <h6>{card.subtitle}</h6>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </div>
            ))}
          </div>
      </section>
    </div>
  );
};

export default ContainerInfo;
