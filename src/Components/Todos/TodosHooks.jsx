import { useState, useReducer, useMemo } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { LoremIpsum } from 'lorem-ipsum';

const lorem = new LoremIpsum();

const todosReducer = (state, action) => {
  switch (action.type) {
    case 'addTodo':
      return [...state, action.payload.todo];

    case 'removeTodo':
      return state.filter(todo => todo.id !== action.payload.todoId);

    default:
      return state;
  }
};

export default function TodosHooks() {
  //   const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('');
  const [string, setString] = useState('');

  const [todos, dispatch] = useReducer(todosReducer, []);
  const addTodo = () => {
    const todo = {
      id: uuidv4(),
      text: lorem.generateWords(3),
    };

    dispatch({ type: 'addTodo', payload: { todo } });

    // setTodos(prevTodos => [...prevTodos, todo]);
  };

  const removeTodo = todoId => {
    dispatch({ type: 'removeTodo', payload: { todoId } });

    // setTodos(prevTodos => prevTodos.filter(todo => todo.id !== todoId));
  };

  const changeFilter = e => {
    setFilter(e.target.value);
  };

  // const filteredTodos = todos.filter(todo => {
  //   console.log('change');
  //   todo.text.includes(filter);
  // });
  const filteredMemoTodos = useMemo(() => {
    console.log('memoChange');
    return todos.filter(todo => todo.text.includes(filter));
  }, [todos, filter]);

  return (
    <>
      <input
        type="text"
        onChange={e => setString(e.target.value)}
        value={string}
      />
      <p>{string}</p>
      <br /> <br />
      <input type="text" onChange={changeFilter} value={filter} />
      <br />
      <button type="button" onClick={addTodo}>
        Add todo
      </button>
      <ul>
        {filteredMemoTodos.map(todo => (
          <li key={todo.id}>
            <span>{todo.text}</span>
            <button type="button" onClick={() => removeTodo(todo.id)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
