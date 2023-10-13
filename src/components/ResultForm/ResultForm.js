import React from 'react';
import Answer from '../Answer/Answer';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { range } from '../../utils';

function ResultForm({ listAnswer, answer }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((num) => (
        <Answer key={num} value={listAnswer[num]} answer={answer} />
      ))}
    </div>
  );
}

export default ResultForm;
