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