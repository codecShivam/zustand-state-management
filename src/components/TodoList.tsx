// components/TodoList.tsx
import { useTodoStore } from '../utils/store';
import Todo from './Todo';

const TodoList: React.FC = () => {
  const todos = useTodoStore((state) => state.todos);

  return (
    <div  className='overflow-y-scroll overflow-x-hidden h-full '>
      {todos.map((todo) => (
        <Todo key={todo.id} {...todo} />
      ))}
    </div>
  );
};

export default TodoList;
