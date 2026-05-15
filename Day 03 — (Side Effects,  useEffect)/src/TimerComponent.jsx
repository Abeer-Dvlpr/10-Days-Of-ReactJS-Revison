import { useState, useEffect } from "react";


export default function Timer({ onStop }) {
  const [seconds, setSeconds] = useState(0);
useEffect(() => {
  const interval = setInterval(() => {
    setSeconds(prev => prev + 1);
  }, 1000);

  return () => clearInterval(interval);
}, []);

useEffect(() => {
  if (seconds === 10) {
    onStop();
  }
}, [seconds]);

  return (
    <div>
      <h2>Timer Running</h2>
      {seconds === 0 ? null : <p>Seconds: {seconds}</p>}
    </div>
  );
}

