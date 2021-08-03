
/*
 * Eng: https://reactjs.org/tutorial/tutorial.html
 * Rus: https://learn-reactjs.ru/tutorial
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
    renderSquare(i) {
        //return <Square value={i} />;
        return (
            <Square
                value={this.props.squares[i]}
                onClick={() => this.props.onClick(i)}
            />
        );
    }

    render() {
        return (
            <div>
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
    constructor(props) {
        super(props);
        this.state = {
            history: [{
                squares: Array(9).fill(null),
            }],
            stepNumber: 0,
            xIsNext: true,
        }
    }

    handleClick(i) {
        const history = this.state.history;
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        if (calculateWinner(squares)) {
            alert('Error: You cannot write data to this cell.\nReason: Game is over. Refresh page for restart the game.');
            return;
        } else if (squares[i]) {
            alert('Error: You cannot write data to this cell.\nReason: Cell overwriting is not possible.');
            return;
        } else {
            squares[i] = this.state.xIsNext ? 'X' : 'O';
            this.setState({
                history: history.concat([{
                    squares: squares,
                }]),
                xIsNext: !this.state.xIsNext,
            });
        }
    }

    JumpTo(step) {
        this.setState({
            stepNumber: step,
            xIsNext: (step % 2) === 0,
        });
    }

    render() {
        const history = this.state.history;
        const current = history[history.length - 1];
        const winner = calculateWinner(current.squares);

        const moves = history.map((step, move) => {
            const desc = move ?
                'Go to move #' + move :
                'Go to game start';
            return (
                <li key={move}>
                    <button onClick={() => this.jumpTo(move)}>{desc}</button>
                </li>
            );
        });

        let status1, status2;
        if (winner) {
            status1 = 'GAME OVER! Winner of this play: ' + (winner);
            status2 = 'Refresh page to restart the game.';
        } else {
            status1 = 'Previous step: ' + (this.state.xIsNext ? 'O' : 'X');
            status2 = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        }

        return (
            <div className="game">
                <div className="game-board">
                    <Board
                        squares={current.squares}
                        onClick={(i) => this.handleClick(i)}
                    />
                </div>
                <div className="game-info">
                    <div className="status">{status1}<br />{status2}</div>
                    <ol>{moves}</ol>
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
