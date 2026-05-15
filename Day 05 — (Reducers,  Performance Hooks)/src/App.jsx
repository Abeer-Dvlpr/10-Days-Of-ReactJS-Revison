import React, { useCallback, useReducer, useState, useMemo } from 'react'

const INC = 'INC'
const DEC = 'DEC'
const INC_5 = 'INC_5'
const DEC_5 = 'DEC_5'
const RES = 'RES'

const counter = (state, action) => {
  switch (action.type) {
    case INC:
      return state + 1
    case DEC:
      return state - 1
    case INC_5:
      return state + 5
    case DEC_5:
      return state - 5
    case RES:
      return 0
    default:
      return state
  }
}

const Display = React.memo(({ count, result }) => {
  console.log("Child component rendered!");
  return (
    <div className="bg-purple-100 p-4 rounded-lg mt-4 text-center">
      <h2 className="text-xl font-bold">Memoized Child Component</h2>
      <p className="mt-2">Count from Reducer: {count}</p>
      <p>Result (×1000): {result}</p>
    </div>
  );
});

function App() {
  const [state, dispatch] = useReducer(counter, 0)
  const [count, setCount] = useState(0)

  const handleClick = useCallback(() => {
    console.log('Button clicked');
  }, []);

  const result = useMemo(() => {
    return count * 1000;
  }, [count]);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md flex flex-col items-center ">
        
        {/* 🔥 Practice 1 & 2: useReducer Counter */}
        <h1 className='text-3xl text-center p-4'>🔥 Practice 1 & 2: useReducer Counter</h1>
        <h1 className='text-bold text-2xl text-center '>Count:{state}</h1>
        <div className="flex justify-center flex-col items-center mt-4 gap-4">
          <div className="flex space-x-4">
            <button onClick={() => dispatch({ type: INC })} className='bg-green-500 text-white px-4 py-2 rounded'>Increment (+1)</button>
            <button onClick={() => dispatch({ type: DEC })} className='bg-red-500 text-white px-4 py-2 rounded'>Decrement (-1)</button>
          </div>
          <div className="flex space-x-4">
            <button onClick={() => dispatch({ type: INC_5 })} className='bg-green-500 text-white px-4 py-2 rounded'>+5</button>
            <button onClick={() => dispatch({ type: DEC_5 })} className='bg-red-500 text-white px-4 py-2 rounded'>-5</button>
          </div>
          <button onClick={() => dispatch({ type: RES })} className='bg-orange-500 text-white px-4 py-2 rounded'>Reset</button>
        </div>
        
        {/* 🔥 Practice 3: useCallback */}
        <h1 className='text-3xl text-center p-4'>🔥 Practice 3: useCallback</h1>
        <button className='bg-amber-400 text-white py-4 px-2 rounded-lg' onClick={handleClick}>Click to Console.log</button>
        
        {/* 🔥 Practice 4: useMemo */}
        <h1 className='text-3xl text-center p-4'>🔥 Practice 4: useMemo</h1>
        <input type="number" value={count}
          onChange={(e) => setCount(Number(e.target.value))} className='border border-gray-300 rounded px-4 py-2' />
        <p className="text-xl mt-4 text-center">Result (count × 1000): {result}</p>
        
        {/* 🔥 Practice 5: React.memo */}
        <h1 className='text-3xl text-center p-4'>🔥 Practice 5: React.memo</h1>
        <Display count={state} result={result} />
        
      </div>
    </div>
  )
}

export default App