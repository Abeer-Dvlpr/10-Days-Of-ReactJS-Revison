import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from '../features/CounterSlice';

const ReduxCounter = () => {
    const  count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();
    return (
        <div>
            <div className="flex  items-center justify-center gap-4">
                <h1 className="text-3xl font-bold ">
                    Count: {count}
                </h1>
            <div className="flex flex-col items-center justify-center  gap-4">
                <button className="bg-green-500 hover:bg-green-700 cursor-pointer text-white font-bold py-2 px-4 rounded" onClick={()=> dispatch(increment())}>Increment</button>
                <button className="bg-red-500 hover:bg-red-700 cursor-pointer text-white font-bold py-2 px-4 rounded" onClick={()=> dispatch(decrement())}>Decrement</button>
                <button className="bg-blue-500 hover:bg-blue-700 cursor-pointer text-white font-bold py-2 px-4 rounded" onClick={()=> dispatch(reset())}>Reset</button>
            </div>
            </div>
        </div>
    )
}

export default ReduxCounter