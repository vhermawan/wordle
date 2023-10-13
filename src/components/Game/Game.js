import React, { useState } from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import InputForm from '../InputForm/InputForm';
import ResultForm from '../ResultForm/ResultForm';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import WonBanner from '../WonBanner';
import LostBanner from '../LostBanner';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [listAnswer, setListAnswer] = useState([]);
  const [gameStatus, setGameStatus] = useState('running');

  const handleSubmitAnswer = (guess) => {
    const nextAnswer = [...listAnswer, guess]
    setListAnswer([...listAnswer, guess]);

    if (guess.toUpperCase() === answer) {
      setGameStatus('won');
    } else if (nextAnswer.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus('lost');
    }
  }


  return (
    <>
      <InputForm handleSubmitAnswer={handleSubmitAnswer} gameStatus={gameStatus} />
      <ResultForm listAnswer={listAnswer} answer={answer} />
      {gameStatus === 'won' && (
        <WonBanner numOfGuesses={listAnswer.length} />
      )}
      {gameStatus === 'lost' && <LostBanner answer={answer} />}
    </>
  );
}

export default Game;
