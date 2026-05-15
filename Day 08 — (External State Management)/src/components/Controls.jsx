import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login, logout, increaseAge, changeName, reset } from '../features/UserSlice'

const Controls = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  return (
    <div className="p-4 flex gap-2">
      {!isLoggedIn ? (
        <button
          onClick={() => dispatch(login())}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Login
        </button>
      ) : (
        <>
          <button
            onClick={() => dispatch(logout())}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Logout
          </button>
          <button
            onClick={() => dispatch(increaseAge())}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Increase Age
          </button>
          <button
            onClick={() => dispatch(changeName(prompt('Enter new name:')))}
            className="bg-yellow-500 text-white px-4 py-2 rounded"
          >
            Change Name
          </button>
          <button
            onClick={() => dispatch(reset())}
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Reset
          </button>
        </>
      )}
    </div>
  )
}

export default Controls