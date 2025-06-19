import { type Metadata } from 'next'

export function Head({ metadata }: { metadata: Metadata }) {
  return (
    <head>
      <title>{metadata.title?.toString()}</title>
      <meta name='description' content={metadata.description?.toString()} />

      <meta charSet='utf-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='author' content='Hamid Jamal' />
      <meta name='robots' content='index, follow' />

      <meta property='og:title' content={metadata.title?.toString()} />
      <meta
        property='og:description'
        content={metadata.description?.toString()}
      />
      <meta property='og:url' content='https://sparrowe.dev' />
      <meta
        property='og:image'
        content='/logo.png'
      />
      <meta property='og:image:width' content='1200' />
      <meta property='og:image:height' content='630' />
      <meta property='og:image:alt' content='Hamid Jamal' />
      <meta property='og:image:type' content='image/png' />

      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:creator' content='@hamid' />
      <meta name='twitter:title' content={metadata.title?.toString()} />
      <meta
        name='twitter:description'
        content={metadata.description?.toString()}
      />
      <meta
        name='twitter:image'
        content='/logo.png'
      />
      <meta property='twitter:image:width' content='1200' />
      <meta property='twitter:image:height' content='630' />
      <meta property='twitter:image:alt' content='Hamid Jamal' />
      <meta property='twitter:image:type' content='image/png' />

      <meta name='msapplication-TileColor' content='#000000' />
      <meta name='theme-color' content='#000000'></meta>

      <link rel='icon' type='image/x-icon' href='/favicon.ico' />
      <link
        rel='icon'
        type='image/png'
        sizes='32x32'
        href='/32x32.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='16x16'
        href='/16x16.png'
      />
      <link
        rel='apple-touch-icon'
        sizes='180x180'
        href='/180x180.png'
      />
      <link rel='manifest' href='/site.webmanifest' />
    </head>
  )
}
