import { useState, useEffect } from 'react';

const CounterHooks = () => {
  const [count, setCount] = useState(0);
  const [textValue, setTextValue] = useState('');

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleChangeInputValue = e => {
    setTextValue(e.target.value);
  };

  useEffect(() => {
    console.log('when updating counter');
    document.title = `Clicked  ${count} times`;
  }, [count]);

  return (
    <>
      <input type="text" value={textValue} onChange={handleChangeInputValue} />
      <button type="button" onClick={handleIncrement}>
        Кликнули счетчик {count} раз
      </button>
    </>
  );
};

export default CounterHooks;
