import React from "react"
import styled from "@emotion/styled"
import BackgroundImage from "gatsby-background-image"
import PropTypes from "prop-types"

const Wrapper = styled.header`
  background: #36d1dc; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #5b86e5,
    #36d1dc
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #5b86e5,
    #36d1dc
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 1.5rem 0;
  font-size: 1.8rem;
  height: 50vh;
  color: white;
  h1,
  p {
    text-align: center;
    padding: 0 10px;
  }
`
const OtherWrapper = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 1.5rem 0;
  font-size: 1.8rem;
  height: 50vh;
  color: white;
  h1,
  p {
    text-align: center;
    padding: 0 10px;
  }
`

const Subtitle = styled.p`
  max-width: 650px;
  color: ${props => props.theme.colors.white.light};
`

const Header = ({ children, title, date = "", cover, city = "" }) =>
  console.log({ cover }) || cover.sizes ? (
    <BackgroundImage
      Tag="section"
      className={"heyoo"}
      backgroundColor={`#040e18`}
      fluid={cover || {} || [] || ""}
    >
      {" "}
      <OtherWrapper>
        {" "}
        <h1>{title}</h1> {children && <Subtitle>{children}</Subtitle>}{" "}
      </OtherWrapper>{" "}
    </BackgroundImage>
  ) : (
    <>
      {" "}
      <Wrapper>
        {" "}
        <h1>{title}</h1> {children && <Subtitle>{children}</Subtitle>}{" "}
      </Wrapper>{" "}
    </>
  )

export default Header

Header.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.bool]),
  cover: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  date: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.bool,
  ]),
}

Header.defaultProps = {
  children: false,
  cover: false,
  date: false,
  title: false,
}
