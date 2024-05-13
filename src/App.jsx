
import Player from "./components/Player/Player"
import GameBoard from "./components/GameBoard/GameBoard"
import React, { act, useState } from 'react';
import Log from "./components/Log/Log";
import GameOver from "./components/GameOver.jsx";
import { WINNING_COMBINATIONS } from "./winning-combinations.js";

const PLAYERS = {
  'X': 'Player 1',
  'O': 'Player 2'

}

const INTIAL_GAME_BOARD = [
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

function deriveWinner(
  gameBoard,
  players
) {
   let winner = null
 
  //check if game board is popluated with winning combinations


 for (const combination of WINNING_COMBINATIONS) {

    let winner = null

    const firstCell = gameBoard[0][0]
    const secondCell = gameBoard[0][1]
    const thirdCell = gameBoard[0][2]
    const fourthCell = gameBoard[1][0]
    const fifthCell = gameBoard[1][1]
    const sixthCell = gameBoard[1][2]
    const seventhCell = gameBoard[2][0]
    const eighthCell = gameBoard[2][1]
    const ninthCell = gameBoard[2][2]

    if (firstCell === secondCell && secondCell === thirdCell && firstCell) {
      winner = firstCell
    }
    if (fourthCell === fifthCell && fifthCell === sixthCell && fourthCell) {
      winner = fourthCell
    }
    if (seventhCell === eighthCell && eighthCell === ninthCell && seventhCell) {
      winner = seventhCell
    }
    if (firstCell === fourthCell && fourthCell === seventhCell && firstCell) {
      winner = firstCell
    }
    if (secondCell === fifthCell && fifthCell === eighthCell && secondCell) {
      winner = secondCell
    }
    if (thirdCell === sixthCell && sixthCell === ninthCell && thirdCell) {
      winner = thirdCell
    }
    if (firstCell === fifthCell && fifthCell === ninthCell && firstCell) {
      winner = firstCell
    }
    if (thirdCell === fifthCell && fifthCell === seventhCell && thirdCell) {
      winner = thirdCell
    }


    console.log("gameBoard", firstCell);

    if (winner) {
      return players[winner]
    }

  }



}

function deriveGameBoard(
  gameTurns
) {
  let gameBoard = [...INTIAL_GAME_BOARD.map(row => [...row])]

 

  for (const turn of gameTurns) {
    const { square, player } = turn
    const { row, cell } = square
    gameBoard[row][cell] = player
  }

  return gameBoard
}


 function App() {

  const [players, setPlayers] = useState(PLAYERS)
  const [gameTurns, setGameTurns] = useState([])

  const activePlayer = deriveActivePlayer(gameTurns)
  const gameBoard = deriveGameBoard(gameTurns)
  const winner = deriveWinner(gameBoard, players)
  const hasDraw = gameTurns.length === 9 && !winner


  function handleCellClick(
    rowIndex,
    cellIndex
  ) {

    setGameTurns((prevTurn) => {
      const currentPlayer = deriveActivePlayer(prevTurn)
      const updatedTurn = [{
        square: { row: rowIndex, cell: cellIndex },
        player: currentPlayer,
      }, ...prevTurn]

      return updatedTurn

    }
    )
  }

  function handleRestartGame() {
    setGameTurns([])
  }

  function handlePlayerNameChange(player, newName) {
    setPlayers((prevPlayers) => {
      return {
        ...prevPlayers,
        [player]: newName 
      }
    })
  }

 
  return (
    <main>
      <div className="div" id="game-container">
        Players
        <ol id="players" className="highlight-players">
          <Player name={PLAYERS.X} symbol="X" isActive={activePlayer === 'X'} onChangeName={handlePlayerNameChange} />
          <Player name={PLAYERS.O} symbol="O" isActive={activePlayer === 'O'}  onChangeName={handlePlayerNameChange}/>
        </ol>
        {(winner || hasDraw ) && <GameOver winner={winner} onRematch={handleRestartGame} />}
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










