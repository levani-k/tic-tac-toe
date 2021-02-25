import React from 'react'

const Winner = ({ state }) => {
    let array = ['button1', 'button2', 'button3', 'button4', 'button5', 'button6', 'button7', 'button8', 'button9']
    const lines = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]
    for (let i = 0; i < lines.length; i++) {
      let [a, b, c] = lines[i];
      let options = ['X', 'O']
      for (let index = 0; index < options.length; index++) {
        if (state[array[a]] === options[index] && state[array[a]] === state[array[b]] && state[array[b]] === state[array[c]] ) {
            return(
                <p className='winnerText'>winner is {options[index]}</p>
            )
        } 
      }
    }

    if(state.counter === 9) {
        return(
            <p className='winnerText'>Friendship won</p>
        )
    }
    
    return(
        <p></p>
    )

    
}


export default Winner