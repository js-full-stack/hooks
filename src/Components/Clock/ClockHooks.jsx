import { useState, useEffect, useRef } from 'react';

const ClockHooks = () => {
  const [time, setTime] = useState(new Date());
  const intervalId = useRef();

  useEffect(() => {
    intervalId.current = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      stop();
    };
  }, []);

  const stop = () => {
    clearInterval(intervalId.current);
  };

  return (
    <>
      <p>Текущее время: {time.toLocaleTimeString()}</p>
      <button type="button" onClick={stop}>
        Stop
      </button>
    </>
  );
};

export default ClockHooks;
