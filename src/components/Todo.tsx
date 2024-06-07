import { useTodoStore } from '../utils/store'
import { CheckCircleIcon, TrashIcon, PencilSquareIcon } from '@heroicons/react/20/solid'
import { useState } from 'react'
import Modal from './Modal'

interface TodoProps {
    id: string;
    title: string;
    completed: boolean;
    notes: string;
}

const Todo: React.FC<TodoProps> = ({ id, title, completed, notes }) => {
    const [isModalOpen, setModalOpen] = useState(false);
    const toggleTodo = useTodoStore((state) => state.toggleTodo);
    const removeTodo = useTodoStore((state) => state.removeTodo);

    const handleEditClick = () => {
        setModalOpen(true);
    };

    return (
        <>
        <div className="flex items-start p-4 bg-white rounded-md shadow-md my-4 border-l-4 border-blue-500 transition-transform transform hover:scale-105">
            <CheckCircleIcon
                className={`h-6 w-6 mr-3 cursor-pointer ${completed ? 'text-green-500' : 'text-gray-300'}`}
                onClick={() => toggleTodo(id)}
            />
            <div className="flex-1">
                <p className={`text-xl font-semibold ${completed ? 'line-through text-gray-500' : 'text-gray-900'}`}>
                    {title}
                </p>
                <p className="text-gray-700 mt-2">{notes}</p>
            </div>
            <div className="flex items-center space-x-2">
                <PencilSquareIcon
                    className="h-6 w-6 text-blue-500 cursor-pointer hover:text-blue-700"
                    onClick={handleEditClick}
                />
                <TrashIcon
                    className="h-6 w-6 text-red-500 cursor-pointer hover:text-red-700"
                    onClick={() => removeTodo(id)}
                />
            </div>
        </div>
            {isModalOpen && <Modal id={id} notes={notes} setModalOpen={setModalOpen} />}
            </>
    );
};

export default Todo;
