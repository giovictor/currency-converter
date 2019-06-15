import React, { Component } from 'react'
import Currencies from './Currencies';
class SideBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            from:'USD',
            to:'PHP',
            amount:1.00
        }
    }

    handleChange = (e) => {
        this.setState({[e.target.name]:e.target.value});
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.convertCurrency(this.state.from, this.state.to, this.state.amount);
    }

    render() {
        const { currencies, isLoading } = this.props;


        return (
            <aside className="sidebar">
                <div className="sidebar__heading">
                    <h3 className="sidebar__name">GIO'S</h3>
                    <h3 className="sidebar__appname">CURRENCY CONVERTER</h3>
                </div>

                <form className="convertForm" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>From</label>
                        <select name="from" className="form-control" onChange={this.handleChange} value={this.state.from}>
                            <Currencies currencies={currencies} />
                        </select>
                    </div>
                    <div className="form-group">
                        <label>To</label>
                        <select name="to" className="form-control" onChange={this.handleChange} value={this.state.to}>
                            <Currencies currencies={currencies} />
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Amount</label>
                        <input type="number" name="amount" className="form-control" value={this.state.amount} onChange={this.handleChange}/>
                    </div>
                    {/* { Fix conditional rendering of buttons} */}
                    <button type="submit" className="convertForm__button">{isLoading ? 'CONVERTING...' : 'CONVERT'}</button>
                </form>
                <p className="messageForResults">See Results Below</p>
            </aside>
        )
    }
}

export default SideBar;
