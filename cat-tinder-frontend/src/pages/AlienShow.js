import React, { Component } from 'react'

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
    <CardTitle>Hi, my name is  { this.props.alien.name }!</CardTitle>
    <CardText>I am { this.props.alien.age } years old. I enjoy { this.props.alien.enjoys }.</CardText>
  </Card>
</Col>
    </div>
      );
    }
 }
export default AlienShow;
