import React from 'react';
import PropTypes from 'prop-types';
import s from './Feedback.module.css';

function Feedback({ options, onClickFeedback }) {
  return (
    <ul className={s.List}>
      {options.map(option => (
        <li key={option}>
          <button
            type="button"
            className={s.Button}
            onClick={() => {
              onClickFeedback(option);
            }}
          >
            {option}
          </button>
        </li>
      ))}
    </ul>
  );
}

Feedback.propTypes = {
  options: PropTypes.array.isRequired,
  onClickFeedback: PropTypes.func.isRequired,
};

export default Feedback;
