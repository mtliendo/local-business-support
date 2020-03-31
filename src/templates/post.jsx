import React from "react"
import { graphql, Link } from "gatsby"
import styled from "@emotion/styled"
import PropTypes from "prop-types"
import { Layout, Container, Content } from "layouts"
import { TagsBlock, Header, SEO } from "components"
import "../styles/prism"
import NavBar from "../layouts/NavBar"

const SuggestionBar = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  background: ${props => props.theme.colors.white.light};
  box-shadow: ${props => props.theme.shadow.suggestion};
`
const PostSuggestion = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 3rem 0 3rem;
`

const Post = ({ data, pageContext }) => {
  const { next, prev } = pageContext
  const { body, frontmatter, excerpt } = data.mdx
  const { city, title, tags, path, description } = frontmatter
  const image = frontmatter.cover.childImageSharp.fluid

  return (
    <Layout>
      <SEO
        title={title}
        description={description || excerpt || " "}
        banner={image}
        pathname={path}
        article
      />
      <Header title={title} city={city} cover={image} />

      <Container>
        <TagsBlock list={tags || []} />
        <Content input={body} />
      </Container>
      <SuggestionBar>
        <PostSuggestion>
          {prev && (
            <Link to={prev.frontmatter.path}>
              Previous
              <h5>{prev.frontmatter.title}</h5>
            </Link>
          )}
        </PostSuggestion>
        <PostSuggestion>
          {next && (
            <Link to={next.frontmatter.path}>
              Next
              <h5>{next.frontmatter.title}</h5>
            </Link>
          )}
        </PostSuggestion>
      </SuggestionBar>
    </Layout>
  )
}

export default Post

Post.propTypes = {
  pageContext: PropTypes.shape({
    prev: PropTypes.object,
    next: PropTypes.object,
  }).isRequired,
  data: PropTypes.object.isRequired,
}

export const query = graphql`
  query($pathSlug: String!) {
    mdx(frontmatter: { path: { eq: $pathSlug } }) {
      body
      frontmatter {
        date
        city
        title
        tags
        cover {
          childImageSharp {
            fluid(
              maxWidth: 1920
              quality: 90
              duotone: { highlight: "#386eee", shadow: "#2323be", opacity: 60 }
            ) {
              ...GatsbyImageSharpFluid_withWebp
            }
            resize(width: 1200, quality: 90) {
              src
            }
          }
        }
      }
    }
  }
`
