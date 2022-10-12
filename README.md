## Setup
<!-- create rails app -->
- $ rails new <app-name> -d postgresql -T
- $ cd <app-name>
- $ rails db:create
- $ rails s

<!-- Open a new tab -->
- $ <command + T> 

<!-- handles the process of compiling JavaScript -->
- $ bundle add webpacker
- $ bundle add react-rails
- $ rails webpacker:install\n
- $ rails webpacker:install:react
- $ yarn add @babel/preset-react
- $ yarn add @rails/activestorage
- $ yarn add @rails/ujs

<!-- generate the appropriate files and folders to handle React components -->
- $ rails generate react:install
- $ rails generate react:component App
- $ code .

<!-- boilerplate code for functional component in app/javascript/components/App.js-->
```javascript
import React from "react"

const App = () => {
  return (
    <>
      <h1>Hello World, I am the App.js!</h1>
    </>
  )
}

export default App
```

<!-- generate a controller so that we can route the React component App.js to be rendered in a Rails view -->
- $ rails generate controller Home index

<!--  call the React component in erb tags so App.js can be rendered in the browser through the Rails view app/views/home/index.html.erb-->
```ruby
<%= react_component 'App' %>
```
<!-- direct our Rails app to let webpacker handle the compiling of JavaScript  app/views/layouts/application.html.erb-->
```ruby
  # Find this line:
  <%= javascript_importmap_tags %>

  # Replace it with this:
  <%= javascript_pack_tag 'application', 'data-turbolinks-track': 'reload' %>
```

<!-- direct the Rails app to serve the React App.js component as the landing page   config/routes.rb-->
```ruby
  root 'home#index'
```

 <!-- Add Reactstrap and modify the Rails stylesheet with an .scss extension  -->
- $ bundle add bootstrap
- $ mv app/assets/stylesheets/application.css app/assets/stylesheets/application.scss
- $ yarn add reactstrap
<!-- Add an import to app/assets/stylesheets/application.scss -->
```css
@import "bootstrap";
```

<!-- stop/restart server  -->
- $ < control + c > rails s

<!-- Push changes to remote gitHub repo -->
- $ git remote add origin <url of git repo>
- $ git add .
- $ gcmsg "initial commit"
- $ git push origin main

<!-- checkout new branch to maintain integrity of code on main branch -->
- $ gco -b <new-branch>

- create three directories in app/javascript/components: assets, components, and pages

- create files for the appropriate directories
    - pages/FileName.js
    - components/Navigation.js

<!-- to have multiple pages we need to add the React router -->
- $ yarn add react-router-dom

<!--  import the appropriate components and pages on app/javascript/components/App.js  -->
```javascript
// routing components from react-router-dom
import { BrowserRouter, Routes, Route } from "react-router-dom"
// functional components from files in components and pages
import Navigation from "./components/Navigation"
import FileName from "./pages/FileName"

// Add the routes to allow the url to determine which component will be visible to the user
return (
  <BrowserRouter>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/routename" element={<FileName />} />
    </Routes>
  </BrowserRouter>
)
```

<!-- The Rails Router will send all HTML requests to the React app, and everything else (JSON) will be handled normally by the Rails API.  In config/routes.rb-->
```ruby
get '*path', to: 'home#index', constraints: ->(request){ request.format.html? }
```

<!-- use Reactstrap and React router to create navigation in our app -->
```javascript
import React from "react"
import { Nav, NavItem } from "reactstrap"
import { NavLink } from "react-router-dom"

const Navigation = () => {
  return (
    <Nav>
      <NavItem>
        <NavLink to="/" className="nav-link">
          Home
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="/routename" className="nav-link">
          File Name
        </NavLink>
      </NavItem>
    </Nav>
  )
}

export default Navigation
```

<!-- shift the html content away from the left-hand side of the page by using Bootstrap’s container-fluid class  https://activerailsbook.com/sample/chapter-6/#_installing_bootstrap  https://getbootstrap.com/docs/4.5/layout/overview/ -->
```ruby
<body>
  <div class="container-fluid">
    <% flash.each do |key, message| %>
      <div><%= message %></div>
    <% end %>

    <%= yield %>
  </div>
</body>
```

