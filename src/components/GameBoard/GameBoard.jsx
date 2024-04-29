import React from 'react'

const intialGameBoard = [
    ['','',''],
    ['','',''],
    ['','','']
]

export default function GameBoard() {
  return (
 <ol id="game-board">
    {intialGameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
        {row.map((cell, cellIndex) => (
          <li key={cellIndex} className="cell">
            <button className="cell-button">
                {cell}
            </button>
            </li>
        ))}
      </li>
    ))}
 </ol>
  )
}
