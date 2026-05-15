import { render, screen } from "@testing-library/react"
import LoginStatus from "./LoginStatus"

test("shows login message", () => {
  render(<LoginStatus isLoggedIn={false} />)

  expect(screen.getByText("Please Login")).toBeInTheDocument()
})