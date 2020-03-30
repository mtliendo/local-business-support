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
          textDecoration: isCurrent ? "underline" : "none",
        },
      }
    }}
  />
)

const Nav = styled.nav`
  display: flex;
  margin-top: 1.3rem;
  justify-content: space-around;
  font-family: ${props => props.theme.fontFamily.body};
  font-weight: 500;
  font-size: 1.1rem;
  align-items: center;
  a {
    font-size: 1.5rem;
    color: black;
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
    <NavLink to="/about">About</NavLink>
  </Nav>
)

export default NavBar
