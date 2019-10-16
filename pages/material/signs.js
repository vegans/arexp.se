import React from 'react'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import CardColumns from 'react-bootstrap/CardColumns'
import Button from 'react-bootstrap/Button'
import Page from '../../layouts/main'

function useFetch(url, options = {}) {
  const [response, setResponse] = React.useState(null)
  const [loading, setLoading] = React.useState(true)
  const setJson = json => {
    setResponse(json)
    setLoading(false)
  }
  React.useEffect(() => {
    fetch(url, options).then(res => res.json()).then(json => setResponse(json))
  }, [])
  return [response, loading]
}

const Sign = ({language, file}) => {
  const full = `${language}/${file}`
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={`/pdf2png/${full}`} />
      <Card.Body>
        <Card.Text style={{textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden'}}>
          {file}
        </Card.Text>
        <Button variant="dark" href={`/signs/${full}`} download>Download</Button>
      </Card.Body>
    </Card>
  )
}

const Signs = ({group}) => {
  const [json, loading] = useFetch('/pdfs')
  const files = json && json.files
  return (
    <Page>
      <Container>
        <CardColumns>
          {files && files.map(language => <>
            {language.files.map(file => <Sign key={file} file={file} language={language.name} />)}
          </>)}
        </CardColumns>
      </Container>
    </Page>
  )
}

export default Signs
