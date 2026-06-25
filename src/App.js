import './App.css';
import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';

export default class App extends Component {
  c ='I am Aditya'
  render() {
    return (
      <div>
        <Navbar></Navbar>
        <News></News>

      </div>
    )
  }
}


                                      
