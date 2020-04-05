import React from "react"
import { navigate } from "@reach/router"
import { isLoggedIn } from "../utils/auth"

const PrivateRoute = ({ component: Component, location, ...rest }) => {
  React.useEffect(() => {
    if (!isLoggedIn()) {
      navigate("/app/login")
    }
  }, [])

  return isLoggedIn() ? <Component {...rest} /> : "Redirecting..."
}

export default PrivateRoute
