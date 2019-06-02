import React, { Component } from 'react';
import axios from 'axios';

import SideBar from './components/SideBar';
import Results from './components/Results';
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currencies:[],
            convertedAmount:'',
            from:'',
            to:'',
            isLoading:false
        }
    }

    componentDidMount() {
        this.setState({isLoading:true});
        this.fetchCurrencies();
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
        axios.get(`https://api.exchangeratesapi.io/latest?base=${from}`)
        .then(response => {
            let convertedAmount = response.data.rates[to] * amount;
            this.setState({
                convertedAmount: convertedAmount.toFixed(2),
                from:from,
                to:to,
                isLoading:false
            })
        })
        .catch(error => {
            console.log(error);
        })
    }

    render() {
        return (
            <div className="App">
                <div className="currency-converter">
                    <SideBar currencies={this.state.currencies} convertCurrency={this.convertCurrency}/>
                    <Results convertedAmount={this.state.convertedAmount} from={this.state.from} to={this.state.to} isLoading={this.state.isLoading}/>
                </div>
            </div>
        );
    }
}

export default App;
