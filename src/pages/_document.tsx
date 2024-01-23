import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="ko">
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
        <meta property="og:description" content="문제를 해결하는 사람" />
        <meta property="og:site_name" content="프론트엔드 개발자 김계승" />
        <meta property="og:type" content="website" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
