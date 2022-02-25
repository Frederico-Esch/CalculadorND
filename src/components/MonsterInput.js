import React from "react";
import './MonsterInput.css'

class IndividualInput extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            value: 0,
        };
    }

    onChange = (event) => this.props.update(this.props.id, event.target.value)
    

    render() {
        return (
            <div className="content">
                <input type="number" defaultValue={0} onChange={this.onChange}/>
                <button onClick={this.props.increase}>
                    <img className="image" src="https://cdn.pixabay.com/photo/2012/04/02/16/07/plus-24844_1280.png" alt="add"/>
                </button>
                <button onClick={() => this.props.decrease(this.props.id)}>
                    <img className="image" src="https://www.pngplay.com/wp-content/uploads/5/Minus-Symbol-Transparent-Image.png" alt="sub"/>
                </button>
            </div>
        );
    }
}

class MonsterInput extends React.Component {
    constructor(props){
        super(props);
        let amount = this.props.amount;
        amount = amount == null || amount === 0 ? 1 : amount;
        this.state = {
            amount: amount,
            value: {
	      0: 0
	    }
        };
    }

    increase = () =>{
      let last_val = 0;
      while(last_val in this.state.value) last_val++;
      let new_value = this.state.value;
      new_value[last_val] = 0;
      this.setState({
	amount: this.state.amount+1,
	value: new_value
      })
    }

    decrease = (valor) => { 
        let newAmount = this.state.amount-1;
        let newValue = {};

        if(newAmount <= 0) newAmount = 1;
        for(var key in this.state.value){
	  if (key != valor)
	      newValue[key] = this.state.value[key];
	}

	if(Object.keys(newValue).length == 0) newValue = {0:0};
        
        this.setState({
            amount: newAmount,
            value: newValue
        })
    }

    update = (key, valor) => {
        let value = this.state.value;
        value[key] = parseFloat(valor);
        this.setState({
            value: value
        })
    }

    calculate = () => {
        let max = 0;
        let soma = 0;
        for(var key in this.state.value){
            let valor = this.state.value[key];
            if( valor > max) max = valor;
            else soma += valor;
        }
        let result = max + Math.floor(soma/max)*2;
        if(isNaN(result)) return 0;
        return result;
    }

    render() {
        let inputs = [];
        for(var i in this.state.value) 
            inputs.push(<IndividualInput id={i} key={i} increase={this.increase} decrease={this.decrease} update={this.update}/>);

        return(
            <div>
                {inputs}
                <p className="valor-calculado">NE = {this.calculate()}</p>
            </div>
        );
    }
}

export default MonsterInput
