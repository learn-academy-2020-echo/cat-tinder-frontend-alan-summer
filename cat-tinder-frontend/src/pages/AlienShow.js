import React, { Component } from 'react'
import { Card, CardTitle, CardText, Col, Button } from 'reactstrap'
import { NavLink } from 'react-router-dom'

 class AlienShow extends Component {  
  constructor(props) {
    super(props)
    this.state = {

    }
  } 



render()  {
  console.log(this.props.alien)

  return (
    <div>
      <center>
      <Col sm="6" id="show-body" className= 'main-container'>
  <Card body >
    <CardTitle>my people call me
      <br></br>
      <h2><b>{ this.props.alien.name }</b></h2>
      </CardTitle>
      <div className= "alien-prof-image-wrapper">
      <img className="img-fluid" alt = "find ur perfect alien match" src = { this.props.alien.img } ></img>
      </div>
    <CardText>
      <h3><b>{ this.props.alien.distance } lightyears away</b></h3>
      hails from { this.props.alien.planet }.</CardText>
        <NavLink
          to={`/alienedit/${this.props.alien.id}`}
        >
          <Button>
          edit pr0file
          </Button>
      </NavLink>
      </Card>
    </Col>
    </center>
    </div>
      );
    }
 }
export default AlienShow;
