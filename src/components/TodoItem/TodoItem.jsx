
const TodoItem = ({ id, text, completed, removeTodo, toggleTodoCompleted }) => {

    return (
        <li key={id}>
            <input
              type="checkbox"
              checked={completed}
              onChange={() => toggleTodoCompleted(id)}
            />
            <span>{text}</span>
            <span onClick={() => removeTodo(id)}> x</span>
          </li>
    )
}

export default TodoItem;