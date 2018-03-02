import React from 'react';
import ReactDOM from 'react-dom';

import Board from './components/board/Board.jsx';
import store from './stores/store.js';

import './sass/app.scss';

class TwentyFortyEight extends React.Component {
  constructor(props) {
    super(props);

    document.addEventListener('keyup', this.handleKeyMove);

    this.state = {
      board: props.board,
    };
  }

  setSize(event) {
    const size = event.target.value;

    store.dispatch({ type: 'SET_SIZE', size });
  }

  // FUTURE: Add touch/swipe support
  handleKeyMove(event) {
    const board = this.getState().board;

    switch (event.code) {
      case 'ArrowUp':
        store.dispatch({ type: 'MERGE_UP', board });
        break;
      case 'ArrowDown':
        store.dispatch({ type: 'MERGE_DOWN', board });
        break;
      case 'ArrowLeft':
        store.dispatch({ type: 'MERGE_LEFT', board });
        break;
      case 'ArrowRight':
        store.dispatch({ type: 'MERGE_RIGHT', board });
        break;
      default:
        break;
    }
  }

  /*
  newGame(event) {
    event.preventDefault();
    store.dispatch({ type: 'NEW_GAME' });
  }

  reset(event) {
    event.preventDefault();
    store.dispatch({ type: 'NEW_GAME' });
  }
  */

  render() {
    const footer = (
      <footer className="pin-to-bottom">
        <a className="reset" href="" onClick={this.newGame}>restart</a>
      </footer>
    );

    return (
      <div id="container">
        <Board
          {...store.getState()}
          move={this.move}
          newGame={this.newGame}
          setSize={this.setSize}
        />
      </div>
    );
  }
}

TwentyFortyEight.propTypes = {
  board: React.PropTypes.array.isRequired,
};

const render = () => {
  ReactDOM.render(
    <TwentyFortyEight {...store.getState()} />,
    document.getElementById('root')
  );
};

store.subscribe(render);
store.dispatch({ type: 'INIT' });

render();
