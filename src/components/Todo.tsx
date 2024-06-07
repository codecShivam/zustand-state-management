import { useTodoStore } from '../utils/store'
import { CheckCircleIcon, TrashIcon } from  '@heroicons/react/20/solid'

interface TodoProps {
    id: string;
    title: string;
    completed: boolean;
    notes: string;
}

const Todo: React.FC<TodoProps> = ({ id, title, completed, notes }) => {
    const toggleTodo = useTodoStore((state) => state.toggleTodo);
    const removeTodo = useTodoStore((state) => state.removeTodo);
    const addNote = useTodoStore((state) => state.addNote);

    return (
        <div className="flex items-start p-4 bg-white rounded-md shadow-md my-4 border-l-4 border-blue-500">
            <CheckCircleIcon
                className={`h-6 w-6 mr-3 cursor-pointer ${completed ? 'text-green-500' : 'text-gray-300'}`}
                onClick={() => toggleTodo(id)}
            />
            <div className="flex-1">
                <p className={`text-xl font-semibold ${completed ? 'line-through text-gray-500' : 'text-gray-900'}`}>
                    {title}
                </p>
                <textarea
                    value={notes}
                    onChange={(e) => addNote(id, e.target.value)}
                    placeholder="Add notes..."
                    className="w-full mt-2 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <TrashIcon
                className="h-6 w-6 ml-4 text-red-500 cursor-pointer hover:text-red-700"
                onClick={() => removeTodo(id)}
            />
        </div>
    );
};

export default Todo;
