import { useState } from "react"

function InputBox() {
  const [text, setText] = useState("")

  return (
    <>
      <input
        placeholder="Enter text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <p>{text}</p>
    </>
  )
}

export default InputBox