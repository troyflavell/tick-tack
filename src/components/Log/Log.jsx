export default function Log({turns}) {

    return (
        <ol id="log">
            {turns.map((turn, index) => (
                <li key={index}>
                    <span>{turn.player}</span>
                    <span>{`(${turn.square.row}, ${turn.square.cell})`}</span>
                </li>
            ))}
        </ol>
    )
}