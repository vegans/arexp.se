import React from 'react'
import App from 'next/app'
import Link from 'next/link'
import NProgress from 'nprogress'
import Router from 'next/router'
import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.min.css'

Router.events.on('routeChangeStart', (url) => {
  NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

export default class MyApp extends App {
  render () {
    const { Component, pageProps } = this.props
    return (
      <>
        <Head>
          <title>Animal Reality Exposed</title>
          <meta name="title" content="Animal Reality Exposed">
          <meta name="description" content="Find your local A.R.E. group and materials">

          <meta property="og:type" content="website">
          <meta property="og:url" content="https://arexp.se/">
          <meta property="og:title" content="Animal Reality Exposed">
          <meta property="og:description" content="Find your local A.R.E. group and materials">
          <meta property="og:image" content="https://arexp.se/metaimage.png">

          <meta property="twitter:card" content="summary_large_image">
          <meta property="twitter:url" content="https://arexp.se/">
          <meta property="twitter:title" content="Animal Reality Exposed">
          <meta property="twitter:description" content="Find your local A.R.E. group and materials">
          <meta property="twitter:image" content="https://arexp.se/metaimage.png">

          <link rel='stylesheet' type='text/css' href='/nprogress.css' />
        </Head>
        <Component {...pageProps} />
      </>
    )
  }
}
