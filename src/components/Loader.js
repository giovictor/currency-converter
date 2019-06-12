import React from 'react'

import loader from '../images/loader.gif'
const Loader = () => {
    return (
        <div className="loader">
            <img src={loader} className="loading_gif"/>
        </div>
    )
}

export default Loader;
