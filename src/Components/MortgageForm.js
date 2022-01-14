import React, { Component } from 'react'
import ResultsTable from './ResultsTable';
import CurrencyInput from 'react-currency-input-field';
import { ExitToApp } from '@mui/icons-material';

class MortgageForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mode: 'form',
            propertyPrice: '',
            monthlyIncome: '',
            monthlyExpenditure: '',
            currentSavings: ''
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleReturn = this.handleReturn.bind(this);
    }
    
    handleChange(value, name) {

        this.setState({
            [name]: value
        });

    }
    
    handleSubmit(event) {
        event.preventDefault();
        const target = this.state;
        let status = true;

        if (!target.propertyPrice) { status = false; }
        if (!target.monthlyIncome) { status = false; }
        if (!target.monthlyExpenditure) { status = false; }

        function formatCurrency(value){
            var formatter = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'GBP',
            });
                
            return formatter.format(value);
        }
        

        if(status === true){
            const results = {
                'Property Price': formatCurrency(this.state.propertyPrice),
                'Deposit Percentage': "5%",
                'Deposit Amount': formatCurrency((this.state.propertyPrice / 100) * 5),
                'Monthly Income': formatCurrency(this.state.monthlyIncome),
                'Monthly Expenditures': formatCurrency(this.state.monthlyExpenditure),
                'Your Savings': formatCurrency(this.state.currentSavings),
                'Monthly Savings Amount': formatCurrency(this.state.monthlyIncome - this.state.monthlyExpenditure),
                'Duration': (((this.state.propertyPrice / 100) * 5) - this.state.currentSavings) / (this.state.monthlyIncome - this.state.monthlyExpenditure)
            }
    
            this.setState({
                mode: 'results',
                results: results
            })
        } else {
            alert('ERROR! Field empty.')
        }

    }

    handleReturn(event) {
        event.preventDefault();
        this.setState({mode: 'form'})
    }
    
    render() {

        return (
            <div className='calculator__form'>
                {this.state.mode === 'results' && (
                    <div className='calculator__form__results'>
                        <ResultsTable data={this.state.results} />
                        <button onClick={this.handleReturn}>Edit</button>
                    </div>
                )}

                {this.state.mode === 'form' && (
                    <form onSubmit={this.handleSubmit}>
                        <label>
                        Property Price:
                        <CurrencyInput
                            intlConfig={{ locale: 'en-US', currency: 'GBP' }}
                            name='propertyPrice'
                            value={this.state.propertyPrice}
                            onValueChange={(value, name) => this.handleChange(value, name)}
                        />
                        </label>
                        <label>
                        Monthly Income:
                        <CurrencyInput
                            intlConfig={{ locale: 'en-US', currency: 'GBP' }}
                            name='monthlyIncome'
                            value={this.state.monthlyIncome}
                            onValueChange={(value, name) => this.handleChange(value, name)}
                        />
                        </label>
                        <label>
                        Monthly Expenditures:
                        <CurrencyInput
                            intlConfig={{ locale: 'en-US', currency: 'GBP' }}
                            name='monthlyExpenditure'
                            value={this.state.monthlyExpenditure}
                            onValueChange={(value, name) => this.handleChange(value, name)}
                        />
                        </label>
                        <label>
                        Current Savings:
                        <CurrencyInput
                            intlConfig={{ locale: 'en-US', currency: 'GBP' }}
                            name='currentSavings'
                            value={this.state.currentSavings}
                            onValueChange={(value, name) => this.handleChange(value, name)}
                        />
                        </label>
                        <input className='submit' type='submit' value='Submit' />
                    </form>
                )}

            </div>
        );
    }
}

export default MortgageForm;