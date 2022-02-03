import { Html, Head, Main, NextScript } from 'next/document'
import React from 'react'

const Document = () => {
  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500&family=Inconsolata&display=swap"
          rel="stylesheet"
        />
        <script defer data-domain="gmcafe.vercel.app" src="/js/script.js"></script>
      </Head>
      <body className="font-sans">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document
