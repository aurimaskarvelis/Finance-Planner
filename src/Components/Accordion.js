import React, { useState } from 'react';

const Accordion = (props) => {

  const [isActive, setIsActive] = useState(false);

  return (
    <div className='accordion'>
        <div className='accordion__container'>
            <div className='accordion__container__header' onClick={() => setIsActive(!isActive)}>
                <h3>{props.title}</h3>
                <span className='accordion__container__header--toggle'>{isActive ? '-' : '+'}</span>
            </div>
            <div className='accordion__container__content'>
                {isActive && <div className="accordion-content">
                  <p>{props.message}.... <a href={props.more} target='_blank' rel='noopener noreferrer'>continue reading</a></p>
                </div>}
            </div>
        </div>
    </div>
  );
};

export default Accordion;