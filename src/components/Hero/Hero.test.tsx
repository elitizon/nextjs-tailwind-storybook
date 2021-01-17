import React from "react"
import { render, screen } from "@testing-library/react"
import { Hero } from "."

test("renders title", () => {
  render(<Hero title="title1"/>)
  const titleElement = screen.getByText(/title1/i)
  expect(titleElement).toBeInTheDocument()
})
