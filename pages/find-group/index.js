import React from 'react'
import Page from '../../layouts/Main'
import Text from '../../components/Text'
import Map from './Map'

const FindGroup = () => {
  return (
    <Page>
      <Map />
      <Text>
        <p>
          Can&apo;t find a local group? Let&apo;s start one together, reach out
          to us at{' '}
          <a href="https://www.facebook.com/AnimalRealityExpose/">Facebook</a>!
        </p>
      </Text>
    </Page>
  )
}

export default FindGroup
