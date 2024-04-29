
import Player from "./components/Player/Player"
import GameBoard from "./components/GameBoard/GameBoard"

function App() {


  return (
    <main>
      <div className="div" id="game-container">
        Players
        <ol id="players">
          <Player name="Troias" symbol="X"/>
          <Player name="Jon" symbol="O"/>
        </ol>
        <GameBoard />
      </div>

      Log
    </main>)
}

export default App
