import React from 'react'
import Page from '../layouts/main'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Link from 'next/link'

const LinkButton = ({children, href, ...props}) => (
  <Link href={href} passHref>
    <Button {...props} style={{margin: 5, marginTop: 15}}>
      {children}
    </Button>
  </Link>
)

const Home = () => (
  <Page>
    <Jumbotron style={{backgroundImage: 'url(/hero/1.jpg)'}}>
      <Container>
        <Row className="justify-content-md-center">
          <Col xs lg="6" className="text-center">
            <img src="/are.png" alt="my image" style={{maxWidth: '100%'}} />
            <LinkButton variant="light" href="/find-group">Find your local group</LinkButton>
            <LinkButton variant="outline-light" href="/about">Our values</LinkButton>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  </Page>
)

export default Home
