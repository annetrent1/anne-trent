import media from './media'
import React from 'react'


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
      <div className={`${this.state.isExpanded ? 'tile--isExpanded': 'tile'}`} onClick={this._handleClick.bind(this)}>
        <div className={`${this.state.isExpanded ? 'picture-container--isExpanded': 'picture-container'}`}> 
          {renderPic(this.props)}
        </div>
        <div className={`${this.state.isExpanded ? 'heading-containter--isExpanded': 'heading-container'}`}><h2 className={`${this.state.isExpanded ? 'heading--isExpanded': 'heading'}`}>{this.props.heading}</h2></div>
        <p className={`${this.state.isExpanded ? 'p-body--isExpanded': 'p-body'}`}>{this.props.children}</p>
        <style jsx>{` 
            .p-body {
              display: none;
            }
            .p-body--isExpanded {
              display: block;
              width: 90%;
              margin: auto;
            }
            .tile {
              border: solid 3px #45BF98;
              position: relative;
              height: 100%;
              display: flex;
              border-radius: 25px 15px 25px 15px/15px 225px 15px 255px;
              box-shadow: 3px 3px 3px grey;
              max-width: 500px;
              margin: 2em;
            }
            .tile:hover {
              position: relative;
              top: -1px;
              box-shadow: 5px 5px 3px grey;
            }
            .tile--isExpanded {
              background: white;
              z-index: 40;
              position: fixed;
              border-radius: 25px 15px 25px 15px/15px 225px 15px 255px;
              box-shadow: 8px 8px 3px grey;
              border: solid 3px #45BF98;
              margin: 0 1em 0 .1em;
              max-width: 1000px;
              height: 80%;
            }
            .tile--isExpanded:hover {
              box-shadow: 5px 5px 3px grey;
            }
            .picture-container {
              height: 100%;
              margin-bottom: -5px;
              text-align: center;   
              max-width: 200px;     
            }
            .picture-container--isExpanded {
              margin-bottom: -5px;
              text-align: center;   
              max-width: 200px;  
            }
            .heading-container {
              font-size: 1.5em; 
              margin: auto 0;   
            }
            .heading {
              margin-right: 10px;
            }
            .heading-container--isExpanded {
              
              position: relative;   
            }
            .heading--isExpanded {
              width: 90%;
              margin: auto;
              font-size: 2em; 
              position: relative;   
            }
          `}</style>
        
      </div> 
    )}
    _handleClick(event) {
      this.setState({
        isExpanded: !this.state.isExpanded
      
      })
      console.log(event.currentTarget)
    }
  }
