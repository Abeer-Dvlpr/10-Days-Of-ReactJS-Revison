# ⭐ Day 08 — External State Management

Welcome to Day 8 of my React journey.
Today I learned how to manage global state using modern state management libraries like Zustand and Redux Toolkit.

## 🧠 Why State Management?

Earlier we used:

```jsx
useState
Context API
```
But in large apps:

state becomes messy
prop drilling increases
multiple components need same data

👉 State management solves this problem.

## ✅ 1. What is Zustand?

Zustand is a lightweight global state management library.

👉 Easy syntax
👉 Less boilerplate
👉 Beginner friendly

## ✅ 2. Install Zustand
```jsx
npm install zustand
```
## ✅ 3. Create Store
```jsx
store/useCounterStore.js
import { create } from "zustand";

const useCounterStore = create((set) => ({
  count: 0,

  increment: () =>
    set((state) => ({
      count: state.count + 1
    })),

  decrement: () =>
    set((state) => ({
      count: state.count - 1
    }))
}));

export default useCounterStore;
```
## ✅ 4. Use Store in Component
```jsx
import useCounterStore from "./store/useCounterStore";

function Counter() {
  const { count, increment, decrement } = useCounterStore();

  return (
    <>
      <h1>{count}</h1>

      <button onClick={increment}>
        +
      </button>

      <button onClick={decrement}>
        -
      </button>
    </>
  );
}
```
🧠 Important Concept

No Provider needed 😏

Unlike Context API:

```jsx
<UserProvider>
```
👉 Zustand directly works globally.

## ✅ 5. Redux Toolkit (Basic Intro)

Redux Toolkit is the modern version of Redux.

👉 Used in large-scale apps.

## ✅ 6. Install Redux Toolkit
```jsx
npm install @reduxjs/toolkit react-redux
```
## ✅ 7. Create Slice
```jsx
features/counterSlice.js
import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",

  initialState: {
    value: 0
  },

  reducers: {
    increment: (state) => {
      state.value += 1;
    },

    decrement: (state) => {
      state.value -= 1;
    }
  }
});

export const { increment, decrement } =
  counterSlice.actions;

export default counterSlice.reducer;
```
## ✅ 8. Configure Store
```jsx
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer
  }
});
```
## ✅ 9. Provider Setup
```jsx
import { Provider } from "react-redux";

<Provider store={store}>
  <App />
</Provider>
```
## ✅ 10. useSelector & useDispatch
```jsx
const count = useSelector(
  (state) => state.counter.value
);

const dispatch = useDispatch();
```
---
<div align="center" style="margin-top: 32px;">
  <a href="../Day 09 — (Advanced Patterns)/Day-09.md" style="display:inline-block;background:#1e90ff;color:#ffffff;padding:12px 22px;border-radius:999px;text-decoration:none;font-weight:700;font-size:1rem;">
    Next: Day 09 ->
  </a>
</div>
