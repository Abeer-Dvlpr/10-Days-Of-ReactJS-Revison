import { render, screen ,fireEvent } from "@testing-library/react";
import Counter from "./Counter";
import { expect } from "vitest";

test('increment counter', () => { 
    render(<Counter/>)
    const btn = screen.getByText("Increment")
    fireEvent.click(btn)
    expect(screen.getByText("Count: 1")).toBeInTheDocument
 })