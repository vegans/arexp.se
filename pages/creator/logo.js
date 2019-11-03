import React from 'react'
import Konva from 'konva'
import {Stage, Layer, Image} from 'react-konva'
import useImage from 'use-image'
import Button from 'react-bootstrap/Button'
import Page from '../../layouts/Main'
import Text from '../../components/Text'
import Slider from '../../components/Slider'

function downloadFile(dataurl, filename) {
  var a = document.createElement('a')
  a.href = dataurl
  a.setAttribute('download', filename)
  a.click()
}

export default () => {
  const [image, setImage] = React.useState('/creator/pigs.jpg')
  const [scale, setScale] = React.useState(1)
  const [brightness, setBrightness] = React.useState(0)
  const [contrast, setContrast] = React.useState(0)
  const [logo] = useImage('/creator/logo.png')
  const [kanvaImage] = useImage(image)
  const background = React.createRef()
  const stage = React.createRef()
  React.useEffect(() => {
    background.current.cache()
    background.current.getLayer().batchDraw()
    console.log(contrast, brightness, scale)
  }, [background])

  const handleUpload = ({target}) => {
    var reader = new FileReader()
    reader.readAsDataURL(target.files[0])
    reader.onload = function() {
      setImage(reader.result)
    }
  }

  const download = () => {
    const dataURL = stage.current.toDataURL({
      mimeType: 'image/png',
      quality: 1.0,
    })
    downloadFile(dataURL, 'logo.png')
  }
  return (
    <Page>
      <Text>
        <h2>Logo creator</h2>
        <div className="custom-file">
          <input
            type="file"
            className="custom-file-input"
            id="logoImage"
            onChange={handleUpload}
          />
          <label className="custom-file-label" htmlFor="logoImage">
            Upload image then drag to reposition
          </label>
        </div>
        <div style={{width: 360, margin: '0 auto'}}>
          <Stage width={360} height={360} ref={stage}>
            <Layer>
              <Image
                image={kanvaImage}
                draggable
                filters={[
                  Konva.Filters.Grayscale,
                  Konva.Filters.Contrast,
                  Konva.Filters.Brighten,
                ]}
                ref={background}
                scaleY={scale}
                scaleX={scale}
                brightness={brightness}
                contrast={contrast}
              />
              <Image image={logo} listening={false} />
            </Layer>
          </Stage>
        </div>
        <Slider
          value={scale}
          onInputChange={setScale}
          min="0"
          max="5"
          step="0.05">
          Scale
        </Slider>
        <Slider
          value={brightness}
          onInputChange={setBrightness}
          min="-1"
          max="1"
          step="0.05">
          Brightness
        </Slider>
        <Slider
          value={contrast}
          onInputChange={setContrast}
          min="-100"
          max="100"
          step="1">
          Contrast
        </Slider>
        <Button variant="secondary" onClick={download}>
          Download
        </Button>
      </Text>
    </Page>
  )
}
