
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
    // console.log('combination', combination)
    //  const firstSquareSymbol = gameBoard[combination[0].row][combination[0].col]
    // const secondSquareSymbol = gameBoard[combination[1].row][combination[1].col]
    // const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].col]
    //  if ( firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol) {
    //   winner = players[firstSquareSymbol]
    // }
  }

  return winner

}

function deriveGameBoard(
  gameTurns
) {
  let gameBoard = [...INTIAL_GAME_BOARD.map(row => [...row])]

  console.log('gameBoard', gameBoard)

  for (const turn of gameTurns) {
    const { square, player } = turn
    const { row, col } = square
    gameBoard[row][col] = player
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










