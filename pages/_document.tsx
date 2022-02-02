import { Html, Head, Main, NextScript } from 'next/document'
import React from 'react'

const Document = () => {
  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="font-default">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document
