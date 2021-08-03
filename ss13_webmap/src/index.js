
/*
 * Eng: https://reactjs.org/tutorial/tutorial.html
 * Rus: https://learn-reactjs.ru/tutorial#add-time-travel
*/

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

/*
 * https://codepen.io/gaearon/pen/oWWQNa?editors=0010
*/

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}

//class Square extends React.Component {
function Square(props) {
    return (
        /*      className="square" onClick={function() { alert('click'); }}> */
        <button
            className="square"
            onClick={props.onClick}
        >
            {props.value}
        </button>
    );
}

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            xIsNext: true,
        };
    }

    handleClick(i) {
        if (!this.state.squares[i]) { // ← preventing cells overwriting
            const squares = this.state.squares.slice();
            if (calculateWinner(squares) || squares[i]) {
                return;
            }
            squares[i] = this.state.xIsNext ? 'X' : 'O';
            this.setState({
                squares: squares,
                xIsNext: !this.state.xIsNext,
            });
        } else {
            alert('Error:\nCell overwriting is not possible.');
            return;
        }
    }

    renderSquare(i) {
        //return <Square value={i} />;
        return (
            <Square
                value={this.state.squares[i]}
                onClick={() => this.handleClick(i)}
            />
        );
    }

    render() {
        const winner = calculateWinner(this.state.squares);
        let status1, status2;
        if (winner) {
            status1 = 'GAME OVER! Winner of this play: ' + (winner);
            status2 = 'Refresh page to restart.';
        } else {
            status1 = 'Previous step: ' + (this.state.xIsNext ? 'O' : 'X');
            status2 = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        }
        return (
            <div>
            <div className="status">{status1}<br />{status2}</div>
            <div className="board-row">
                {this.renderSquare(0)}
                {this.renderSquare(1)}
                {this.renderSquare(2)}
            </div>
            <div className="board-row">
                {this.renderSquare(3)}
                {this.renderSquare(4)}
                {this.renderSquare(5)}
            </div>
            <div className="board-row">
                {this.renderSquare(6)}
                {this.renderSquare(7)}
                {this.renderSquare(8)}
            </div>
            </div>
        );
    }
}

class Game extends React.Component {
    render() {
        return (
            <div className="game">
            <div className="game-board">
                <Board />
            </div>
            <div className="game-info">
                <div>{/* status */}</div>
                <ol>{/* TODO */}</ol>
            </div>
            </div>
        );
    }
}

// ========================================

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);
