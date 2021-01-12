import React, { Component } from 'react'
import HotFemaleAlien from '../assets/hotfemalealien.png'

 class Home extends Component {  
  constructor(props) {
    super(props)
    this.state = {

    }
  } 



render()  {


  return (
    <>
    <center>
    <div className= 'main-container'>
    <div className= 'homecontainer'>
      <div className= 'herotext'>
        <h1>meet h0t single aliens in y0ur galaxy</h1>
        <button className= 'button'>
          <a href='/AlienNew'>
            l0g in
          </a>
        </button>
        <button className= 'button'>
          <a href="/alienindex">
            see what's 0ut there
          </a>
        </button>
      </div>
      
      <div className= 'hot-alien-image-wrapper'>
          <img className= 'hot-alien-image' src = { HotFemaleAlien }></img>
      </div>
    </div>
    </div>
    </center>
    </>
      );
    }
 }
export default Home;
