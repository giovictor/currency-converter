import React, { Fragment } from 'react'
import moment from 'moment'
import Loader from './Loader';

const Results = (props) => {
    const {from, to, convertedAmount, otherConvertedAmounts, isLoading } = props;

    const othercurrenciesAmountLoop = otherConvertedAmounts.map(otherConvertedAmount => {
        return <div className="otherConvertedAmount" key={otherConvertedAmount}>{otherConvertedAmount.slice(0,5)} <span className="amount">{otherConvertedAmount.slice(6)}</span></div>
    });

    return (
        <div className="results">
            {isLoading ? <Loader/> :
                <Fragment>
                    <div className="main-result">
                        <p className="main-result-heading">{from} to {to}</p>
                        <p className="main-result-amount">{convertedAmount}</p>
                        <p className="main-result-as-of">as of</p>
                        <p className="main-result-currentDate">{moment().format('DD MMMM YYYY')}</p>
                    </div>
                    <div className="otherResults">
                        {othercurrenciesAmountLoop}
                    </div>
                </Fragment>
            }

        </div> 
    )
}

export default Results;
