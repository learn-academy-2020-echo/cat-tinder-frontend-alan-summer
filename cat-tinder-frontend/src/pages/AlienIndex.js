import React, { Component } from 'react'
import { Card, CardTitle, Col } from 'reactstrap'
// import Header from '../components/Header'


class AlienIndex extends Component { 
  constructor(props) {
    super(props)
    this.state = {

    }
  } 



render()  {


  return (
    <div>
      <center>
          <h2>yOur matches!</h2>
            <br />
              <Col sm="6">
                { this.props.aliens.map((alien, index) => {
                  return (
                    <Card body key={ index }>
                      <CardTitle>
                        <h4>{ alien.name }</h4>
                      </CardTitle>
                    </Card>
                  )
                })}
              </Col>
      </center>
    </div>
      );
    }
 }
export default AlienIndex;