<!-- Add mock data file in app/javascript/components -->
```javascript 
const collectors = [
  {
    id: 1,
    name: "Candace Cavity",
    tenure: 5,
    power: "stopping gums from bleeding",
    image:
      "https://www.google.com/imgres?imgurl=https%3A%2F%2Flive.staticflickr.com%2F55%2F179845929_b9c90a816a_b.jpg&imgrefurl=https%3A%2F%2Fwww.flickr.com%2Fphotos%2Fkaptainkobold%2F179845929&tbnid=y5PP7OuA2601UM&vet=12ahUKEwim1b-Htdf6AhXammoFHYhtDtAQMygNegUIARDzAQ..i&docid=29flFhnkcfZX0M&w=1024&h=768&q=tooth%20fairy&hl=en&ved=2ahUKEwim1b-Htdf6AhXammoFHYhtDtAQMygNegUIARDzAQ"
  },
  {
    id: 2,
    name: "Monty Molar",
    tenure: 2,
    power: "pranking the departed tooth owners by changing the color of their mouth wash",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw59oePCYfNlp_OLJ2LUCRuH-ld61OLVxyGQ&usqp=CAU"
  },
  {
    id: 3,
    name: "Geneva Gum",
    tenure: 4,
    power: "doubling the investment left by parents",
    image:
      "https://freesvg.org/img/ComicCharacter101.png"
  },
  {
    id: 4,
    name: "Steven Sparkle",
    tenure: 1,
    power: "making plaque disappear",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAR4MYVxWEY6iUfE01megKnc69P9qByz-F74kgELbEphOEEVEOMNPScg7Ox4nADn8t3_k&usqp=CAU"
  },
  {
    id: 5,
    name: "Geneva Gum",
    tenure: 4,
    power: "doubling the investment left by parents",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX1Co76QOWz6TTEPrK7eovu1yx8Fcud9wYCQ&usqp=CAU"
  }
]
export default collectors

// The mock data can be set into state and passed around our application through App.js
import React, { useState } from "react"
import mockCollectors from "./mockCollector"

const App = () => {
  const [collectors, setCollectors] = useState(mockCollectors)

  console.log(collectors)

// Add index, show, edit, new, and not found files to pages directory and imports/routes to App.js
      <Route path="/indextooth" element={<IndexTooth />} />
      <Route path="/showtooth" element={<ShowTooth />} />
      <Route path="*" element={<NoTeeth />} />

```

<!-- add react-testing library dependencies -->
- $ yarn add --dev @testing-library/dom
- $ yarn add --dev @testing-library/react
- https://github.com/testing-library/jest-dom
- $ bundle install

<!-- Create a static test with FileName and extension .test.js  https://testing-library.com/docs/react-testing-library/example-intro  https://github.com/testing-library/jest-dom   -->
```javascript
// Home
import { render, screen } from "@testing-library/react"
import '@testing-library/jest-dom'
import Home from "./Home"

describe("<Home />", () => {
  it("renders without crashing", () => {})
    const div = document.createElement("div")
    render(<Home />, div)
    expect(screen.getByRole('heading')).toHaveTextContent('This is the Home Page')
})

// Navigation
// include routing components from react-router-dom
// access userEvent from React Testing Library that will simulation browser interactions
// https://testing-library.com/docs/example-react-router/
// use await to allow link to follow the click action

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

  it('full app rendering/navigating', async () => {
    render(<App />)
    const user = userEvent.setup()

    // verify page content for default route
    expect(screen.getByText(/Welcome to the Tooth Tales from the Fairies Perspective!/i)).toBeInTheDocument()

    // verify page content for expected route after navigating
    await user.click(screen.getByText(/See the Tooth Collectors/i))
    expect(screen.getByText(/Greetings from the Tooth Collectors/i)).toBeInTheDocument()
  })

  it("has clickable links", () => {
    render(
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>
    )
    userEvent.click(screen.getByText("See the Tooth Collectors"))
    expect(screen.getByText("Greetings from the Tooth Collectors")).toBeInTheDocument()
  })
})

```

## Troubleshooting
```bash
# Error: white screen and the following error messages
fromRequireContextWithGlobalFallback.js:18 Error: Cannot find module
ReferenceError: App is not 
# Correction: Ensure path is correct for imports

# Error: component call not defined
App.js:23 Uncaught ReferenceError: IndexTooth is not defined
# Correction: Ensure there is an import for the component

# Error with react-strips looking for src folder $ yarn test
# https://stackoverflow.com/questions/48395804/where-is-create-react-app-webpack-config-and-files
# Correction: change `src` to `app` in node_modules/react-scripts/scripts/utils/createJestConfig.js

# Error not router component
    useLocation() may be used only in the context of a <Router> component.
# Correction ... wrap component in Browser Router
```