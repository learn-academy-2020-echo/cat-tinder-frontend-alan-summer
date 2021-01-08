import React, { Component } from 'react'
import { Card, CardTitle, Col } from 'reactstrap'
import { NavLink } from 'react-router-dom'



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
                        <h4>
                          <NavLink
                          to={`/alienshow/${alien.id}`}
                          >
                          { alien.name }
                          </NavLink>
                        </h4>
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
