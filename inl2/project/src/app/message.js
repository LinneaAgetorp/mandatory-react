/*
The Message component expects to be passed...
- state: a game state string (plr1,plr2,plr1won,plr2won,draw)

The component will then render an appropriate message.
*/

import React from 'react';

export default function Message(props) {
    const player = props.value.state;

    if (player === 'plr1') {
        return (
            <div>First player's turn to play</div>
        )
    }
    if (player === 'plr2') {
        return (
            <div>Second player's turn to play</div>
        )
    }
    if (player === 'plr1won') {
        return (
            <div className='winning'>First player WON!</div>
        )
    }
    if (player === 'plr2won') {
        return (
            <div className='winning'>Second player WON!</div>
        )
    }
    if (player === 'draw') {
        return (
            <div>It's a draw! Play again?</div>
        )
    }
}
