const express = require('express')
const next = require('next')
const apicache = require('apicache')
const fs = require('fs')
const PDFImage = require('pdf-image').PDFImage

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({dev})
const handle = app.getRequestHandler()
const cache = apicache.middleware

app.prepare().then(() => {
  const server = express()

  server.get('/pdfs', cache('120 minutes'), async (req, res) => {
    const files = fs
      .readdirSync('./public/signs', {withFileTypes: true})
      .filter(maybeDir => maybeDir.isDirectory())
      .map(dir => ({
        name: dir.name,
        files: fs
          .readdirSync('./public/signs/' + dir.name, {withFileTypes: true})
          .filter(
            maybeFile =>
              !maybeFile.isDirectory() && maybeFile.name !== '.DS_Store',
          )
          .map(file => file.name),
      }))
    res.json({files})
  })

  server.get('/pdf2png/:path*', cache('2 weeks'), async (req, res) => {
    const full = './public/signs/' + req.params.path + req.params[0]
    if (!fs.existsSync(full)) {
      res.status(404)
      res.send('Missing file')
      return
    }
    new PDFImage(full).convertPage(0).then(
      imagePath => {
        console.log('Generated temp file:', imagePath)
        var s = fs.createReadStream(imagePath)
        s.on('open', () => {
          res.contentType('image/png')
          s.pipe(res)
          fs.unlinkSync(imagePath)
        })
      },
      err => {
        console.log('error', err)
        res.send(err, 500)
      },
    )
  })

  server.get('/posts/:id', (req, res) => {
    return app.render(req, res, '/posts', {id: req.params.id})
  })

  server.all('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
