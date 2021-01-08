import React, { Component } from 'react'
import BlackHole from '../assets/blackhole.png'
 class NotFound extends Component {  
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
      <h1>You entered a black hole</h1>
      <button className= 'button' onClick='/'>ET phone Home</button>
    </div>
      <img className= 'blackhole' src = { BlackHole }></img>
    </div>
    </>
      );
    }
 }
export default NotFound;
