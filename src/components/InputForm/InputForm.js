import React, { useState } from 'react';

function InputForm({ handleSubmitAnswer, gameStatus }) {
  const [guess, setGuess] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    handleSubmitAnswer(guess);
    setGuess('');
  }

  return <div id="input-form">
    <form className='guess-input-wrapper' onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        disabled={gameStatus !== 'running'}
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        value={guess}
        onChange={(event) => {
          const nextGuess = event.target.value.toUpperCase();
          setGuess(nextGuess);
        }}
        id="guess-input"
        type="text"
      />
    </form>
  </div>;
}

export default InputForm;
