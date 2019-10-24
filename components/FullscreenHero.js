import React from 'react'
import JumbotronUnstyled from 'react-bootstrap/Jumbotron'
import styled from '@emotion/styled'

const Jumbotron = styled(JumbotronUnstyled)`
  background-position: center center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  height: calc(100vh - 56px);
  background-image: url(${props => props.img});
  align-items: end;
  display: flex;
  @media (max-width: 768px) {
    // iOS bug with fixed background
    background-attachment: scroll;
  }
`

const Content = styled.div`
  max-width: 300px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  color: ${props => (props.light ? '#FCFBE3' : 'rgb(33, 37, 41);')};
`

const Hero = ({children, image, light}) => (
  <Jumbotron img={image}>
    <Content light={light}>
      <div>{children}</div>
    </Content>
  </Jumbotron>
)

export default Hero
