import React from 'react';

const CalculatorBlock = (props) => {
  return (
    <div className='dashboard__container__item__block'>
        <img src={props.icon} alt={props.title}/>
        <h2>{props.title}</h2>
    </div>
  );
};

export default CalculatorBlock;