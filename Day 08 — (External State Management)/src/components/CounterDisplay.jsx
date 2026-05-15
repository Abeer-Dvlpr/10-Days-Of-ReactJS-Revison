import React from 'react'
import useCounterStore from '../store/useCounterStore'

const CounterDisplay = () => {
    const { count } = useCounterStore();
    return (

        <div className="flex  items-center justify-center gap-4">
            <h1 className="text-3xl font-bold ">
                Count: {count}
            </h1>
        </div>
    )
}

export default CounterDisplay