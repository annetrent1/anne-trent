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
              border: solid 3px hsla(45, 2%, 14%, 1);
              position: relative;
              height: 100%;
              display: flex;
              box-shadow: 3px 3px 3px hsla(45, 2%, 14%, .6);
              max-width: 500px;
              margin: 2em;
              background: hsla(199, 0%, 92%, 1);
            }
            .tile:hover {
              position: relative;
              top: -1px;
              box-shadow: 5px 5px 3px hsla(45, 2%, 14%, .6);
            }
            .tile--isExpanded {
              background: hsla(199, 0%, 92%, 1);
              z-index: 40;
              position: relative;
              box-shadow: 8px 8px 3px hsla(45, 2%, 14%, .6);
              border: solid 3px hsla(45, 2%, 14%, 1);
              margin: 0 1em 0 1em;
              max-width: 1000px;
              height: 80%;
            }
            .tile--isExpanded:hover {
              box-shadow: 5px 5px 3px hsla(45, 2%, 14%, .6);           
            }
            .picture-container {
              height: 100%;
              margin-bottom: -5px;
              text-align: center;    
              max-width: 200px;     
            }
            .picture-container--isExpanded { 
              max-width: 200px;  
              margin: 0;
              
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
              font-size: 2.5em;  
            }
            @media screen and (${media.small}) {
              .p-body {
              }
              .p-body--isExpanded {
                clear: left;
              }
              .tile {
                
              }
              .tile:hover {
              }
              .tile--isExpanded {
              }
              .tile--isExpanded:hover {
              }
              .picture-container {
              }
              .picture-container--isExpanded {
                float: left;
              }
              .heading-container { 
              }
              .heading {
                font-size: 1.55em;
              }
              .heading-container--isExpanded {
              }
              .heading--isExpanded { 
                font-size: 2.8em;
                margin: 1.2em 0;
              }
            }
            @media screen and (${media.medium}) {
              .p-body {
              }
              .p-body--isExpanded {
              }
              .tile {
              }
              .tile:hover {
              }
              .tile--isExpanded {
                
              }
              .tile--isExpanded:hover {
              }
              .picture-container {
              }
              .picture-container--isExpanded {
              }
              .heading-container { 
              }
              .heading {
              }
              .heading-container--isExpanded {
              }
              .heading--isExpanded { 
                font-size: 3.5em;
                margin: 1.2em 0; 
              }
            }
            @media screen and (${media.large}) {
              .p-body {
              }
              .p-body--isExpanded {
              }
              .tile {
              }
              .tile:hover {
              }
              .tile--isExpanded {
                
              }
              .tile--isExpanded:hover {
              }
              .picture-container {
              }
              .picture-container--isExpanded {
              }
              .heading-container { 
              }
              .heading {
              }
              .heading-container--isExpanded {
              }
              .heading--isExpanded {  
              }
            }
          `}</style>
        
      </div> 
    )}
    _handleClick(event) {
      this.setState({
        isExpanded: !this.state.isExpanded
      
      })
    }
  }
