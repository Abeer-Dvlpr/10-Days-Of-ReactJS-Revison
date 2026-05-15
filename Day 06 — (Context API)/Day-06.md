# ⭐ Day 06 — Context API

Welcome to Day 6 of my React journey.
Today I learned how to solve the prop drilling problem using the Context API and how to share data globally across components.

---
## ✅ 1. What is Prop Drilling?

Prop drilling is when data is passed through multiple components just to reach a deeply nested component.
```jsx
App → Parent → Child → GrandChild
```
#### 👉 This makes code messy and hard to maintain.

## ✅ 2. What is Context API?

Context API allows you to share data globally without passing props manually at every level.

#### 👉 It acts like a global data store for your components.

## ✅ 3. createContext()

Used to create a context.
```jsx
import { createContext } from "react";

const UserContext = createContext();
```
#### 👉 This creates a container to hold shared data.

## ✅ 4. Provider

Wrap components with Provider to give access to the data.
```jsx
<UserContext.Provider value="Abeer">
  <App />
</UserContext.Provider>
```
#### 👉 value is the data you want to share.

## ✅ 5. useContext()

Used to access data from context.
```jsx
import { useContext } from "react";

const user = useContext(UserContext);
```
#### 👉 Now you can use the shared data anywhere.

## ✅ 6. Why use Context?
- Avoid prop drilling
- Cleaner code
- Easier state sharing
- Useful for themes, auth, user data
---
<div align="center" style="margin-top: 32px;">
  <a href="../Day 07 — (React Router)/Day-07.md" style="display:inline-block;background:#1e90ff;color:#ffffff;padding:12px 22px;border-radius:999px;text-decoration:none;font-weight:700;font-size:1rem;">
    Next: Day 07 ->
  </a>
</div>
