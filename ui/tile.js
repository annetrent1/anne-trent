import React from 'react'
import media from './media'

const renderPic = props =>
  React.isValidElement(props.picture)
  ? <div className="picture">
      {props.picture}
    <style jsx>{`
      .picture {
        height: auto;
        width: 100%;
        margin: auto;
      }
    `}</style>
  </div>
  : <div className="picture-container">
    <img src={props.picture} className="picture"/>
    <style jsx>{`
      .picture {
        height: 100%;
        width: 100%;
        margin: auto;
      }
      .picture-container {
        height: 100%;
        width: 100%;
        margin: auto;
      }
    `}</style>
  </div>

export default class extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isExpanded: false
    }
  }
  render() {
    return (
      <div className="tile">
        <div className="picture-container"> 
          {renderPic(this.props)}
        </div>
        <div className="heading-container"><h2 className="heading">{this.props.heading}</h2></div>
        <p className="p-body">{this.props.children}</p>
        <style jsx>{` 
          .p-body {
            display: none;
          }
          .tile {
            border: solid 2px #45BF98;
            margin: 2em;
            position: relative;
            height: 100%;
            display: flex;
            border-radius: 25px 15px 25px 15px/15px 225px 15px 255px;
            box-shadow: 3px 3px 3px grey;
          }
          .picture-container {
            height: 100%;
            margin-bottom: -5px;
            text-align: center;   
            max-width: 200px;     
          }
          .heading-container {
            font-size: 1.3em;    
          }
          .heading {
            
            height: 100%;
            width: 100%;
          }
          @media screen and (${media.small}) {
          }
        `}</style>
      </div> 
    )
  }
}