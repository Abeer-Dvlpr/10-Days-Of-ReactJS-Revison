import { render, screen, fireEvent } from "@testing-library/react"
import Todo from "./Todo"

test("input updates when user types", () => {
  render(<Todo />)
  
  const input = screen.getByPlaceholderText("Enter todo...")
  
  fireEvent.change(input, { target: { value: "Buy milk" } })
  
  expect(input.value).toBe("Buy milk")
})

test("button click adds todo to list", () => {
  render(<Todo />)
  
  const input = screen.getByPlaceholderText("Enter todo...")
  const button = screen.getByText("Add")
  
  fireEvent.change(input, { target: { value: "Buy milk" } })
  fireEvent.click(button)
  
  expect(screen.getByText("Buy milk")).toBeInTheDocument()
})

test("todo appears on screen after add", () => {
  render(<Todo />)
  
  const input = screen.getByPlaceholderText("Enter todo...")
  const button = screen.getByText("Add")
  
  fireEvent.change(input, { target: { value: "Read book" } })
  fireEvent.click(button)
  
  const todoItem = screen.getByText("Read book")
  expect(todoItem).toBeInTheDocument()
})