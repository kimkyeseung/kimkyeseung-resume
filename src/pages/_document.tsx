import { DOCUMENT_DESCRIPTION, DOCUMENT_TITLE } from '@/constants'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="ko">
      <title>{DOCUMENT_TITLE}</title>
      <Head>
        <meta
          property="og:image"
          content="https://media.licdn.com/dms/image/D5603AQGzdiOuanwX2w/profile-displayphoto-shrink_200_200/0/1705914280908?e=1711584000&v=beta&t=p9P-qf-vetRLKa19PMq4pKBxt9eyicMWLRpmsLaVuzo"
        />
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
