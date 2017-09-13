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
          Sweet roll gingerbread jelly beans wafer jelly bonbon sweet macaroon halvah. 
          Candy sweet apple pie apple pie cookie. Lemon drops fruitcake jelly-o apple pie candy
          jelly-o candy danish cookie. Brownie soufflé pie sugar plum pastry. Jelly gummi bears 
          wafer sugar plum brownie apple pie cotton candy. Chocolate bear claw apple pie. Muffin 
          tart liquorice pie donut soufflé. Cookie brownie pie cotton candy cake carrot cake 
          ßtiramisu sesame snaps. Tart cheesecake chupa chups.
        </Tile>

        <Tile heading="New in React" picture="../static/taco.png" >
          Sweet roll gingerbread jelly beans wafer jelly bonbon sweet macaroon halvah. 
          Candy sweet apple pie apple pie cookie. Lemon drops fruitcake jelly-o apple pie candy
          jelly-o candy danish cookie. Brownie soufflé pie sugar plum pastry. Jelly gummi bears 
          wafer sugar plum brownie apple pie cotton candy. Chocolate bear claw apple pie. Muffin 
          tart liquorice pie donut soufflé. Cookie brownie pie cotton candy cake carrot cake 
          ßtiramisu sesame snaps. Tart cheesecake chupa chups.
        </Tile>

        <Tile heading="New in React" picture="../static/taco.png" >
          Sweet roll gingerbread jelly beans wafer jelly bonbon sweet macaroon halvah. 
          Candy sweet apple pie apple pie cookie. Lemon drops fruitcake jelly-o apple pie candy
          jelly-o candy danish cookie. Brownie soufflé pie sugar plum pastry. Jelly gummi bears 
          wafer sugar plum brownie apple pie cotton candy. Chocolate bear claw apple pie. Muffin 
          tart liquorice pie donut soufflé. Cookie brownie pie cotton candy cake carrot cake 
          ßtiramisu sesame snaps. Tart cheesecake chupa chups.
        </Tile>
    </Content>
  </div>
