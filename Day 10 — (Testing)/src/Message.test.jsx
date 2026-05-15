import { render, screen } from "@testing-library/react"
import Message from "./Message"

test("renders message", () => {
  render(<Message />)
  const text = screen.getByText("Hello React Testing")
  expect(text).toBeInTheDocument()
})