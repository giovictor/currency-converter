import React from 'react'
import moment from 'moment'
import WithLoading from './WithLoading'
const Results = (props) => {
    const {from, to, convertedAmount } = props;
    return (
        <div className="results">
            <div className="main-result">
                <p className="main-result-heading">{from} to {to}</p>
                <p className="main-result-amount">{convertedAmount}</p>
                <p className="main-result-as-of">as of</p>
                <p className="main-result-currentDate">{moment().format('DD MMMM YYYY')}</p>
            </div>
        </div>
    )
}

export default WithLoading(Results);
