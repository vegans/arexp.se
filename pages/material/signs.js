import React from 'react'
import fetch from 'isomorphic-unfetch'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import CardColumns from 'react-bootstrap/CardColumns'
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Page from '../../layouts/Main'
import Hero from '../../components/Hero'

// TODO: Move somewhere nicer
const dev = process.env.NODE_ENV !== 'production'
const server = dev
  ? 'http://localhost:3000'
  : 'https://animalrealityexposed.com'

const Sign = ({language, file}) => {
  const full = `${language}/${file}`
  return (
    <Card style={{width: '18rem'}}>
      <Card.Img variant="top" src={`/pdf2png/${full}`} />
      <Card.Body>
        <Card.Text
          style={{
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
          }}>
          {file}
        </Card.Text>
        <Button variant="dark" href={`/signs/${full}`} download>
          Download
        </Button>
      </Card.Body>
    </Card>
  )
}

const Signs = ({group, json}) => {
  const [selectedLanguage, setLanguage] = React.useState('')
  const files = json && json.files
  return (
    <Page>
      <Hero>Signs</Hero>
      <Container>
        <Row>
          <Col sm={2}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link
                  onClick={() => setLanguage('')}
                  active={selectedLanguage === ''}>
                  all
                </Nav.Link>
              </Nav.Item>
              {files &&
                files.map(language => (
                  <Nav.Item key={language.name}>
                    <Nav.Link
                      onClick={() => setLanguage(language.name)}
                      active={selectedLanguage === language.name}>
                      {language.name}
                    </Nav.Link>
                  </Nav.Item>
                ))}
            </Nav>
          </Col>
          <Col sm={10}>
            <CardColumns>
              {files &&
                files
                  .filter(
                    lang => !selectedLanguage || lang.name === selectedLanguage,
                  )
                  .map(language => (
                    <React.Fragment key={language.name}>
                      {language.files.map(file => (
                        <Sign key={file} file={file} language={language.name} />
                      ))}
                    </React.Fragment>
                  ))}
            </CardColumns>
          </Col>
        </Row>
      </Container>
    </Page>
  )
}

Signs.getInitialProps = async ({req}) => {
  const res = await fetch(`${server}/pdfs`)
  const json = await res.json()
  return {json}
}

export default Signs
