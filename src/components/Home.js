import React from "react"
import { Link } from "gatsby"

// will need to:
//  load in the Businesses
//  know if the user has already
const Home = props => {
  console.log(props)
  return (
    <main>
      <header>
        <h1>Welcome to Bingo for Businesses!</h1>
        <p>
          Below is your auto-generated bingo card, click the "randomize" button
          to be given another one. Only one card per profile! Be sure to review
          the rules and how to claim a bingo spot, good luck!
        </p>
      </header>
      <section>
        {/* randomize and accept buttons are only available if not already accepted */}

        <button>Randomize</button>
        {/* should have a confirmation on first click letting the user know it's permanent */}
        <button>Accept</button>

        {/* Insert Bingo Card component */}
      </section>
    </main>
  )
}

export default Home
