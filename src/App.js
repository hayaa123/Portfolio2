import React, { Component } from 'react'
import Header from './component/Header'
import Body from './component/Body'
import Footer from './component/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./mycss.css"

export class App extends Component {
  render() {
    return (
      <>
        <Header/>
        <Body/>
        <Footer/>
      </>
    )
  }
}

export default App
