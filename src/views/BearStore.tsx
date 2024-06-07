import React, { useState } from 'react';
import { create } from 'zustand';

interface BearStore {
    bears: number;
    increaseBears: () => void;
    decreaseBears: () => void;
    removeAllBears: () => void;
    updateBears: (newBears: number) => void;
}

const useStore = create<BearStore>((set) => ({
    bears: 0,
    increaseBears: () => set((state) => ({ bears: state.bears + 1 })),
    decreaseBears: () => set((state) => ({ bears: state.bears - 1 })),
    removeAllBears: () => set({ bears: 0 }),
    updateBears: (newBears: number) => set({ bears: newBears })
}));

function BearCounter() {
    const bears = useStore((state) => state.bears);
    return <h1>{bears} around here...</h1>;
}

function Controls() {
    const { increaseBears, decreaseBears, removeAllBears, updateBears } = useStore();
    const [inputValue, setInputValue] = useState<string>('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            updateBears(parseInt(inputValue) || 0);
            setInputValue('');
        }
    };

    return (
        <>
            <button onClick={increaseBears}>Increase</button>
            <button onClick={decreaseBears}>Decrease</button>
            <button onClick={removeAllBears}>Remove All</button>
            <input
                type="text"
                placeholder="Enter number of bears..."
                value={inputValue}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
            />
        </>
    );
}

function BearCounterApp() {
    return (
        <>
            <BearCounter />
            <Controls />
        </>
    );
}

export default BearCounterApp;
