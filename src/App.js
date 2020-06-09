import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
  border: ${({ theme }) => `3px solid ${theme.darkerGray[1]}`};
`;

const Title = styled.h1`
  color: ${(props) => props.theme.darkGray};
`;

const Button = styled.button`
  background-color: ${({ success, danger }) =>
    success ? "green" : danger ? "red" : null};
`;

const List = styled.li`
  color: ${(props) => (props.time % 2 === 0 ? "red" : "blue")};
`;

const App = () => {
  //when declaring a boolean with useState, always use a verb & 'set'
  const [isActive, setIsActive] = useState(false);
  const [initialTime, setInitialTime] = useState(0);
  const [times, setTimes] = useState([]);

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

  const handleRecord = () => {
    setTimes((prev) => [...prev, initialTime]);
  };

  return (
    <Container>
      <Title> Timer : {initialTime} </Title>
      <Button success onClick={() => setIsActive((prev) => !prev)}>
        {isActive ? "PAUSE" : "START"}
      </Button>
      <Button danger onClick={handleReset}>
        RESET
      </Button>
      {!isActive && initialTime !== 0 ? (
        <Button onClick={handleReset} success>
          RECORD
        </Button>
      ) : null}
      {times.length > 0 ? (
        <ul>
          {times.map((time) => (
            <List time={time}>{time}</List>
          ))}
        </ul>
      ) : null}
    </Container>
  );
};

export default App;

//STOPPED AT 17 minutes
