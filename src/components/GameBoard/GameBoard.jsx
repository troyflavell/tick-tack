
export default function GameBoard({
    onSelectSquare,
    board,
}) {

  return (
 <ol id="game-board">
    {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
        {row.map((cell, cellIndex) => (
          <li key={cellIndex} className="cell">
            <button onClick={() => onSelectSquare(
                rowIndex,
                cellIndex
            )} className="cell-button"
             disabled={cell !== null}
            >
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
