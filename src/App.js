import React, { Component } from 'react';
import axios from 'axios';

import SideBar from './components/SideBar';
import Results from './components/Results';
import Footer from './components/Footer';
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currencies:[],
            convertedAmount:'',
            otherConvertedAmounts:[],
            from:'USD',
            to:'PHP',
            isLoading:false
        }
    }

    componentDidMount() {
        this.setState({isLoading:true});
        this.fetchCurrencies();
        this.convertCurrency(this.state.from, this.state.to, 1);
    }

    fetchCurrencies = () => {
        axios.get('https://api.exchangeratesapi.io/latest')
        .then(response => {
            let currencies = Object.keys(response.data.rates);
            this.setState({currencies:currencies});
        })
        .catch(error => {
            console.log(error);
        })
    }

    convertCurrency = (from, to, amount) => {
        this.setState({isLoading:true});
        axios.get(`https://api.exchangeratesapi.io/latest?base=${from}`)
        .then(response => {
            let convertedAmount = response.data.rates[to] * amount;
            let otherConvertedAmounts = Object.entries(response.data.rates).map(rate => {
                let otherConvertedAmount = rate[1] * amount
                return `${rate[0]} - ${otherConvertedAmount.toFixed(2)}`;
            })
            setTimeout(() => {
                this.setState({
                    convertedAmount: convertedAmount.toFixed(2),
                    otherConvertedAmounts:otherConvertedAmounts,
                    from:from,
                    to:to,
                    isLoading:false
                })
            }, 500)  
        })
        .catch(error => {
            console.log(error);
        })
    }

    render() {
        const { currencies, convertedAmount, from, to, otherConvertedAmounts, isLoading} = this.state;
        return (
            <div className="App">
                <SideBar currencies={currencies} convertCurrency={this.convertCurrency} isLoading={isLoading}/>
                <div className="currency-converter">
                    <Results convertedAmount={convertedAmount} from={from} to={to} otherConvertedAmounts={otherConvertedAmounts} isLoading={isLoading}/>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default App;
