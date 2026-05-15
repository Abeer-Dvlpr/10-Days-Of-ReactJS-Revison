import { render, screen ,fireEvent } from "@testing-library/react";
import InputBox from "./InputBox";
import { expect } from "vitest";

test('If you see this inputbox works', () => { 
    render(<InputBox/>)
    const input = screen.getByPlaceholderText("Enter text")

    fireEvent.change(input, {
        target: {value: "Abeer"}
    })
    expect(screen.getByText("Abeer")).toBeInTheDocument()
 })