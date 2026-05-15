# ⭐ Day 04 — Refs & DOM Control
Welcome to Day 4 of my React journey.
Today I learned how to directly access DOM elements using `useRef`.

Normally React is declarative.
But sometimes we need direct control — like focusing an input, controlling a video, or storing mutable values.

That’s where `useRef` comes in.

---
## ✅ 1. What is useRef?
`useRef` gives us a way to reference a DOM element directly.
#### Basic syntax:
```jsx
const inputRef = useRef(null);
```
#### We attach it like this:
```html
<input ref={inputRef} />
```
#### Now we can access:
```jsx
inputRef.current
```

## ✅ 2. Accessing DOM Elements
#### Example-Focus input on button click:
```jsx
import { useRef } from "react";

function FocusInput() {
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus();
  };

  return (
    <>
      <input ref={inputRef} type="text" />
      <button onClick={handleFocus}>Focus Input</button>
    </>
  );
}

```

When button is clicked --> input gets focused.

## ✅ 3. useRef for Mutable Values (No Re-render)

Important concept 🔥

`useRef` can store values that:
- Persist between renders
- Do not trigger re-render
#### Example:
```jsx
const renderCount = useRef(0);

useEffect(() => {
  renderCount.current += 1;
});
```
This tracks renders without re-rendering the component.
## ✅ 4. Forwarding Refs (Advanced but Important)
Sometimes parent wants access to child DOM element.

React provides `forwardRef`.
#### Example:
```jsx
import { forwardRef } from "react";

const CustomInput = forwardRef((props, ref) => {
  return <input ref={ref} {...props} />;
});
```
Now parent can pass ref to child.
---
<div align="center" style="margin-top: 32px;">
  <a href="../Day 05 — (Reducers,  Performance Hooks)/Day-05.md" style="display:inline-block;background:#1e90ff;color:#ffffff;padding:12px 22px;border-radius:999px;text-decoration:none;font-weight:700;font-size:1rem;">
    Next: Day 05 ->
  </a>
</div>
