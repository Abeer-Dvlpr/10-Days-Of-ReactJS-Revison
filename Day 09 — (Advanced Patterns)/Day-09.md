# ⭐ Day 09 — Advanced Patterns

Welcome to Day 09 of the React journey 🚀
Today focuses on reusable logic, scalable structure, and smarter React patterns used in real-world applications.

## ✅ 1. Custom Hooks

A Custom Hook is a reusable JavaScript function that contains React logic.

If the same logic is repeated in multiple components, move it into a custom hook.

#### Example:
```jsx
import { useState } from "react";

function useCounter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return { count, increment, decrement, reset };
}

export default useCounter;
```
#### Usage:
```jsx
const { count, increment } = useCounter();
```
## ✅ 2. Why Use Custom Hooks?

Without custom hooks, logic gets repeated:
```jsx
const [count, setCount] = useState(0);
```
With custom hooks:

```jsx
const { count, increment } = useCounter();
```
Benefits:

Cleaner code
Reusable logic
Easier maintenance
## ✅ 3. Compound Components

Compound Components allow multiple components to work together under one parent component.

#### Example:
```jsx
<Card>
  <Card.Title />
  <Card.Body />
</Card>
```
#### Common use cases:

Modals
Tabs
Accordions
Dropdowns
## ✅ 4. React Query (TanStack Query)

React Query simplifies data fetching.

#### It automatically handles:

Loading states
Errors
Caching
Refetching
## ✅ 5. Install React Query
```jsx
npm install @tanstack/react-query
```
## ✅ 6. Basic React Query Example

```jsx
const { data, isLoading, error } = useQuery({
  queryKey: ["users"],
  queryFn: fetchUsers
});
```
## ✅ 7. Why React Query?

#### Without React Query:
```jsx
useEffect()
loading state
error state
cleanup
fetch logic
```
#### With React Query:
```jsx
useQuery()
```
Much cleaner and easier.
---
<div align="center" style="margin-top: 32px;">
  <a href="../Day 10 — (Testing)/Day-10.md" style="display:inline-block;background:#1e90ff;color:#ffffff;padding:12px 22px;border-radius:999px;text-decoration:none;font-weight:700;font-size:1rem;">
    Next: Day 10 ->
  </a>
</div>
