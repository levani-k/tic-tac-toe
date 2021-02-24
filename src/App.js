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
    this.winner()
  }

  winner = () => {
    let array = ['button1', 'button2', 'button3', 'button4', 'button5', 'button6', 'button7', 'button8', 'button9']
    const lines = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      let options = ['X', 'O']
      for (let index = 0; index < options.length; index++) {
        if (this.state[array[a]] === options[index] && this.state[array[a]] === this.state[array[b]] && this.state[array[b]] === this.state[array[c]] ) {
          this.setState({
            displayWhoWon: true,
            winner: options[index]
          })
        }
      }
    }

    if(this.state.counter === 8 && !this.state.displayWhoWon) {
      this.setState({
          displayWhoWon: true,
          winner: "nobody"
      })
    }
  }

  restartGame = () => {
    this.setState({
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
    })
  }

  render() {
    let array = ['button1', 'button2', 'button3', 'button4', 'button5', 'button6', 'button7', 'button8', 'button9']
    return (
      <div id='app' className='app'>
        <h1>Here you can play Tic Tac Toe</h1>
        {
          array.map((button, index) => {
            if(!this.state[button]) {
              return <button key={index} value={button} className='button' onClick={this.handleOnClick}>·</button>
            } else if(this.state[button] === 'X') {
              return <button key={index} value={button} className='button' onClick={this.handleOnClick}>X</button>
            } else if(this.state[button] === 'O') {
              return <button key={index} value={button} className='button' onClick={this.handleOnClick}>O</button>
            }
          })
        }
        {
          this.state.displayWhoWon ? <h1 className='winnerText'>winner is {this.state.winner}</h1> : <p></p>
        }
        <br />
        <button className='restartButton' onClick={this.restartGame}>restart</button>
      </div>
    );
  }
}

export default App;
