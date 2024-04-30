import React, { useState } from 'react';



export default function Player({
    name, symbol,isActive
}) {
    const [ playerName, setPlayerName ] = useState(name)
    const [ isEditing, setIsEditing ] = useState(false)

    const clickHandler = () => {
      setIsEditing((state) => !state)

    }

    const inputHandler = (e) => {
      setPlayerName(e.target.value)
    }

    let btnCaption = isEditing ? 'Save' : 'Edit'
  
  
    return (<li className={isActive ? 'active' : undefined}>
      <span className="player">
        { !isEditing && <span className='player-name'>{playerName}</span> }
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={clickHandler}> {btnCaption}</button>
      {isEditing && <input type="text"  onChange={inputHandler}  value={playerName} />}
    </li>);
  }