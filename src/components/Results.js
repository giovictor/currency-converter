import React from 'react'
import WithLoading from './WithLoading';
const Results = (props) => {
    const {from, to, convertedAmount } = props;
    return (
        <div className="results">
            <div className="main-result">
                <h3 className="main-result-heading">{from} to {to}</h3>
                <p className="main-result-amount">{convertedAmount}</p>
            </div>
        </div>
    )
}

export default WithLoading(Results);
