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
        <NavLink to="/about" className="nav-link">
          About Tooth Tale
        </NavLink>
      </NavItem>      
      <NavItem>
        <NavLink to="/indextooth" className="nav-link">
          See the Tooth Collectors
        </NavLink>
      </NavItem>      
      <NavItem>
        <NavLink to="/newtooth" className="nav-link">
          Add a Tooth Collector
        </NavLink>
      </NavItem>
    </Nav>
  )
}

export default Navigation