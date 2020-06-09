import React, { useState, useEffect } from "react";

const App = () => {
  //when declaring a boolean with useState, always use a verb & 'set'
  const [isActive, setIsActive] = useState(false);
  const [initialTime, setInitialTime] = useState(0);

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setInitialTime((prev) => prev + 1);
      }, 1000);
    } else if (!isActive && initialTime !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, initialTime]);

  const handleReset = () => {
    setIsActive(false);
    setInitialTime(0);
  };
  return (
    <div>
      <h1> Timer : {initialTime} </h1>
      <button onClick={() => setIsActive((prev) => !prev)}>
        {isActive ? "PAUSE" : "START"}
      </button>
      <button onClick={handleReset}>RESET</button>
    </div>
  );
};

export default App;

//STOPPED AT 17 minutes
