import React from 'react'
import Link from 'next/link'
import Page from '../../layouts/Main'
import Hero from '../../components/FullscreenHero'
import Text from '../../components/Text'

function Facebook({url, children}) {
  return (
    <li>
      <a
        href={`http://facebook.com/${url}`}
        target="_blank"
        rel="noopener noreferrer">
        {children}
      </a>
    </li>
  )
}

export default () => (
  <Page>
    <Hero light={true} image="/sweden/gris.jpg">
      <h2>ARE Sweden</h2>
    </Hero>
    <Text>
      <h3>#totalsinsyn</h3>
      <p>
        Total Insyn is a campaign we are currently running in Sweden. We demand
        total transparancy as a third party into the lives of all animals who
        are bred to be killed.
      </p>
      <p>If you want to run this in your country reach out to us on Facebook</p>
      <Link href="/sweden/total-insyn">
        <a>Read our bill here</a>
      </Link>
      <div className="border-top my-3"></div>
      <h3>Facebook</h3>
      <ul>
        <Facebook url="arexpsweden">Animal Reality Exposed</Facebook>
        <Facebook url="mjolksanningen">Mjölksanningen</Facebook>
        <Facebook url="svenskgrisproduktion">Svensk grisproduktion</Facebook>
        <Facebook url="svenskfagelproduktion">Svensk fågelproduktion</Facebook>
        <Facebook url="gillagrisar">Gilla Grisar</Facebook>
      </ul>
    </Text>
  </Page>
)
