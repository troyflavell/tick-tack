
import Player from "./components/Player/Player"
import GameBoard from "./components/GameBoard/GameBoard"
import React, { useState } from 'react';


function App() {

  const [activePlayer, setActivePlayer] = useState('X')

  function handleCellClick() {
       setActivePlayer((prevPlayer) => {
          return prevPlayer === 'X' ? 'O' : 'X'
        })


  }

  return (
    <main>
      <div className="div" id="game-container">
        Players
        <ol id="players" className="highlight-players">
          <Player name="Troias" symbol="X" isActive={activePlayer === 'X'}/>
          <Player name="Jon" symbol="O" isActive={activePlayer === 'O'}/>
        </ol>
        <GameBoard onSelectSquare={handleCellClick} activePlayerSynbol={activePlayer}/>
      </div>

      Log
    </main>)
}

export default App
