import React from 'react';
import { Link } from 'react-router-dom';
import CalculatorBlock from '../../Components/CalculatorBlock';
import mortgageIcon from '../../assets/images/home.png';
import savingsIcon from '../../assets/images/money-bag.png';
import Accordion from '../../Components/Accordion';

const Dashboard = (props) => {

  const accordionData = [
    {
      title: 'How much deposit do I need for a mortgage?',
      message: 'The amount of deposit you need for your mortgage is worked out as a percentage of the value of the house you’re buying. The mortgage is then based off what’s left – the amount you’re borrowing.',
      more: 'https://www.moneyadviceservice.org.uk/blog/how-much-deposit-need-mortgage'
    },
    {
      title: 'How much deposit do I need for a mortgage?',
      message: 'The amount of deposit you need for your mortgage is worked out as a percentage of the value of the house you’re buying. The mortgage is then based off what’s left – the amount you’re borrowing.',
      more: 'https://www.moneyadviceservice.org.uk/blog/how-much-deposit-need-mortgage'
    },
    {
      title: 'How much deposit do I need for a mortgage?',
      message: 'The amount of deposit you need for your mortgage is worked out as a percentage of the value of the house you’re buying. The mortgage is then based off what’s left – the amount you’re borrowing.',
      more: 'https://www.moneyadviceservice.org.uk/blog/how-much-deposit-need-mortgage'
    },
    {
      title: 'How much deposit do I need for a mortgage?',
      message: 'The amount of deposit you need for your mortgage is worked out as a percentage of the value of the house you’re buying. The mortgage is then based off what’s left – the amount you’re borrowing.',
      more: 'https://www.moneyadviceservice.org.uk/blog/how-much-deposit-need-mortgage'
    },
    {
      title: 'How much deposit do I need for a mortgage?',
      message: 'The amount of deposit you need for your mortgage is worked out as a percentage of the value of the house you’re buying. The mortgage is then based off what’s left – the amount you’re borrowing.',
      more: 'https://www.moneyadviceservice.org.uk/blog/how-much-deposit-need-mortgage'
    },
    {
      title: 'How much deposit do I need for a mortgage?',
      message: 'The amount of deposit you need for your mortgage is worked out as a percentage of the value of the house you’re buying. The mortgage is then based off what’s left – the amount you’re borrowing.',
      more: 'https://www.moneyadviceservice.org.uk/blog/how-much-deposit-need-mortgage'
    },
    {
      title: 'How much deposit do I need for a mortgage?',
      message: 'The amount of deposit you need for your mortgage is worked out as a percentage of the value of the house you’re buying. The mortgage is then based off what’s left – the amount you’re borrowing.',
      more: 'https://www.moneyadviceservice.org.uk/blog/how-much-deposit-need-mortgage'
    },
  ];

  return (
    <section className='dashboard'>
      <div className='dashboard__container mw'>
        <h1>What is your goal?</h1>
        <p>Please select one of the following options</p>
        <div className='dashboard__container__items'>
          <Link to='/mortgages'>
            <CalculatorBlock title='Mortgages' icon={mortgageIcon} />
          </Link>
          <Link to='/savings'>
            <CalculatorBlock title='Savings' icon={savingsIcon} />
          </Link>
        </div>
      </div>
      <section className='dashboard__information'>
        <h2>Information</h2>
        <div className='dashboard__information__container mw'>
          {accordionData.map((data => {
            return <Accordion title={data.title} message={data.message} more={data.more} />
          }))}
        </div>
      </section>
    </section>
  );
};

export default Dashboard;