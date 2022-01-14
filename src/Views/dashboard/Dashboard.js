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
      title: 'The 50/30/20 Rule of Thumb for Budgeting',
      message: 'The 50/30/20 rule of thumb is a way to allocate your budget according to three categories: needs, wants, and financial goals. It’s not a hard-and-fast rule but rather a rough guideline to help you build a financially sound budget.       ',
      more: 'https://www.thebalance.com/the-50-30-20-rule-of-thumb-453922'
    },
    {
      title: 'What Is The 70-20-10 Budget?',
      message: 'This budgeting concept is excellent for someone who doesn’t want to watch every cent of spending across thirty-five different categories. It’s a pared-down, simplified version of budgeting.',
      more: 'https://www.clevergirlfinance.com/blog/70-20-10-budget/'
    },
    {
      title: 'The cost of buying a house and moving',
      message: 'Wondering how much it costs to buy a house or a flat? There’s a list of fees to consider when buying a new house, including the cost of movers, taxes, insurance, your deposit and solicitor fees.',
      more: 'https://www.moneyhelper.org.uk/en/homes/buying-a-home/estimate-your-overall-buying-and-moving-costs'
    },
    {
      title: 'The help to buy scheme explained',
      message: 'If you’re fresh out of University, or a student beginning to think about saving up for a deposit, there are a number of Government schemes that may help you. With so many different schemes being offered and so many different clauses it can be difficult to make the decision which one is right for you.',
      more: 'https://www.thestudentpocketguide.com/2017/01/student-life/finance/help-to-buy/'
    },
  ];

  return (
    <section className='dashboard'>
      <div className='dashboard__container mw'>
        <h1>What is your goal?</h1>
        <p>Please select one of the following options</p>
        <div className='dashboard__container__items'>
          <Link to='/mortgages' aria-label='Mortgages'>
            <CalculatorBlock title='Mortgages' icon={mortgageIcon} />
          </Link>
          <Link to='/savings' aria-label='Savings'>
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