// app.test.js
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import '@testing-library/jest-dom'
import App from '../App'
import Navigation from './Navigation'
import {BrowserRouter, MemoryRouter} from 'react-router-dom'

describe("<Navigation />", () => {

  it("renders without crashing", () => {
    const div = document.createElement("div")
    render(
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>,
      div
    )
  })

  it('has clickable links', async () => {
    render(<App />)
    const user = userEvent.setup()

    // verify page content for default route
    expect(screen.getByText(/Welcome to the Tooth Tales from the Fairies Perspective!/i)).toBeInTheDocument()

    // verify page content for expected route after navigating
    await user.click(screen.getByText(/See the Tooth Collectors/i))
    expect(screen.getByText(/Greetings from the Tooth Collectors/i)).toBeInTheDocument()

    await user.click(screen.getByText(/Add a Tooth Collector/i))
    expect(screen.getByText(/This is the NewTooth Page/i)).toBeInTheDocument()

    await user.click(screen.getByText(/about/i))
    expect(screen.getByText(/This is the AboutToothTale Page/i)).toBeInTheDocument()

    await user.click(screen.getByText(/home/i))
    expect(screen.getByText(/This is the Home Page/i)).toBeInTheDocument()
  })

})