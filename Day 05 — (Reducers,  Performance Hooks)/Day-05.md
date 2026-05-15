# ⭐ Day 05 — Reducers & Performance Hooks
---
Welcome to Day 5 of my React journey.
Today I learned how to manage complex state using useReducer and how to optimize performance using hooks like useMemo, useCallback, and React.memo.

## ✅ 1. useReducer Hook

useReducer is used for managing complex state logic in React.
It is an alternative to useState when multiple actions are involved.

#### Syntax:
```jsx
const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;

    case "DECREMENT":
      return state - 1;

    case "RESET":
      return 0;

    default:
      return state;
  }
};

const [count, dispatch] = useReducer(reducer, 0);
```
- 👉 dispatch is used to send actions

- 👉 reducer handles state logic

## ✅ 2. Why useReducer?
- Better for complex state logic
- Replaces multiple useState hooks
- Improves code readability

## ✅ 3. useCallback Hook

useCallback is used to memoize functions so they are not recreated on every render.
```jsx
const handleClick = useCallback(() => {
  console.log("Button clicked");
}, []);
```
👉 Prevents unnecessary function recreation

## ✅ 4. useMemo Hook

useMemo is used to memoize expensive calculations.
```jsx
const result = useMemo(() => {
  return count * 2;
}, [count]);
```
👉 Only recalculates when dependency changes

## ✅ 5. React.memo

React.memo prevents re-rendering of a component if props do not change.
```jsx
const CounterDisplay = React.memo(function CounterDisplay({ value }) {
  return <h1>{value}</h1>;
});
```
---
<div align="center" style="margin-top: 32px;">
  <a href="../Day 06 — (Context API)/Day-06.md" style="display:inline-block;background:#1e90ff;color:#ffffff;padding:12px 22px;border-radius:999px;text-decoration:none;font-weight:700;font-size:1rem;">
    Next: Day 06 ->
  </a>
</div>
