import { useState } from 'react'
import { useTodoStore } from '../utils/store'
import { PlusCircleIcon } from '@heroicons/react/20/solid'

const AddTodo: React.FC = () => {
    const [title, setTitle] = useState('');
    const addTodo = useTodoStore((state) => state.addTodo);

    const handleAddTodo = () => {
        if (title.trim() !== '') {
            addTodo(title);
            setTitle('');
        }
    };

    return (
        <div className="flex mb-8 w-full max-w-xl">
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter todo title"
                className="flex-1 p-3 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
                onClick={handleAddTodo}
                className="flex items-center bg-blue-500 text-white px-4 py-3 rounded-r-md hover:bg-blue-600"
            >
                <PlusCircleIcon className="h-6 w-6 mr-2" />
                Add Todo
            </button>
        </div>
    );
};

export default AddTodo;
