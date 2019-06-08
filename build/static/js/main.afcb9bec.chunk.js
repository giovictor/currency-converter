(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,a){e.exports=a(46)},27:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(17),c=a.n(o),s=(a(26),a(27),a(2)),m=a(3),i=a(5),l=a(4),u=a(6),h=a(7),d=a.n(h),v=a(18),f=function(e){var t=e.currencies.map(function(e){return r.a.createElement("option",{key:e,value:e},e)});return r.a.createElement(n.Fragment,null,t)},p=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(l.a)(t).call(this,e))).handleChange=function(e){a.setState(Object(v.a)({},e.target.name,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),a.props.convertCurrency(a.state.from,a.state.to,a.state.amount)},a.state={from:"USD",to:"PHP",amount:1},a}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props.currencies;return r.a.createElement("aside",{className:"sidebar"},r.a.createElement("div",{className:"sidebar__heading"},r.a.createElement("h3",{className:"sidebar__name"},"GIO'S"),r.a.createElement("h3",{className:"sidebar__appname"},"CURRENCY CONVERTER")),r.a.createElement("form",{className:"convertForm",onSubmit:this.handleSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"From"),r.a.createElement("select",{name:"from",className:"form-control",onChange:this.handleChange,value:this.state.from},r.a.createElement(f,{currencies:e}))),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"To"),r.a.createElement("select",{name:"to",className:"form-control",onChange:this.handleChange,value:this.state.to},r.a.createElement(f,{currencies:e}))),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Amount"),r.a.createElement("input",{type:"number",name:"amount",className:"form-control",value:this.state.amount,onChange:this.handleChange})),r.a.createElement("button",{type:"submit",className:"convertForm__button"},"CONVERT")))}}]),t}(n.Component),E=a(19),g=a.n(E),b=function(e){var t=e.from,a=e.to,o=e.convertedAmount,c=e.otherConvertedAmounts,s=e.isLoading,m=c.map(function(e){return r.a.createElement("div",{className:"otherConvertedAmount"},e)});return r.a.createElement("div",{className:"results"},s?r.a.createElement("p",null,"Wait the results are loading..."):r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"main-result"},r.a.createElement("p",{className:"main-result-heading"},t," to ",a),r.a.createElement("p",{className:"main-result-amount"},o),r.a.createElement("p",{className:"main-result-as-of"},"as of"),r.a.createElement("p",{className:"main-result-currentDate"},g()().format("DD MMMM YYYY"))),r.a.createElement("div",{className:"otherResults"},m)))},C=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(l.a)(t).call(this,e))).fetchCurrencies=function(){d.a.get("https://api.exchangeratesapi.io/latest").then(function(e){var t=Object.keys(e.data.rates);a.setState({currencies:t})}).catch(function(e){console.log(e)})},a.convertCurrency=function(e,t,n){d.a.get("https://api.exchangeratesapi.io/latest?base=".concat(e)).then(function(r){var o=r.data.rates[t]*n,c=Object.entries(r.data.rates).map(function(e){var t=e[1]*n;return"".concat(e[0]," - ").concat(t.toFixed(2))});a.setState({convertedAmount:o.toFixed(2),otherConvertedAmounts:c,from:e,to:t,isLoading:!1})}).catch(function(e){console.log(e)})},a.state={currencies:[],convertedAmount:"",otherConvertedAmounts:[],from:"USD",to:"PHP",isLoading:!1},a}return Object(u.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.setState({isLoading:!0}),this.fetchCurrencies(),this.convertCurrency(this.state.from,this.state.to,1)}},{key:"render",value:function(){var e=this.state,t=e.currencies,a=e.convertedAmount,n=e.from,o=e.to,c=(e.otherConvertedCurrencies,e.otherConvertedAmounts),s=e.isLoading;return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"currency-converter"},r.a.createElement(p,{currencies:t,convertCurrency:this.convertCurrency}),r.a.createElement(b,{convertedAmount:a,from:n,to:o,otherConvertedAmounts:c,isLoading:s})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[20,1,2]]]);
//# sourceMappingURL=main.afcb9bec.chunk.js.map