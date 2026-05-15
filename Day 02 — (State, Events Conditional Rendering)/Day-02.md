# ⭐ Day 02 — State, Events & Conditional Rendering
Today we move from static UI to interactive UI.

---
## ✅ 1. What is State?
State is data that can change over time inside a component.
When state changes, React re-renders the component automatically.

We use the useState hook to create state.

#### Example:
```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </>
  );
}
```
#### here:

- `count`  --> Current state value

- `SetCount`   --> function to update state

- `0` --> initial value

When `setCount` runs --> component re-renders.

## ✅ 2. Event Handling in React

Events in React are written in camelCase.

#### Instead of:
```jsx
onclick=""
```
#### We use:
```jsx
onClick={}
```
### Example:
```jsx
<button onClick={() => alert("Clicked!")}>
  Click Me
</button>
```
#### Common events:

- nClick

- onChange

- onSubmit

- onMouseEnter

## ✅ 3. Controlled Components (Forms)

In React, inputs are controlled by state.

### Example:
```jsx
function InputExample() {
  const [text, setText] = useState("");

  return (
    <>
      <input 
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p>You typed: {text}</p>
    </>
  );
}
```
The input value always comes from state.

## ✅ 4. Conditional Rendering

We can render UI conditionally using:

### 🔹 if statement
```jsx
if (isLoggedIn) {
  return <h1>Welcome Back</h1>;
}
```
### 🔹 Ternary operator
```jsx
{isLoggedIn ? <p>Logged In</p> : <p>Please Login</p>}
```
### 🔹 && operator
```
{isAdmin && <p>Admin Panel</p>}
```
If condition is true → show component
If false → show nothing
---
<div align="center" style="margin-top: 32px;">
  <a href="../Day 03 — (Side Effects,  useEffect)/Day-03.md" style="display:inline-block;background:#1e90ff;color:#ffffff;padding:12px 22px;border-radius:999px;text-decoration:none;font-weight:700;font-size:1rem;">
    Next: Day 03 ->
  </a>
</div>
