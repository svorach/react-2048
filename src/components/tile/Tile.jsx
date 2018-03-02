import React from 'react';

import './tile.scss';

const Tile = ({ num, index, rowIndex }) => {
  const tileClasses = [
    'tile',
    'animated',
    `num-${num}`,
  ];

  const opts = {
    'data-coords': `${rowIndex},${index}`,
    className: tileClasses.join(' '),
  };

  return (
    <div {...opts}>
      {num > 0 ? num : ''}
    </div>
  );
};

Tile.propTypes = {
  num: React.PropTypes.number,
  index: React.PropTypes.number.isRequired,
  rowIndex: React.PropTypes.number.isRequired,
};

module.exports = Tile;
