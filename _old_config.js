export default {
  docsRepositoryBase:
    'https://github.com/buccalon/tijuca/tree/main/pages',
  titleSuffix: ' – Tiju.ca',
  logo: (
    <>
      <span className="font-extrabold">Tiju.ca</span>
      <span className="mr-2 ml-2 text-gray-500 font-normal hidden md:inline">
        Floresta Arquivo
      </span>
    </>
  ),
  head: (
    <>
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="description" content="Documentos históricos sobre o Parque Nacional da Tijuca" />
      <meta name="twitter:card" content="image.png" />
      <meta name="twitter:site" content="Tiju.ca" />
      <meta property="og:title" content="Tiju.ca / Floresta Arquivo" />
      <meta property="og:description" content="Documentos históricos sobre o Parque Nacional da Tijuca" />
      <meta name="apple-mobile-web-app-title" content="Tiju.ca" />
    </>
  ),
  search: false,
  unstable_faviconGlyph: '🌳',
  prevLinks: true,
  nextLinks: true,
  floatTOC: true,
  footer: true,
  footerEditLink: 'Editar página',
  footerText: <>Organizado por <a href='https://bruno.land/' target='_blank'>Bruno Buccalon</a></>
}