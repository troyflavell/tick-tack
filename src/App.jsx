
import Player from "./components/Player/Player"
import GameBoard from "./components/GameBoard/GameBoard"
import React, { act, useState } from 'react';
import Log from "./components/Log/Log";
import { WINNING_COMBINATIONS } from "./winning-combinations.js";



const intialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
]


function deriveActivePlayer(gameTurns) {
  let currentPlayer = 'X'

  if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
    currentPlayer = 'O'
  }
  return currentPlayer
}




 function App() {

  const [gameTurns, setGameTurns] = useState([])

  const activePlayer = deriveActivePlayer(gameTurns)

  let gameBoard = intialGameBoard

  for (const turn of gameTurns) {
    const { square, player } = turn
    const { row, col } = square

    gameBoard[row][col] = player
  }

  function handleCellClick(
    rowIndex,
    cellIndex
  ) {

    setGameTurns = (prevTurn) => {
      const currentPlayer = deriveActivePlayer(prevTurn)
      const updatedTurn = [{
        square: { row: rowIndex, cell: cellIndex },
        player: currentPlayer,
      }, ...prevTurn]

      return updatedTurn

    }
  }

 






  return (
    <main>
      <div className="div" id="game-container">
        Players
        <ol id="players" className="highlight-players">
          <Player name="Troias" symbol="X" isActive={activePlayer === 'X'} />
          <Player name="Jon" symbol="O" isActive={activePlayer === 'O'} />
        </ol>
        <GameBoard
          onSelectSquare={handleCellClick}
          board={gameBoard}
          />
      </div>
      <Log
        turns={gameTurns}
      />

      Log
    </main>
  )
}

export default App;










