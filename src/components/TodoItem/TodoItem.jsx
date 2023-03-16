import { useDispatch } from 'react-redux';
import { removeTodo, toggleTodoCompleted } from 'components/store/todoSlice';

const TodoItem = ({ id, text, completed }) => {
  const dispatch = useDispatch();

  return (
    <li key={id}>
      <input
        type="checkbox"
        checked={completed}
    onChange={() => dispatch(toggleTodoCompleted({id}))}
      />
      <span>{text}</span>
    <span onClick={() => dispatch(removeTodo({id}))}>&times;</span>
    </li>
  );
};

export default TodoItem;
