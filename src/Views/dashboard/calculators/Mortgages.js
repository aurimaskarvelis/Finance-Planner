import React from 'react';
import MortgageForm from '../../../Components/MortgageForm';

const Mortgages = (props) => {
  return (
    <section className='calculator mortgages'>
        <h1>Mortgage Calculator</h1>
          <MortgageForm />
    </section>
  );
};

export default Mortgages;