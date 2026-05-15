import { useState } from "react"

function Todo() {
  const [input, setInput] = useState("")
  const [todos, setTodos] = useState([])

  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, input])
      setInput("")
    }
  }

  return (
    <div>
      <h1>Todo App</h1>
      
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter todo..."
      />
      
      <button onClick={addTodo}>
        Add
      </button>
      
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  )
}

export default Todo