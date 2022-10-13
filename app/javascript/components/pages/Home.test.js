import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react"

import Home from "./Home"

describe("<Home />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div")
    render(<Home />, div)
    const homeHeading = screen.getByRole('heading')
    screen.debug(homeHeading)
    expect(homeHeading).toHaveTextContent('This is the Home Page')
  })
})