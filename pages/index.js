import Content from '../ui/content'
import GlobalStyles from '../ui/global-styles'
import Head from '../ui/head'
import Header from '../ui/header'
import Hr from '../ui/hr'
import ReactLogo from '../ui/svg/react-logo'
import Tile from '../ui/tile'

export default () => 
  <div>
    <Head />
    <GlobalStyles />
    
      <Header />
      <Hr />
      <Content>
        <Tile heading="Styling in React" picture={<ReactLogo/>} >
	  This is a wonderful marketing website for the Pluralsight course "Styling in React".
	  I highly recommend this course as well as admiring the beautiful website!
	  	  
        </Tile>

        <Tile heading="New in React" picture="../static/taco.png" >
	  This was a fun project we tried to roll out before the React 16 was released. Speed
	  bumps were hit and it didn't get finished before it would have been useful. It's
	  a slightly dead project.
        </Tile>

        <Tile heading="Self Learning Club" picture="../static/taco.png" >
	  This was a super fun website to make! It isn't quite finished, but it is still useable.
	  It is a great collection of resources for anyone on the spectrum of learning. Expect more
	  to come here!
        </Tile>
    </Content>
  </div>
