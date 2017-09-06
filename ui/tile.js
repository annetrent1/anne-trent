import React from 'react'

const renderPic = props =>
  props.picture
  ? <div className="picture">
    {props.picture}
    <style jsx>{`
      .picture {
        height: 100%;
        margin: auto;
      }
    `}</style>
  </div>
  : null

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
        <h2 className="heading">{this.props.heading}</h2>
        <p className="p-body">{this.props.children}</p>
        <style jsx>{` 
          .p-body {
            display: none;
          }
          .tile {
            border: solid 2px red;
            margin: 2em;
            position: relative;
            height: 100%;
            
          }
          .picture-container {
            height: 100%;
            position: absolute;
            margin: auto;
            text-align: center;
         
            
          
          }
          .heading {
            font-size: 2em;    
            opacity: .99;
            z-index: 40;
            margin: auto;
            text-align: center;  
            padding: 2.5em 0;     
          }
        `}</style>
      </div> 
    )
  }
}