import media from './media'

export default _ =>
  <style global jsx>{`
    * {
      box-sizing: border-box;
    }
    html,
    body {
      margin: 0;
      padding: 0;
      font-family: 'Open Sans', sans-serif;
      background: #fff;
      color: #32383C;
      font-size: 16px;
    }
    h1,
    h2,
    h3 {
      margin: 0;
      font-family: ;
    }
    a {
      display: inline-block;
      color: #fff;
      text-decoration: none;
      border-bottom: 1px solid #61dafb;
      margin-bottom: 2px;
      cursor: pointer;
    }
    a:hover {
      color: #61dafb;
    }
    ol {
      margin: 0;
      padding: 0;
    }
    p {
      line-height: 30px;
    }
    
    @media screen and (${media.small}) {
    }
    @media screen and (${media.medium}) {
     
    }
    @media screen and (${media.large}) {
     
    }
  `}</style>