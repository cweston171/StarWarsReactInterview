import React, { Component } from 'react'
import './App.css'
import CharacterContainer from './characters/CharacterContainer'
import star from './images/star.svg'
import wars from './images/wars.svg'

class App extends Component {
  render() {
    return (
      <div className="content">
        <div className="logo">
          <img src={star} alt="star-logo" />
          <span className="interview-text">The Interview</span>
          <img src={wars} alt="wars-logo" />
        </div>
        <CharacterContainer />
      </div>
    )
  }
}

export default App
