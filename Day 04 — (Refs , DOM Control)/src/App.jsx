import { useEffect, useRef, useState } from "react";

function App() {
  useEffect(() => {
    inputRef.current.focus()
  }, [])
  const inputRef = useRef()
  const inputRef_1 = useRef()
  const btn = useRef()
  const CInput = useRef()
  const CBtn = useRef()
  const Clicks = useRef()
  const clickCount = useRef(0)  
  
  const handleClick = () => {
    inputRef_1.current.focus()
  }

  const renderCount = useRef(0);
  const [count, setCount] = useState(0);

  renderCount.current += 1;

  const [count_1, setCount_1] = useState(0)
  const previousCount = useRef(0);

  useEffect(() => {
    previousCount.current = count_1
  }, [count_1])


  const handleClearAndFocus = () => {
    CInput.current.value = ''
    CInput.current.focus()
    clickCount.current += 1
    Clicks.current.innerText = `Button clicked: ${clickCount.current} times`
  }

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-center text-xl p-4">🔥 Practice 01</h1>
        <input type="text" ref={inputRef} className="w-xs  border-2 rounded-md border-emerald-400 p-1" placeholder="Auto Focus" />
      </div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-center text-xl p-4">🔥 Practice 02</h1>
        <input type="text" ref={inputRef_1} className="w-xs  border-2 rounded-md border-emerald-400 p-1 " placeholder="On Click Focus" />
        <button className="bg-amber-500 p-3 hover:bg-amber-400 cursor-pointer rounded-md mt-6 text-white" ref={btn} onClick={handleClick}>Click to Focus</button>
      </div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-center text-xl p-4">🔥 Practice 03</h1>
        <h1 className="text-xl mb-4">Component rendered {renderCount.current} times</h1>
        <button
          onClick={() => setCount(count + 1)}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Click to re-render
        </button>
      </div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-center text-xl p-4">🔥 Practice 04</h1>
        <h1 className="text-xl mb-2">Current: {count_1}</h1>
        <h1 className="text-xl mb-4">Previous: {previousCount.current}</h1>
        <button
          onClick={() => setCount_1(count_1 + 1)}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Increment
        </button>
      </div>
      <div className="flex flex-col justify-center items-center">
          <h1 className="text-center text-xl p-4">⭐ Day 04 Challenge</h1>
          <input type="text" className="w-xs  border-2 rounded-md border-purple-500 p-1 " ref={CInput}/>
          <h1 className="text-center" ref={Clicks}>Button clicked: 0 times</h1>
          <button className="bg-cyan-500 p-2 rounded-md text-white m-4 hover:bg-cyan-400" onClick={handleClearAndFocus}>Clear & Focus</button>
      </div>
    </>
  )
}

export default App