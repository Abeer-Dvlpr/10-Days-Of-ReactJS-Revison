import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(true);
  const [text, setText] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [likes, setLikes] = useState(0);
  const [isFollowing, setIsFollowing] = useState(false);

  return (
    <div className="flex flex-col justify-center items-center gap-4 mt-4">
      <h1 className="text-xl text-center p-4">🔥 Practice 1</h1>
      <div className="flex gap-4 justify-center items-center">
        <h1 className="flex justify-center bg-orange-400 p-1 rounded-2xl w-10">
          {count}
        </h1>
        <button
          onClick={() => setCount(count + 1)}
          className="bg-green-300 rounded-md p-1"
        >
          Increase
        </button>
        <button
          onClick={() => setCount(count - 1)}
          className="bg-amber-300 rounded-md p-1"
        >
          Decrease
        </button>
        <button
          onClick={() => setCount(0)}
          className="bg-red-400 rounded-md p-1"
        >
          Reset
        </button>
      </div>

      <h1 className="text-xl text-center p-4">🔥 Practice 2</h1>
      <button
        onClick={() => setShow(!show)}
        className="bg-blue-300 rounded-md p-1"
      >
        {!show ? "Show" : "Hide"}
      </button>
      {show && <h1 className="text-xl text-center p-4">This is a toggleable text.</h1>}

      <h1 className="text-xl text-center p-4">🔥 Practice 3</h1>
      <input
        className="p-2 border rounded-md"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <h1 className="text-xl text-center p-4">You typed: {text}</h1>

      <h1 className="text-xl text-center p-4">🔥 Practice 4</h1>
      <h1 className="text-xl text-center p-4">
        {isLoggedIn ? "Welcome Abeer!" : "Please Login"}
      </h1>
      <button
        className="bg-purple-600 rounded-md p-2 text-white"
        onClick={() => setIsLoggedIn(true)}
      >
        Click To Login
      </button>

      <h1 className="text-2xl text-center p-4">⭐ Day 02 Challenge</h1>

      <div className=" bg-white shadow-md rounded-lg p-6 border border-gray-200 w-1/2 flex flex-col items-center ">
        <div className="mb-3">
          <span className="bg-yellow-400 text-white text-md font-bold px-3 py-1 rounded-full">
            {likes > 10 ? "Popular" : "New"}
          </span>
        </div>

        <div className="text-2xl font-semibold text-gray-800 mb-2">
          John Doe
        </div>

        <div className="text-gray-600 mb-4">Likes: {likes}</div>

        <div className="flex space-x-3">
          <button
            onClick={() => setLikes(likes + 1)}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          >
            Like
          </button>
          <button
            onClick={() => setIsFollowing(!isFollowing)}
            className={`px-4 py-2 rounded transition ${
              isFollowing
                ? "bg-red-500 hover:bg-red-600"
                : "bg-green-500 hover:bg-green-600"
            } text-white text-xl`}
          >
            {isFollowing ? "Unfollow" : "Follow"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;