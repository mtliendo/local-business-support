import React from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import styled from "@emotion/styled"
import {css} from '@emotion/core'
import { Header, PostList } from "components"
import { Layout } from "layouts"
import { useFilterState, useFilterDispatch } from "../context/filter-context"

const normalStyle = props =>
css`
  color: ${props.theme.colors.black.base};
  background: ${props.theme.colors.white.grey};
  border: solid 1px ${props.theme.colors.black.base};
`

const activeStyle = props =>
css`
  color: ${props.theme.colors.white.base};
  background: ${props.theme.colors.black.blue};
  border: solid 1px ${props.theme.colors.black.blue};
`

const TagButton = styled.button`
  margin: 0 8px;
  padding: 5px 10px;
  border-radius: 20px;
  min-width: 115px;
  margin-bottom: 5px;
  &:hover {
    box-shadow: 0 2px 2px 2px ${props => props.theme.colors.black.light};
    cursor: pointer;
  }
  ${props => props.active ? activeStyle : normalStyle}
`

const PostWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 4rem 4rem 1rem 4rem;
  @media (max-width: 1000px) {
    margin: 4rem 2rem 1rem 2rem;
  }
  @media (max-width: 700px) {
    margin: 4rem 1rem 1rem 1rem;
  }
`
const FilterSection = styled.section`
  margin: 4rem 4rem 1rem 4rem;
  @media (max-width: 1000px) {
    margin: 4rem 2rem 1rem 2rem;
    justify-content: center;
  }
  @media (max-width: 700px) {
    margin: 4rem 1rem 1rem 1rem;
  }
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

const CityFilterBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 1rem;
  label {
    margin-bottom: 0.5rem;
    font-weight: bold;
  }
  select, option {
    display: block;
    background-image: none;
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, .75);
    height: 34px;
    padding: 0 .75rem;
    line-height: 1.5;
    font-size: 1rem;
    font-weight: 400;
    overflow: visible;
    margin: 0;
    border: 1px solid #ced4da;
    border-radius: .25rem;
    transition: border-color .15s ease-in-out, box-shadow .15 ease-in-out;
    &:focus {
      border-color: #80bdff;
      outline: 0;
      box-shadow: 0 0 0 .2rem rgba(0, 123, 255, .25);
    }
  }
`; 

const TagFilterBlock = styled.div`
  display: inline-block;
  margin-left: 25px;
  text-align: center;
  p {
    margin-bottom: .5rem;
    font-weight: bold;
  }
`;

const Index = ({ data }) => {
  const { edges } = data.allMdx

  const { selectedCity, selectedTags } = useFilterState()
  const filterDispatch = useFilterDispatch()

  const allStores = React.useRef(edges)
  const [filterableStores, setFilterableStores] = React.useState(edges)

  React.useEffect(() => {
    let updatedStores = allStores.current
    if (selectedCity !== "All") {
      updatedStores = allStores.current.filter(
        store => store.node.frontmatter.city === selectedCity
      )
    }
    if (selectedTags.length > 0) {
      updatedStores = updatedStores.filter((store) => (
      store.node.frontmatter.tags.some((tag) => selectedTags.includes(tag))
    ))
    } 

    setFilterableStores(updatedStores)
  }, [selectedCity, selectedTags])

const tagList = React.useMemo(() => {
  const postsByTag = {}
  // create tags page
  allStores.current.forEach(({ node }) => {
    if (node.frontmatter.tags) {
      node.frontmatter.tags.forEach(tag => {
        if (!postsByTag[tag]) {
          postsByTag[tag] = []
        }

        postsByTag[tag].push(node)
      })
    }
  })

  const tags = Object.keys(postsByTag)
  return tags;
}, [allStores])

  return (
    <Layout>
      <Helmet title={"Quad Citizens Supporting Local Businesses"} />
      <Header title="Quad Citizens Supporting Local Businesses">
        {data.site.siteMetadata.title}
      </Header>
      <FilterSection>
        <CityFilterBlock>
        <label htmlFor="city-filter">Filter by City</label>
        <select id="city-filter" onChange={e => filterDispatch({ type: "update_city", payload: e.target.value })} value={selectedCity}>
          <option value="All">All Cities</option>
          <option value="Davenport">Davenport</option>
          <option value="Rock Island">Rock Island</option>
          <option value="Bettendorf">Bettendorf</option>
          <option value="Moline">Moline</option>
          <option value="East Moline">East Moline</option>
        </select>
        </CityFilterBlock>
        <TagFilterBlock>
          <p>Find businesses offering: </p>
          {tagList.map((tag) =>
            <TagButton
              key={tag}
              active={selectedTags.includes(tag)}
              onClick={() => filterDispatch({type: 'update_tags', payload: tag})}
            >{tag}</TagButton>)
          }
        </TagFilterBlock>
      </FilterSection>
      <PostWrapper>
        {filterableStores.map(({ node }) => {
          const { id, excerpt, frontmatter } = node
          const { cover, path, title, date, city, tags } = frontmatter
          return (
            <PostList
              key={id}
              cover={cover.childImageSharp.fluid}
              path={path}
              title={title}
              city={city}
              date={date}
              excerpt={excerpt}
              tags={tags}
            />
          )
        })}
      </PostWrapper>
    </Layout>
  )
}

export default Index

Index.propTypes = {
  data: PropTypes.shape({
    allMdx: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            excerpt: PropTypes.string,
            frontmatter: PropTypes.shape({
              cover: PropTypes.object.isRequired,
              path: PropTypes.string.isRequired,
              title: PropTypes.string.isRequired,
              date: PropTypes.string.isRequired,
              tags: PropTypes.array,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { order: ASC, fields: [frontmatter___title] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 75)
          frontmatter {
            title
            path
            tags
            city
            date(formatString: "MM.DD.YYYY")
            cover {
              childImageSharp {
                fluid(
                  maxWidth: 1000
                  quality: 90
                  traceSVG: { color: "#2B2B2F" }
                ) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`
