import React from 'react';

function NameItem({ name, value, onClick }) {
  return (
    <li>
      <h3>{name}</h3>
      <button
          type="button"
          value={value}
          onClick={onClick}

      >
        Geef een rondje!
      </button>
    </li>
  );
}

export default NameItem;