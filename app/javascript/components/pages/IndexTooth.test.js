import { fireEvent, render, screen } from "@testing-library/react"
import '@testing-library/jest-dom'
import {BrowserRouter} from 'react-router-dom'
import IndexTooth from "./IndexTooth"
import mockCollectors from "../mockCollector"

describe("<IndexTooth />", () => {
  it("renders without crashing", () => {
    render(
      <BrowserRouter>
        <IndexTooth collectors={mockCollectors} />
      </BrowserRouter>
    )
    const indexHeading = screen.getByRole('heading')
    // screen.debug(indexHeading)
    expect(indexHeading).toHaveTextContent('Greetings from the Tooth Collectors')
  })

  it("renders collector cards", () => {
    render(
      <BrowserRouter>
        <IndexTooth collectors={mockCollectors} />
      </BrowserRouter>
    )
    mockCollectors.forEach((collector) => {
      const collectorName = screen.getByText(collector.name)
      // screen.debug(collectorName)
      expect(collectorName).toBeInTheDocument()
    })
  })

  it("renders collector image", async () => {
    render(
      <BrowserRouter>
        <IndexTooth collectors={mockCollectors} />
      </BrowserRouter>
    )
    mockCollectors.forEach((collector) => {
      const collectorImage = screen.getAllByRole("img")
      expect(collectorImage.length).toBeGreaterThan(1)

      // screen.debug(collectorImage.all)
      expect(collectorImage[0]).toHaveAttribute('src')

      // check attributes of image
      const image = screen.getByAltText("profile of a Tooth Collector Caitlyn Cavity");
      fireEvent.load(image);
      expect(image.src).toBe("http://localhost/assets/Caitlyn.png")
    })
  })
})