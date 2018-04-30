import React, {Fragment as F} from 'react';

import {makeMove, newGame} from '../logic';

import Message from './message';
import Tile from './tile';

/*
The main game App! It should have a TicTacToe game state in its component state,
and use the Tile and Message components to render the game.

Then the `makeMove` function from the logic layer should be used to update the
game state as the tiles are being clicked.

The user should also be able to reset the game.

The App component should render an outer element with a `container` CSS class,
and all tiles in an element with a `board` CSS class.
*/


export default class App extends React.Component {
    // constructor(props){
    //     super(props)
    //     this.state = newGame;
    // }
    state = newGame();


    makeMoveHandler = (position) => {
        this.setState(makeMove(this.state, position))

    }

    newGameHandler = e => {
        e.preventDefault();
        this.setState(newGame())
    };



    render() {


        return (
            <F>
                <h1>TIC TAC TOE game</h1>
                <Message value={this.state}/>
                <div className='board' >

                    {this.state.board.map((tile, i) => {
                        const isWinning = this.state.line.includes(i)
                        console.log('winning', isWinning)
                       return  <Tile key={i} position={i} value={this.state} piece={tile} isWinning={isWinning} onclickhandler={this.makeMoveHandler}/>
                    })}


                </div>

                <button onClick={this.newGameHandler}>Start a new game</button>
            </F>
        );
    }
}

