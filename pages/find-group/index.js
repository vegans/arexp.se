/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Page from '../../layouts/Main'
import Text from '../../components/Text'
import Map from './Map'
import Link from 'next/link'

const FindGroup = () => {
  return (
    <Page>
      <Map />
      <Text>
        <p>
          Can't find a local group? Let's start one together, reach out to us at{' '}
          <a href="https://www.facebook.com/AnimalRealityExpose/">Facebook</a>!
        </p>
        <ul>
          <li>
            <Link href="/sweden">
              <a>ARE Sweden</a>
            </Link>
          </li>
        </ul>
      </Text>
    </Page>
  )
}

export default FindGroup
