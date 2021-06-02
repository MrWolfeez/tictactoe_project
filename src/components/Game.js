import React, { Component } from 'react'
import board from './Board';

export default class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            xIsNext: true,
            StepNumber: 0,
            history: [

                { squares: Array[9].fill(null) }

            ]
        }
    }
    render() {
        const history = this.states.history;
        const current = history[this.state.StepNumber];





        return ( <
            div className = "game" >
            <
            div className = "game-board" >
            <
            Board onClick = {
                (i) => onClick(i) }
            squares = { current.squares }
            />

            <
            /div>

            <
            /div>
        )
    }
}