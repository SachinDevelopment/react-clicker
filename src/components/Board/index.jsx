import React, { useState } from 'react';
import fi from '../../assets/floating_island.jpg';
import fish from '../../assets/fish.png';
import { backgroundStyle, monsterStyle, containerStyle } from './style';
import Mercenary from '../Mercenary';

const Board = () => {
    const [level, setLevel] = useState(1);
    const [gold, setGold] = useState(0);
    const [maxLife, setMaxLife] = useState(10)
    const [life, setLife] = useState(maxLife);

    const monsterClicked = () => {
        if (life > 0) {
            setLife(life - 1)
        } else {
            setLife(10);
            setLevel(level+1);
            setGold(gold + 1);
        }
    }

    return (
        <div style={containerStyle}>
            <div>
            <span>{`life: ${life}`} </span>
            <span>{`gold: ${gold}`} </span>
            <img src={fi} alt="txt" style={backgroundStyle} />
            <img src={fish} alt="txt" style={monsterStyle} onClick={monsterClicked} />
            </div>
            <Mercenary gold={gold}/>
        </div>
    )
}

export default Board;
