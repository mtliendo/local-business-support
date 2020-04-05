import React from "react"
import { Link, navigate } from "gatsby"
import styled from "@emotion/styled"
import { logout, isLoggedIn } from "../utils/auth"
import { Auth } from "aws-amplify"
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
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem;
  font-family: ${props => props.theme.fontFamily.body};
  font-weight: 500;
  font-size: 1.1rem;
  @media only screen and (max-width: 600px) {
    font-size: 0.9rem;
  }
  a {
    color: white;
    font-weight: 600;
    transition: all ${props => props.theme.transitions.default.duration};
    &:hover {
      color: ${props => props.theme.colors.white.grey};
    }
  }
  span a {
    margin-left: 0.8rem;
  }
`

const NavBar = () => {
  return (
    <Nav>
      <NavLink to="/">SLBQC</NavLink>

      <span className="nav-right">
        <NavLink to="/about">About</NavLink>
        {!isLoggedIn() ? (
          <NavLink to="/app/login">Sign In</NavLink>
        ) : (
          <a
            onClick={() =>
              Auth.signOut().then(() => logout(() => navigate("/")))
            }
          >
            Sign Out
          </a>
        )}
      </span>
    </Nav>
  )
}

export default NavBar
