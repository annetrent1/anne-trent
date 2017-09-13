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
      font-family: 'Raleway', sans-serif;
      background: hsla(52, 90%, 67%, 1);
      color: hsla(45, 2%, 14%, 1);
      font-size: 16px;
    }
    h1,
    h2,
    h3, 
    h4 {
      margin: 0;
      font-family: 'Poppins', sans-serif;
    }
    a {
      display: inline-block;
      color: black;
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