import { useContext } from "react";
import Card from "./components/useCard";
import useCounter from "./components/useCounter"
import useWindowWidth from "./components/useWindowWidth";
import Users from "./components/Users";
import UserDashboard from "./components/UserDashboard";

function App() {
  const { count, increment, decrement, reset } = useCounter();
  const windowWidth = useWindowWidth();
  return (
    <>
    <h1 className="p-4 text-center text-2xl bg-green-400 text-white">🔥 Practice 1</h1>
      <h1 className=" p-4 text-center  text-xl">{count}</h1>
      <div className="flex gap-4 justify-center items-center mt-5">
      <button className="bg-green-400 p-2 rounded-lg text-white cursor-pointer" onClick={increment}>INC</button>
      <button className="bg-red-400 p-2 rounded-lg text-white cursor-pointer" onClick={decrement}>DEC</button>
      <button className="bg-blue-400 p-2 rounded-lg text-white cursor-pointer" onClick={reset}>RES</button>
      </div>
          <h1 className="p-4 text-center text-2xl bg-green-400 text-white mt-4">🔥 Practice 2</h1>
      <h1 className="text-center text-xl mt-3">Window Width Montior</h1>
      {windowWidth < 768 &&  <p className="text-center text-xl">Mobile view: {windowWidth}</p>}
      {windowWidth >= 768 &&  <p className="text-center text-xl">Tablet view: {windowWidth}</p>}
      {windowWidth >=1024 &&  <p className="text-center text-xl">Desktop view: {windowWidth}</p>}
      <h1 className="p-4 text-center text-2xl bg-green-400 text-white mt-4">🔥 Practice 3</h1>
      <Card>
        <Card.Title />
        <Card.Body />
      </Card>
      <h1 className="p-4 text-center text-2xl bg-green-400 text-white mt-4">🔥 Practice 4</h1>
    <Users/>
    <h1 className="p-4 text-center text-2xl bg-green-400 text-white mt-4">🔥 Day-9 Challenge</h1>
    <UserDashboard/>
    </>
  )
}

export default App
