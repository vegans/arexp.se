import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Jumbotron from 'react-bootstrap/Jumbotron'

const Hero = ({children}) => (
  <Jumbotron style={{backgroundImage: 'url(/are.png)'}}>
    <Container>
      <Row className="justify-content-md-center">
        <h1>{children}</h1>
      </Row>
    </Container>
  </Jumbotron>
)

export default Hero
