import React, { Component } from 'react'

function convertDuration(monthCount) {
    function getPlural(number, word) {
        return number === 1 && word.one || word.other;
    }

    var months = { one: 'month', other: 'months' },
        years = { one: 'year', other: 'years' },
        m = monthCount % 12,
        y = Math.floor(monthCount / 12),
        result = [];

    y && result.push(y + ' ' + getPlural(y, years));
    m && result.push(m + ' ' + getPlural(m, months));
    return result.join(' and ');
}

class ResultsTable extends Component {

    render() {
        return (
            <table>
            <tbody>
            {Object.entries(this.props.data).map(([key,value])=>{
                return (
                    <tr key={key}>
                        <td>{key}</td> 
                        {key === 'Duration'
                            ? <td>{convertDuration(Math.round(parseFloat(value.toString())))}</td>
                            : <td>{value.toString()}</td>
                        }
                    </tr>
                );
            })}
            </tbody>
            </table>    
        );
    }
}

export default ResultsTable;