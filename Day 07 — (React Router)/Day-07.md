# ⭐ Day 07 — React Router

Welcome to Day 7 of my React journey.
Today I learned how to handle navigation between pages in a React app using React Router.

---
## ✅ 1. What is React Router?

React Router is used to create multi-page navigation in a React app without reloading the page.

👉 It makes your app feel like a real web app.

## ✅ 2. Setup (IMPORTANT)

First install:

```jsx
npm install react-router-dom
```
## ✅ 3. BrowserRouter

Wrap your app:

```jsx
import { BrowserRouter } from "react-router-dom";

<BrowserRouter>
  <App />
</BrowserRouter>
```
👉 This enables routing in your app.

✅ 4. Routes & Route
```jsx
import { Routes, Route } from "react-router-dom";

<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
</Routes>
```
👉 path = URL
👉 element = component

## ✅ 5. Link (Navigation)
```jsx
import { Link } from "react-router-dom";

<Link to="/">Home</Link>
<Link to="/about">About</Link>
```
👉 Works like <a> but without page reload

## ✅ 6. NavLink (Active styling)
```jsx
import { NavLink } from "react-router-dom";

<NavLink to="/" className={({ isActive }) => isActive ? "text-red-500" : ""}>
  Home
</NavLink>
```
👉 Automatically detects active route

## ✅ 7. Dynamic Routes (useParams)
```jsx
<Route path="/user/:id" element={<User />} />
import { useParams } from "react-router-dom";

const { id } = useParams();
```
👉 Useful for dynamic data

## ✅ 8. Nested Routes (Outlet)
```jsx
<Route path="/dashboard" element={<Dashboard />}>
  <Route path="profile" element={<Profile />} />
</Route>
import { Outlet } from "react-router-dom";

<Outlet />
```
👉 Child routes render here
---
<div align="center" style="margin-top: 32px;">
  <a href="../Day 08 — (External State Management)/Day-08.md" style="display:inline-block;background:#1e90ff;color:#ffffff;padding:12px 22px;border-radius:999px;text-decoration:none;font-weight:700;font-size:1rem;">
    Next: Day 08 ->
  </a>
</div>
