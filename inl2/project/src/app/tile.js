import PropTypes from 'prop-types';

/*
The Tile component expects to be passed
- piece: a valid board value:
  - 0: an empty square
  - 1: plr1 has a piece here
  - 2: plr2 has a piece here
- callback: a function that it'll call when clicked
- line: a boolean, true if tile was part of winning line (STRETCH TASK)

The tile should render with the classes...
- tile: always
- plr1: if has a plr1 piece
- plr2: if has a plr2 piece
- line: if it was part of a winning line (STRETCH TASK)
*/

import React from 'react';

export default function Tile(props) {


    const position = props.position;
    const piece = props.piece;
    let winClass = props.isWinning ? 'line' : '';


    const clickhandler = (e) => {
        e.preventDefault();
        props.onclickhandler(position)
    };


    if (piece === 0) {

        return (
            <div className={`tile ${winClass}`} onClick={clickhandler} >

            </div>
        );
    } else if (piece === 1) {

        return (
            <div className={`tile plr1 ${winClass}`}>
                X
            </div>
        );
    } else if (piece === 2) {

        return (
            <div className={`tile plr2 ${winClass}`}>
                O
            </div>
        );
    }

}

Tile.propTypes = {
    piece: PropTypes.number.isRequired,
    onclickhandler: PropTypes.func.isRequired
};