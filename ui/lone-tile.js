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


export default props =>
<div className="tile">
        <div className="picture-container"> 
          {renderPic(props)}
        </div>
        <div className="heading-container"><h2 className="heading">{props.heading}</h2></div>
        <p className="p-body">{props.children}</p>
        <style jsx>{` 
          .p-body {
            display: none;
          }
          .tile {
            border: solid 3px #45BF98;
            position: relative;
            height: 100%;
            display: flex;
            border-radius: 25px 15px 25px 15px/15px 225px 15px 255px;
            box-shadow: 3px 3px 3px grey;
            max-width: 500px;
            margin: 1.5em;
          }
          .picture-container {
            height: 100%;
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
          .tile:hover {
            position: relative;
            top: -1px;
            box-shadow: 5px 5px 3px grey;
          }
        `}</style>
      </div> 