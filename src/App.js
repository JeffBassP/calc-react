import React, { Component } from 'react';
import * as math from 'mathjs';

import Button from './components/Button/Button';
import Input from './components/Input/Input';
import ClearButton from './components/ClearButton/ClearButton';

import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      input: ''
    };
  }

  addToInput = (value) => {
    this.setState({ input: this.state.input + value });
  };
  handleEqual = () => {
    this.setState({ input: math.evaluate(this.state.input) })
  };


  render() {

    return (
      <div className="App">
        <div className="calc-wrapper">
          <Input input={this.state.input}></Input>
          <div className="row">
            <Button handleClick={this.addToInput}>7</Button>
            <Button handleClick={this.addToInput}>8</Button>
            <Button handleClick={this.addToInput}>9</Button>
            <Button handleClick={this.addToInput}>/</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>4</Button>
            <Button handleClick={this.addToInput}>5</Button>
            <Button handleClick={this.addToInput}>6</Button>
            <Button handleClick={this.addToInput}>*</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>1</Button>
            <Button handleClick={this.addToInput}>2</Button>
            <Button handleClick={this.addToInput}>3</Button>
            <Button handleClick={this.addToInput}>+</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>.</Button>
            <Button handleClick={this.addToInput}>0</Button>
            <Button handleClick={() => this.handleEqual()}>=</Button>
            <Button handleClick={this.addToInput}>-</Button>
          </div>
          <div className="row">
            <ClearButton handleClear={() => this.setState({ input: '' })}>Clear</ClearButton>
          </div>
        </div>
      </div >
    );
  }
}

export default App;
