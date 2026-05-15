# ⭐ Day 01 — The Fundamentals
Today we build foundation.

 No magic. Just understanding how React thinks.

---
## ✅ 1. What is React?
React is a JavaScript library for building user interfaces.

It is:
- Component-based
- Declarative
- Reusable

Instead of manually changing the DOM like vanilla JS, React updates UI automatically when state changes.

## ✅ 2. Components?
A component is a reusable piece of UI.

In modren React we use Functional Components.

#### Example:
```jsx
function Welcome() {
  return <h1>Hello Abeer</h1>;
}
```
This function returns JSX (UI).
Think of component = small UI machine.

## ✅ 3. JSX Rules?
JSX looks like HTML but it is actually JavaScript.

#### Important rules:
✔️ Must return a single parent element

✔️ Use className instead of class

✔️ Close all tags

✔️ Use {} to write JavaScript inside JSX

#### Example:
```jsx
function App() {
  const name = "Abeer";
  return (
    <div>
      <h1>Hello {name}</h1>
    </div>
  );
}
```
## ✅ 4. Props
Props = data passed from parent to child component.
#### Example:
```jsx
function User(porps){
    return <h2>Hello {props.name}</h2>;
}
function App(){
    return <User name='Abeer'/>;
}
```
Props are read-only.

## ✅ 5. Props Children?
You can pass content inside component tags.
#### Example:
```jsx
function Card({ children }){
    return <div>{children}</div>
}

function App(){
    return(
        <Card>
        <h1>This is inside card</h1>
        </Card>
    );
}
```

`children` represents whatever is inside the component.

## ✅ 6. Rendering Lists
When rendering arrays, we use `.map()`.

Important: Every item must have a key.
#### Example:
```jsx
function App() {
  const users = ["Abeer", "Tony", "Steve"];

  return (
    <ul>
      {users.map((user, index) => (
        <li key={index}>{user}</li>
      ))}
    </ul>
  );
}
```
`key` helps React track elements efficiently.
---
<div align="center" style="margin-top: 32px;">
  <a href="../Day 02 — (State, Events Conditional Rendering)/Day-02.md" style="display:inline-block;background:#1e90ff;color:#ffffff;padding:12px 22px;border-radius:999px;text-decoration:none;font-weight:700;font-size:1rem;">
    Next: Day 02 ->
  </a>
</div>
