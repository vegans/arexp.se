import React from 'react'
import Container from 'react-bootstrap/Container'
import RowUnstyled from 'react-bootstrap/Row'
import JumbotronUnstyled from 'react-bootstrap/Jumbotron'
import styled from '@emotion/styled'

const Jumbotron = styled(JumbotronUnstyled)`
  background-position: 50% 50%;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  height: calc(100vh - 56px);
`

const Row = styled(RowUnstyled)`
  height: 100%;
  max-width: 300px;
  margin: 0 auto;
  align-items: end;
  text-align: center;
  color: ${props => (props.light ? '#FCFBE3' : 'rgb(33, 37, 41);')};
`

const Hero = ({children, image, light}) => (
  <Jumbotron style={{backgroundImage: `url(${image})`}}>
    <Container style={{height: '100%'}}>
      <Row light={light}>
        <div>{children}</div>
      </Row>
    </Container>
  </Jumbotron>
)

export default Hero
