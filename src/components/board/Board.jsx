import React from 'react';
import Row from '../row/Row.jsx';

import './board.scss';

const Board = ({ board }) => {
  // check for lose conditions
  // if game is lost, prompt for new game.

  const boardClasses = [
    'board',
    'animated',
    'swoop-down-dramatic',
  ];

  const boardRows = board.map(
    (boardRow, i) => <Row key={i} row={boardRow} index={i} />
  );

  return (
    <div className={boardClasses.join(' ')}>
      {boardRows}
    </div>
  );
};

Board.propTypes = {
  board: React.PropTypes.array.isRequired,
};

module.exports = Board;
