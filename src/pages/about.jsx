import React from "react"
import Helmet from "react-helmet"
import PropTypes from "prop-types"
import { Header } from "components"
import { Layout, Container } from "layouts"

const About = center => (
  <Layout>
    <Helmet title={"About Page"} />
    <Header title="Welcome to the About page!">Heyooo</Header>
    <Container center={center}>
      <h3>This is coming together nicely!</h3>
    </Container>
  </Layout>
)

export default About

About.propTypes = {
  center: PropTypes.object,
}
