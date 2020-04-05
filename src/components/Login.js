import React from "react"
import { navigate, Redirect } from "@reach/router"
import { setUser, isLoggedIn } from "../utils/auth"
import { Hub } from "aws-amplify"
import { Auth } from "aws-amplify"
import { Authenticator } from "aws-amplify-react"

const Login = () => {
  console.log("entered")
  React.useEffect(() => {
    console.log("fired")
    const listener = data => {
      switch (data.payload.event) {
        case "signIn":
          Auth.currentAuthenticatedUser().then(user => {
            const userInfo = {
              ...user.attributes,
              username: user.username,
            }
            setUser(userInfo) //is put on localStorage
            navigate("/app/home")
          })
          console.log("user signed in")
          break
        case "signOut":
          console.log("user signed out")
          break
        default:
          console.error("user sign in failed")
          break
      }
    }

    Hub.listen("auth", listener)
  }, [])

  if (isLoggedIn()) {
    return <Redirect to="/app/home" />
  }
  return <Authenticator />
}

export default Login
