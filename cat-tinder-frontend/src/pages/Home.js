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
    <div className= 'homecontainer'>
      <div className= 'herotext'>
      <h1>meet h0t single aliens in y0ur galaxy</h1>
      <button className= 'button' onClick='https://reactjs.org/'>l0g in</button>
      <button className= 'button' onClick='https://reactjs.org/'>see what's 0ut there</button>
    </div>
      <img className= 'hotalienimage' src = { HotFemaleAlien }></img>
    </div>
    </>
      );
    }
 }
export default Home;
