import React from 'react'
import Page from '../../layouts/main'
import Text from '../../components/Text'
import Map from './Map'

const FindGroup = () => {
  return (
    <Page>
      <Map />
      <Text>
        <p>Can't find a local group? Let's start one together, reach out to us at <a href="https://www.facebook.com/AnimalRealityExpose/">Facebook</a>!</p>
      </Text>
    </Page>
  )
}

export default FindGroup
