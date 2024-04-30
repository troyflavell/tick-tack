import React, { useState } from 'react';


const intialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]

export default function GameBoard({
    onSelectSquare, activePlayerSynbol
}) {

  const [gameBoard, setGameBoard] = useState(intialGameBoard)

  function handleCellClick(rowIndex, cellIndex) {
    
    setGameBoard((prevBoard) => {
      const updatedGameBoard = [...prevBoard.map(
        innerArray => [...innerArray]
      )];
      updatedGameBoard[rowIndex][cellIndex] = activePlayerSynbol
      return updatedGameBoard
    })
    onSelectSquare(rowIndex, cellIndex)
  }

  return (
 <ol id="game-board">
    {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
        {row.map((cell, cellIndex) => (
          <li key={cellIndex} className="cell">
            <button onClick={() => handleCellClick(rowIndex, cellIndex)} className="cell-button">
                {cell}
            </button>
            </li>
        ))}
        </ol>
      </li>
    ))}
 </ol>
  )
}
