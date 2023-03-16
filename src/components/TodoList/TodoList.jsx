import TodoItem from "components/TodoItem/TodoItem";

const TodoList = ({todos, removeTodo, toggleTodoCompleted}) => {

    return (
     <ul>
            {todos.map(todo => <TodoItem key={todo.id} removeTodo={removeTodo} toggleTodoCompleted={toggleTodoCompleted} {...todo} />
          
        )}
      </ul>
)
}

export default TodoList;