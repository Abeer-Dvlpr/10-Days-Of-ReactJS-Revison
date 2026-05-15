# ⭐ Day 03 — Side Effects & useEffect
Welcome to Day 3 of my React journey.
Today I learned how React handles side effects using the `useEffect` hook.
Side effects are operations that happen after rendering, like fetching data, setting timers, or interacting with the DOM.
## ✅ 1. What is useEffect?
`useEffect` is a React hook used to perform side effects in functional components.

### Basic syntax:
```jsx
useEffect(() => {
  // side effect logic
});
```
If no dependency array is provided, it runs after every render.

## ✅ 2. Dependency Array

The dependency array controls when the effect runs.

### 🔹 Run only once (on mount)
```jsx
useEffect(() => {
  console.log("Component Mounted");
}, []);
```
Runs only the first time the component renders.

### 🔹 Run when a value changes
```jsx
useEffect(() => {
  console.log("Count changed");
}, [count]);
```
Runs whenever count updates.

### 🔹 Run on every render
```jsx
useEffect(() => {
  console.log("Runs every render");
});
```
No dependency array means it runs after every render.

## ✅ 3. Cleanup Function (Unmount Phase)

A cleanup function runs before the component unmounts or before the effect runs again.

Example with interval:
```jsx
useEffect(() => {
  const timer = setInterval(() => {
    console.log("Tick...");
  }, 1000);

  return () => {
    clearInterval(timer);
    console.log("Cleanup done");
  };
}, []);
```
This prevents memory leaks.

## ✅ 4. Data Fetching Example
```jsx
useEffect(() => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => console.log(data));
}, []);
```
This fetches data when the component mounts.
---
<div align="center" style="margin-top: 32px;">
  <a href="../Day 04 — (Refs , DOM Control)/Day-04.md" style="display:inline-block;background:#1e90ff;color:#ffffff;padding:12px 22px;border-radius:999px;text-decoration:none;font-weight:700;font-size:1rem;">
    Next: Day 04 ->
  </a>
</div>
