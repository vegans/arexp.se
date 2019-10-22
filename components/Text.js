import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default ({children, width = 6}) => (
  <Container>
    <Row className="justify-content-md-center">
      <Col xs lg={width}>
        {children}
      </Col>
    </Row>
  </Container>
)
