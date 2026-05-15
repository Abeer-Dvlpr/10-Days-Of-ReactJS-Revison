import { useState, useEffect } from "react";
import Timer from "./TimerComponent";

function App() {
  useEffect(() => {
    console.log("Component Mounted Successfully")
  }, [])
  const [count, Countset] = useState(0)
  useEffect(() => {
    console.log(`Count updated: ${count}`)
  }, [count])
  useEffect(() => {
    const intervalid = setInterval(() => {
      console.log("Tick");
    }, 1000);

    return () => {
      clearInterval(intervalid);
      console.log("Timer stopped");
    }
  }, []);
  useEffect(() => {
    const handleResize = () => {
      console.log("Window resized");
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    }
  }, [])
  const [showTimer, setShowTimer] = useState(false);
  const toggleTimer = () => setShowTimer((prev) => !prev);
  return (
    <>
      <h1 className="text-center text-xl mt-6 mb-4">Practice 01</h1>
      <div className="flex flex-col justify-center">
        <p className="text-center">Count: {count}</p>
        <div className="flex justify-center mt-4 gap-4">
          <button className="bg-green-400 p-2 rounded-md text-white" onClick={() => Countset(count + 1)}>Increment</button>
          <button className="bg-red-400 p-2 rounded-md text-white" onClick={() => Countset(count - 1)}>Decrement</button>
        </div>
      </div>
      <h1 className="text-center text-xl mt-6 mb-4">Practice 03</h1>
      <p className="text-center">Auto Timer Running..</p>
      <h1 className="text-center text-xl mt-6 mb-4">Practice 04</h1>
      <h1 className="text-center">Resize the window and check the console!</h1>
      <h1 className="text-center text-2xl mt-6 mb-4">⭐ Day 03 Challenge</h1>
    <div className="flex justify-center mt-4 gap-4">
      <button onClick={toggleTimer} className="bg-green-400 p-2 rounded-md text-white">
        {showTimer ? "Hide Timer" : "Show Timer"}
      </button>
      {showTimer && <Timer onStop={() => setShowTimer(false)} />}
    </div>



    </>
  )
}

export default App
