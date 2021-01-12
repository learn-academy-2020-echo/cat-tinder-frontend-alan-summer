import React, { Component } from 'react'
import { Card, CardTitle, CardText, Col } from 'reactstrap'

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
      <Col sm="6" id="show-body">
  <Card body >
    <CardTitle>my people call me<br></br><b>{ this.props.alien.name }</b></CardTitle>
    <CardText>
      <h3><b>{ this.props.alien.distance } lightyears away</b></h3>
      <br></br>
      hails from { this.props.alien.planet }.</CardText>
  </Card>
</Col>
    </div>
      );
    }
 }
export default AlienShow;
