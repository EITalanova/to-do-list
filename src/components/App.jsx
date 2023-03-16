import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { addTodo } from './store/todoSlice';
import AddField from './AddField/AddField';
import TodoList from './TodoList/TodoList';

export const App = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const addTask = () => {
    dispatch(addTodo({text}));
    setText('');
  };

  return (
    <div className="App">
      <AddField text={text} handleInput={setText} handleSubmit={addTask} />
      <TodoList
      />
    </div>
  );
};
