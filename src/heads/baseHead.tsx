import Head from 'next/head'

type Props = {
  urlPath?: string
  title?: string
  description?: string
  ogpImagePath?: string
}

export const BaseHead = ({
  urlPath,
  title,
  description,
  ogpImagePath,
}: Props) => {
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta property="og:url" content={urlPath} />
      <meta property="og:title" content={title} />
      <meta property="og:site_name" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={ogpImagePath} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@kart_official" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogpImagePath} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}
