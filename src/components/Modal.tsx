import { useTodoStore } from '../utils/store';
import { useState, KeyboardEvent } from 'react';
import { XMarkIcon } from '@heroicons/react/20/solid';

interface ModalProps {
    id: string;
    notes: string;
    setModalOpen: (open: boolean) => void;
}

const Modal: React.FC<ModalProps> = ({ id, notes, setModalOpen }) => {
    const [newNotes, setNewNotes] = useState(notes);
    const addNote = useTodoStore((state) => state.addNote);

    const handleSave = () => {
        addNote(id, newNotes);
        setModalOpen(false);
    };

    const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleSave();
        }
    };

    return (
        <div className="fixed h-screen inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
            <div className="bg-white p-6 rounded-lg shadow-xl transform transition-all duration-300 ease-in-out scale-95 hover:scale-100">
                <div className="flex justify-between items-center border-b pb-3 mb-4">
                    <h2 className="text-2xl font-bold text-gray-700">Edit Notes</h2>
                    <button onClick={() => setModalOpen(false)}>
                        <XMarkIcon className="h-6 w-6 text-gray-400 hover:text-gray-600" />
                    </button>
                </div>
                <textarea
                    value={newNotes}
                    onChange={(e) => setNewNotes(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Enter your notes here..."
                    className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4 resize-none"
                    rows={6}
                />
                <div className="flex justify-end space-x-4">
                    <button
                        onClick={() => setModalOpen(false)}
                        className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleSave}
                        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
