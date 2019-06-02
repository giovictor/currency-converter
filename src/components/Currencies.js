import React, { Fragment } from 'react'

const Currencies = (props) => {
    const {currencies} = props;

    const currencyLoop = currencies.map(currency => {
        return <option key={currency} value={currency}>{currency}</option>
    });
    return (
        <Fragment>
            {currencyLoop}
        </Fragment>
    )
}

export default Currencies;
