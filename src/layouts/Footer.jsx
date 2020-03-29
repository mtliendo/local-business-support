import React from "react"
import styled from "@emotion/styled"

const Wrapper = styled.footer`
  position: relative;
  padding-top: 2rem;
  bottom: 0;
  box-shadow: ${props => props.theme.shadow.footer};
  background: ${props => props.theme.gradient.leftToRight};
  font-family: ${props => props.theme.fontFamily.body};
  font-weight: 500;
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    padding-top: 7rem;
  }
`

const Text = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 0px 1rem 2rem 1rem;
  text-align: center;
  color: ${props => props.theme.colors.white.light};
  a {
    color: white;
    text-decoration: underline;
    &:hover {
      opacity: 0.3;
    }
  }
`

const Footer = () => (
  <Wrapper>
    <Text>
      <span>
        Made with ❤️ by <a href="https://qcwam.org">Quad Cities Web & Mobile</a>
      </span>
      <span>
        Want to get your business featured or updated?{" "}
        <a href="mailto:admin@qcwam.org?subject=QC%20Support%20Local%20Site">
          Send us an email!
        </a>
      </span>
    </Text>
  </Wrapper>
)
export default Footer
