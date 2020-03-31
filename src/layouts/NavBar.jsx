import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"

const NavLink = props => (
  <Link
    {...props}
    getProps={({ isCurrent }) => {
      // the object returned here is passed to the
      // anchor element's props
      return {
        style: {
          color: isCurrent ? "white" : "#5B86E5",
        },
      }
    }}
  />
)

const Nav = styled.nav`
  display: flex;
  background-color: #222;
  justify-content: flex-start;
  align-items: center;
  padding: 0.8rem;
  font-family: ${props => props.theme.fontFamily.body};
  font-weight: 500;
  font-size: 1.1rem;
  a {
    font-size: 1.5rem;
    color: white;
    font-weight: 600;
    transition: all ${props => props.theme.transitions.default.duration};
    &:hover {
      color: ${props => props.theme.colors.white.grey};
    }
  }
`

const NavBar = () => (
  <Nav>
    <NavLink to="/">Home</NavLink>
    {/* <NavLink to="/about">About</NavLink> */}
  </Nav>
)

export default NavBar
