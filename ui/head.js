import Head from 'next/head'

const now = _ => new Date().getFullYear()

export default _ => 
<Head>
  <title>Anne Trent | The Real Anne Trent</title>

  <link rel="shortcut icon" type="image/png" href="/static/img/favicon.png" />

  <meta
    name="author"
    content="Anne Trent"
  />
  <meta name="description" content="This is a sweet introduction to Anne Trent, the Software Engineer." />
  <meta
    name="keywords"
    content="react, software engineer, student, front end developer"
  />
  <meta name="copyright" content={`${now()} Anne Trent`} />
  <meta property="og:title" content="The Real Anne Trent" />
  <meta property="og:type" content="blog" />
  <meta property="og:url" content="http://therealannetrent.com" />
  <meta
    property="og:description"
    content="Meet a shining new developer!"
  />
  <meta name="twitter:card" content="summary" />
  <meta name="twitter:title" content="Anne Trent" />
  <meta
    name="twitter:description"
    content="Meet a shining new developer, eager to continue to learn."
  />
  <meta name="twitter:site" content="@anne_trent1" />
  <meta name="twitter:creator" content="@anne_trent1" />
  <meta name="HandheldFriendly" content="True" />
  <meta name="MobileOptimized" content="320" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />

  <link href="https://fonts.googleapis.com/css?family=Poppins:400|Raleway" rel="stylesheet" />
</Head>