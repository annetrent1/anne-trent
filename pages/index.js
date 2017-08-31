import Content from '../ui/content.js'
import GlobalStyles from '../ui/global-styles.js'
import Head from '../ui/head.js'
import Header from '../ui/header.js'
import Tile from '../ui/tile.js'

export default () => 
  <div>
    <Head />
    <GlobalStyles />
    <Content>
      <Header />
      <hr />
      <Tile heading="Heading">
        Sweet roll gingerbread jelly beans wafer jelly bonbon sweet macaroon halvah. 
        Candy sweet apple pie apple pie cookie. Lemon drops fruitcake jelly-o apple pie candy
        jelly-o candy danish cookie. Brownie soufflé pie sugar plum pastry. Jelly gummi bears 
        wafer sugar plum brownie apple pie cotton candy. Chocolate bear claw apple pie. Muffin 
        tart liquorice pie donut soufflé. Cookie brownie pie cotton candy cake carrot cake 
        ßtiramisu sesame snaps. Tart cheesecake chupa chups.
      </Tile>
    </Content>
  </div>
