import React, { createContext, useState, useContext } from 'react';

const MoodContext = createContext();

export function MoodProvider({ children }) {
  const [isHappy, setIsHappy] = useState(true);

  const toggleMood = () => {
    setIsHappy(prevIsHappy => !prevIsHappy);
  };

  return (
    <MoodContext.Provider value={{ isHappy, toggleMood }}>
      {children}
    </MoodContext.Provider>
  );
}

export function useMood() {
  return useContext(MoodContext);
}
