import React,{Component} from 'react';
import './App.scss';

class App extends Component{
  state={
    value:'0',
    score:0
  }
    inputUpdateNumber = val =>{
      if(this.state.value.length<15) {
          if (this.state.value === '0') {
              this.setState({value: val})
          } else {
              this.setState({value: this.state.value + val})
          }
      }
    }
    inputUpdateSpecial = val => {
        if (this.state.value.charAt(this.state.value.length - 1) !== '-' ||
            this.state.value.charAt(this.state.value.length - 1) !== '+' ||
            this.state.value.charAt(this.state.value.length - 1) !== '*' ||
            this.state.value.charAt(this.state.value.length - 1) !== '-') {
            this.setState({value: this.state.value + val})
        }
    }
    clear = () =>{
      this.setState({value:'0',score:0})
    }
    last = () =>{
      if(this.state.value.length===1) {
          this.setState({value: '0'})
      }else if(!isNaN(this.state.value)){
          this.setState({value:this.state.value.slice(0,-1)})
      }
    }
    percent = () =>{
      this.setState({value:`${this.state.value * 0.01}`})
    }
    equal = () =>{
      try{
        var answer = eval(this.state.value)
        this.setState({score:answer})}
        catch {
            alert("Not supported equation")
        }
        if(answer === this.state.score||answer === -(this.state.score)){
            this.setState({value:`${this.state.score}`, score:0})
        }
    }
    plusMinus = () => {

        this.setState({score:this.state.score *-1})
        }





  render() {
    return (
        <div className="App">
          <div>
              <p>{this.state.value}</p>
              <p>{this.state.score}</p>
              </div>
          <button name='C' onClick={() =>this.clear()}>C</button>
          <button name='CE' onClick={() =>this.last()}>CE</button>
          <button name='%' onClick={() =>this.percent()}>%</button>
          <button name='/' onClick={e =>this.inputUpdateSpecial(e.target.name)}>/</button><br/>

          <button name='7' onClick={e =>this.inputUpdateNumber(e.target.name)}>7</button>
          <button name='8' onClick={e =>this.inputUpdateNumber(e.target.name)}>8</button>
          <button name='9' onClick={e =>this.inputUpdateNumber(e.target.name)}>9</button>
          <button name='*' onClick={e =>this.inputUpdateSpecial(e.target.name)}>*</button><br/>

          <button name='4' onClick={e =>this.inputUpdateNumber(e.target.name)}>4</button>
          <button name='5' onClick={e =>this.inputUpdateNumber(e.target.name)}>5</button>
          <button name='6' onClick={e =>this.inputUpdateNumber(e.target.name)}>6</button>
          <button name='-' onClick={e =>this.inputUpdateSpecial(e.target.name)}>-</button><br/>

          <button name='1' onClick={e =>this.inputUpdateNumber(e.target.name)}>1</button>
          <button name='2' onClick={e =>this.inputUpdateNumber(e.target.name)}>2</button>
          <button name='3' onClick={e =>this.inputUpdateNumber(e.target.name)}>3</button>
          <button name='+' onClick={e =>this.inputUpdateSpecial(e.target.name)}>+</button><br/>

          <button name='+/-' onClick={() =>this.plusMinus()}>+/-</button>
          <button name='0' onClick={e =>this.inputUpdateNumber(e.target.name)}>0</button>
          <button name='.' onClick={e =>this.inputUpdateSpecial(e.target.name)}>.</button>
          <button name='=' onClick={() =>this.equal()}>=</button>
        </div>
    )
  }


}

export default App;
