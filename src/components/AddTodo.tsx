import { useState } from 'react';
import { useTodoStore } from  '../utils/store';

const AddTodo: React.FC = () => {
  const [title, setTitle] = useState('');
  const addTodo = useTodoStore((state) => state.addTodo);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      addTodo(title);
      setTitle('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center p-4 bg-white rounded-md shadow-md">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add new todo..."
        className="flex-1 p-2 border rounded-md"
      />
      <button type="submit" className="ml-2 p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
        Add
      </button>
    </form>
  );
};

export default AddTodo;
