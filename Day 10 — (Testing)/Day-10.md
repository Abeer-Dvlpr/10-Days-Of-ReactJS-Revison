# ⭐ Day 10 — Testing in React

Welcome to Day 10 🎉

Today you’ll learn the basics of testing React applications.

---

Professional developers don’t just build apps — they also test them to make sure everything works correctly.


#### In this day you’ll learn:

- What is testing?
- Jest basics
- React Testing Library
- Rendering components
- Finding elements
- Firing events
- Checking UI updates
## ✅ 1. What is Testing?

Testing means checking if your app behaves correctly.

#### Example:

- Button click works ✔️
- Input updates ✔️
- Counter increases ✔️
- Component renders correctly ✔️

#### Without testing:

 Small changes can accidentally break features 😭

## ✅ 2. What is Jest?

Jest is a JavaScript testing framework.

It helps:

- Run tests
- Compare expected results
- Detect bugs

#### Example idea:
```jsx
expect(2 + 2).toBe(4)
```
#### Meaning:

I expect 2 + 2 to equal 4


## ✅ 3. What is React Testing Library?

React Testing Library helps test React components like a real user.

Instead of testing internal code:
we test:

- buttons
- text
- inputs
- clicks
- UI behavior
## ✅ 4. Basic Testing Structure

#### Example:
```jsx
test("button exists", () => {
  // code
})
```
OR:
```jsx
it("button exists", () => {
  // code
})
```
Both work similarly.

## ✅ 5. Rendering a Component
```jsx
render(<App />)
```
This renders component inside testing environment.

## ✅ 6. Finding Elements
Find text
```jsx
screen.getByText("Login")
```
Find button
```jsx
screen.getByRole("button")
```
Find input
```jsx
screen.getByPlaceholderText("Enter name")
```
## ✅ 7. Fire Events

Simulate user actions.

#### Example:
```jsx
fireEvent.click(button)
```
#### Example:
```jsx
fireEvent.change(input, {
  target: { value: "Abeer" }
})
```
## ✅ 8. Checking Results

#### Example:
```jsx
expect(text).toBeInTheDocument()
```
OR:
```jsx
expect(count).toHaveTextContent("1")
```
---
<div align="center" style="margin-top: 32px;">
  <a href="../README.md" style="display:inline-block;background:#28a745;color:#ffffff;padding:12px 22px;border-radius:999px;text-decoration:none;font-weight:700;font-size:1rem;">
    Back to summary
  </a>
  <span style="margin:0 12px;color:#666;">|</span>
  <a href="../Day 01 — (The Fundamentals)/Day-01.md" style="display:inline-block;background:#6c757d;color:#ffffff;padding:12px 22px;border-radius:999px;text-decoration:none;font-weight:700;font-size:1rem; >
    Restart at Day 01
  </a>
</div>
