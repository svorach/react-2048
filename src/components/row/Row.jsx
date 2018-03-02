import React from 'react';
import Tile from '../tile/Tile.jsx';

import './row.scss';

const Row = ({ row, index }) => {
  const mappedRows = row.map(
    (num, i) => <Tile key={i} num={num} rowIndex={index} index={i} />
  );

  return (
    <div className="row">{mappedRows}</div>
  );
};

Row.propTypes = {
  row: React.PropTypes.array.isRequired,
  index: React.PropTypes.number.isRequired,
};

module.exports = Row;
