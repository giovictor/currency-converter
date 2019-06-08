import React, { Fragment } from 'react'
import moment from 'moment'

const Results = (props) => {
    const {from, to, convertedAmount, otherConvertedAmounts, isLoading } = props;

    const othercurrenciesAmountLoop = otherConvertedAmounts.map(otherConvertedAmount => {
        return <div className="otherConvertedAmount">{otherConvertedAmount}</div>
    });

    return (
        <div className="results">
            {isLoading ? <p>Wait the results are loading...</p> :
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
