import React from 'react';
import { useMood } from './MoodContext';

function Emoji() {
  const { isHappy, toggleMood } = useMood();

  return (
    <div className="emoji" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
      <span role="img" aria-label="Emoji">
        {isHappy ? '😄' : '😢'}
      </span>
      <button onClick={toggleMood}>Change Mood</button>
    </div>
  );
}

export default Emoji;
