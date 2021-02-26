import React from "react";
import './App.css';
import Board from './Board'

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
      counter: 0
    }
  }

  handleOnClick = (event) => {
    const { counter } = this.state
    if(!this.state[event.target.value] && counter % 2 === 0 && counter < 9) {
      this.setState({
        [event.target.value]: 'X',
        counter: counter + 1
      })
    } else if(!this.state[event.target.value] && counter % 2 === 1 && counter < 9) {
      this.setState({
        [event.target.value]: 'O',
        counter: counter + 1
      })
    }
  }


  showBoardAndWinner = () => {
    let array = ['button1', 'button2', 'button3', 'button4', 'button5', 'button6', 'button7', 'button8', 'button9']
    const lines = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]
    for (let i = 0; i < lines.length; i++) {
      let [a, b, c] = lines[i];
      console.log('cdsd')
      let options = ['X', 'O']
      for (let index = 0; index < options.length; index++) {
        if (this.state[array[a]] === options[index] && this.state[array[a]] === this.state[array[b]] && this.state[array[b]] === this.state[array[c]] ) {
            return(
                <p className='winnerText'>winner is {options[index]}</p>
            )
        } 
      }
    }

    if(this.state.counter === 9) {
        return(
            <p className='winnerText'>Friendship won</p>
        )
    }
    
    return(
        <Board state={this.state} handleOnClick={this.handleOnClick} />
    )

    
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
      counter: 0
    })
  }

  render() {
    return (
      <div id='app' className='app'>
        <h1>Here you can play Tic Tac Toe</h1>
        {this.showBoardAndWinner()}
        <br />
        <button className='restartButton' onClick={this.restartGame}>restart</button>
      </div>
    );
  }
}

export default App;
