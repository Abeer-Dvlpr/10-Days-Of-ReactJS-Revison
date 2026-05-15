import { useState } from 'react'
import CounterButtons from './components/CounterButtons'
import CounterDisplay from './components/CounterDisplay'
import ThemeToggleBtn from './components/ThemeToggleBtn'
import useThemeStore from './store/useThemeStore'
import ReduxCounter from './components/ReduxCounter'
import Navbar from './components/Navbar'
import Profile from './components/Profile'
import Controls from './components/Controls'
function App() {

  const { isDark } = useThemeStore();

  return (
    <>
      <div className={isDark
        ? "bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center gap-6"
        : "min-h-screen flex flex-col items-center justify-center gap-6"
      }>
        <h1 className='text-2xl text-center font-bold p-2 mt-6'>🔥Practice 1,2 — Zustand Counter</h1>
        <CounterDisplay />
        <CounterButtons />
        <h1 className='text-2xl text-center font-bold p-2'>🔥Practice 3 — Theme Store</h1>
        <ThemeToggleBtn />
        <h1 className='text-2xl text-center font-bold p-2'>🔥Practice 4 — Redux Toolkit Counter</h1>
        <ReduxCounter />
        <h1 className='text-2xl text-center font-bold p-2'>🔥Day Challenge</h1>
        <div className=" bg-gray-100">
          <Navbar />
          <div className="container mx-auto p-4">
            <Profile />
            <Controls />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
