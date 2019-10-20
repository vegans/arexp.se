import React from 'react'
import Page from '../layouts/Main'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Link from 'next/link'
import styled from '@emotion/styled'
import About from '../content/About.md'
import Text from '../components/Text'

const Hero = styled(Jumbotron)`
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/hero/1.jpg) no-repeat center center;
  background-size: cover;
`

const LinkButton = ({children, href, ...props}) => (
  <Link href={href} passHref>
    <Button {...props} style={{margin: 5, marginTop: 15}}>
      {children}
    </Button>
  </Link>
)

const Home = () => (
  <Page>
    <Hero>
      <Container style={{padding: '20px 0'}}>
        <Row className="justify-content-md-center">
          <Col xs lg="6" className="text-center">
            <img src="/are.png" alt="my image" style={{maxWidth: '100%'}} />
            <LinkButton variant="light" href="/find-group">
              Find your local group
            </LinkButton>
            <LinkButton variant="outline-light" href="/code-of-conduct">
              Code of Conduct
            </LinkButton>
          </Col>
        </Row>
      </Container>
    </Hero>
    <Text width={8}>
      <About />
    </Text>
  </Page>
)

export default Home
