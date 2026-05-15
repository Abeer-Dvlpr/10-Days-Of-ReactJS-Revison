import React from 'react'
import useCounterStore from '../store/useCounterStore'

const CounterButtons = () => {
    const { increment, decrement, reset } = useCounterStore();
    return (
        <div className="flex flex-col items-center justify-center  gap-4">
            <button className="bg-green-500 hover:bg-green-700 cursor-pointer text-white font-bold py-2 px-4 rounded" onClick={increment}>Increment</button>
            <button className="bg-red-500 hover:bg-red-700 cursor-pointer text-white font-bold py-2 px-4 rounded" onClick={decrement}>Decrement</button>
            <button className="bg-blue-500 hover:bg-blue-700 cursor-pointer text-white font-bold py-2 px-4 rounded" onClick={reset}>Reset</button>
        </div>
    )
}

export default CounterButtons