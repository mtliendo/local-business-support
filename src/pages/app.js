import React from "react"
import { Router } from "@reach/router"
import Layout from "../layouts/Layout"
import Details from "../components/Details"
import Home from "../components/Home"
import Login from "../components/Login"
import PrivateRoute from "../components/PrivateRoute"
import Overview from "../components/Overview"

const App = () => (
  <Layout>
    <Router>
      <Overview exact path="/app" />
      <PrivateRoute path="/app/home" component={Home} />
      <PrivateRoute path="/app/profile" component={Details} />
      <Login path="/app/login" />
    </Router>
  </Layout>
)

export default App
