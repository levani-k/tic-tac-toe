import React from "react";
import './App.css';

class App extends React.Component{
  constructor() {
    super()
    this.state = {
      button1: '',
      button2: '',
      button3: '',
      button4: '',
      button5: '',
      button6: '',
      button7: '',
      button8: '',
      button9: '',
      counter: 0,
      displayWhoWon: false,
      winner: ''
    }
  }

  handleOnClick = (event) => {
    const { counter } = this.state
    if(!this.state[event.target.value] && counter % 2 === 0 && counter < 9 && !this.state.displayWhoWon) {
      this.setState({
         [event.target.value]: 'X',
         counter: counter + 1
      })
    } else if(!this.state[event.target.value] && counter % 2 === 1 && counter < 9 && !this.state.displayWhoWon) {
      this.setState({
         [event.target.value]: 'O',
         counter: counter + 1
      })
    }
  }

  winner = () => {
    let array = ['button1', 'button2', 'button3', 'button4', 'button5', 'button6', 'button7', 'button8', 'button9']
    let options = ['X', 'O']
    for (let optionsIndex = 0; optionsIndex < 2; optionsIndex++) {
      for (let index = 0; index < 8; index+=3) {
        if(this.state[array[index]] === options[optionsIndex] && this.state[array[index+1]] === options[optionsIndex] && this.state[array[index+2]] === options[optionsIndex]) {
          this.setState({
            displayWhoWon: true,
            winner: options[optionsIndex]
          })
        }
      }
      for (let index = 0; index < 3; index++) {
        if(this.state[array[index]] === options[optionsIndex] && this.state[array[index+3]] === options[optionsIndex] && this.state[array[index+6]] === options[optionsIndex]) {
          this.setState({
            displayWhoWon: true,
            winner: options[optionsIndex]
          })
        }
      }
      if(this.state[array[0]] === options[optionsIndex] && this.state[array[4]] === options[optionsIndex] && this.state[array[8]] === options[optionsIndex]) {
        this.setState({
          displayWhoWon: true,
          winner: options[optionsIndex]
        })
      } else if(this.state[array[2]] === options[optionsIndex] && this.state[array[4]] === options[optionsIndex] && this.state[array[6]] === options[optionsIndex]) {
        this.setState({
          displayWhoWon: true,
          winner: options[optionsIndex]
        })
      }
    }
    if(this.state.counter === 8 && !this.state.displayWhoWon) {
      this.setState({
          displayWhoWon: true,
          winner: "nobody"
      })
    }
  }

  render() {
    return (
      <div id='app' className='app'>
        <h1>Here you can play Tic Tac Toe</h1>
        {
          this.winner()
        }
        {
          !this.state.button1 
          ? <button value='button1' className='button' onClick={this.handleOnClick}>·</button>
          : this.state.button1 === 'X'
          ? <button value='button1' className='button' onClick={this.handleOnClick}>X</button>
          : <button value='button1' className='button' onClick={this.handleOnClick}>O</button>
        }
        {
          !this.state.button2 
          ? <button value='button2' className='button' onClick={this.handleOnClick}>·</button>
          : this.state.button2 === 'X'
          ? <button value='button2' className='button' onClick={this.handleOnClick}>X</button>
          : <button value='button2' className='button' onClick={this.handleOnClick}>O</button>
        }
        {
          !this.state.button3 
          ? <button value='button3' className='button' onClick={this.handleOnClick}>·</button>
          : this.state.button3 === 'X'
          ? <button value='button3' className='button' onClick={this.handleOnClick}>X</button>
          : <button value='button3' className='button' onClick={this.handleOnClick}>O</button>
        }
        <br />
        {
          !this.state.button4 
          ? <button value='button4' className='button' onClick={this.handleOnClick}>·</button>
          : this.state.button4 === 'X'
          ? <button value='button4' className='button' onClick={this.handleOnClick}>X</button>
          : <button value='button4' className='button' onClick={this.handleOnClick}>O</button>
        }
        {
          !this.state.button5 
          ? <button value='button5' className='button' onClick={this.handleOnClick}>·</button>
          : this.state.button5 === 'X'
          ? <button value='button5' className='button' onClick={this.handleOnClick}>X</button>
          : <button value='button5' className='button' onClick={this.handleOnClick}>O</button>
        }
        {
          !this.state.button6
          ? <button value='button6' className='button' onClick={this.handleOnClick}>·</button>
          : this.state.button6 === 'X'
          ? <button value='button6' className='button' onClick={this.handleOnClick}>X</button>
          : <button value='button6' className='button' onClick={this.handleOnClick}>O</button>
        }
        <br />
        {
          !this.state.button7 
          ? <button value='button7' className='button' onClick={this.handleOnClick}>·</button>
          : this.state.button7 === 'X'
          ? <button value='button7' className='button' onClick={this.handleOnClick}>X</button>
          : <button value='button7' className='button' onClick={this.handleOnClick}>O</button>
        }
        {
          !this.state.button8
          ? <button value='button8' className='button' onClick={this.handleOnClick}>·</button>
          : this.state.button8 === 'X'
          ? <button value='button8' className='button' onClick={this.handleOnClick}>X</button>
          : <button value='button8' className='button' onClick={this.handleOnClick}>O</button>
        }
        {
          !this.state.button9 
          ? <button value='button9' className='button' onClick={this.handleOnClick}>·</button>
          : this.state.button9 === 'X'
          ? <button value='button9' className='button' onClick={this.handleOnClick}>X</button>
          : <button value='button9' className='button' onClick={this.handleOnClick}>O</button>
        }

        {
          this.state.displayWhoWon ? <p>winner is {this.state.winner}</p> : <p></p>
        }
      </div>
    );
  }
  
}

export default App;
