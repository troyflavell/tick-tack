import React from 'react'

export default function GameOver({
    winner,
    onRematch  ,
}) {
  return (
    <div id="game-over">
        <h2> GameOver</h2>
        {winner && <p> { winner} Won!</p>}
        {!winner && <p> It&apos;s a Draw!</p>}

    <p> 
        <button onClick={onRematch}> Play Again</button>
    </p>       
    </div>
  )
}
