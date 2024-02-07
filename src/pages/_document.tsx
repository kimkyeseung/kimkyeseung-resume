import {
  DOCUMENT_DESCRIPTION,
  DOCUMENT_TITLE,
  PROFILE_IMAGE_URL,
} from '@/constants'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="ko">
      <title>{DOCUMENT_TITLE}</title>
      <Head>
        <meta property="og:image" content={PROFILE_IMAGE_URL} />
        <meta property="og:image:width" content="200" />
        <meta property="og:image:height" content="200" />
        <meta
          property="og:url"
          content="https://kimkyeseung.github.io/kimkyeseung-resume/"
        />
        <meta property="og:description" content={DOCUMENT_DESCRIPTION} />
        <meta property="og:title" content={DOCUMENT_TITLE} />
        <meta property="og:site_name" content={DOCUMENT_TITLE} />
        <meta property="og:type" content="website" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
