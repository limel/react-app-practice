import React from 'react';

export default function Fiter({ value, onChange }) {
  return (
    <label>
      Search on todos <input type="text" vlaue={value} onChange={onChange} />
    </label>
  );
}
