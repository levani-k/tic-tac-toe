import React from 'react'

const Board = ({ state, handleOnClick }) => {
    const array = ['button1', 'button2', 'button3', 'button4', 'button5', 'button6', 'button7', 'button8', 'button9']
    return(
        <div>
          {
            array.map((button, index) => {
              if(!state[button]) {
                return <button key={index} value={button} className='button' onClick={handleOnClick}>·</button>
              } else if(state[button] === 'X') {
                return <button key={index} value={button} className='button' onClick={handleOnClick}>X</button>
              } else if(state[button] === 'O') {
                return <button key={index} value={button} className='button' onClick={handleOnClick}>O</button>
              }
            })
          }
        </div>
    )
}


export default Board