import React from "react"
import { Link } from "gatsby"
import { getCurrentUser } from "../utils/auth"

const Details = () => {
  const user = getCurrentUser()

  return (
    <div>
      <h1>Profile Details</h1>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone_number}</p>
      <p>Username: {user.username}</p>
      <Link to="/app/home">Home</Link>
    </div>
  )
}

export default Details
