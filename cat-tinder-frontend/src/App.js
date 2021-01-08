import React, { Component } from 'react';
import mockAlien from './mockAlien.js';
import Header from './components/Header';
import Footer from './components/Footer';
import AlienEdit from './pages/AlienEdit';
import AlienIndex from './pages/AlienIndex';
import AlienNew from './pages/AlienNew';
import AlienShow from './pages/AlienShow';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import './App.css'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

 class App extends Component {  
  constructor(props) {
    super(props)
    this.state = {
      aliens: mockAlien
    }
  } 


createNewAlien = (newalien) => {
  console.log(newalien)
}


render()  {


  return (
    <div>
      <Header/> 
      <Router>
  <Switch>
    <Route exact path="/" component={ Home } />
    <Route path="/alienindex" render= { (props) => <AlienIndex aliens= { this.state.aliens } /> } />
    <Route 
    exact path={"/alienshow/:id"}
    render={ (props) => {
      let id = props.match.params.id
      let alien = this.state.aliens.find(alien => alien.id === parseInt(id))
      return ( 
        <AlienShow
          alien={ alien }
        />
      )
    }}
  />
    <Route
      path="/aliennew"
      render={ (props) => <AlienNew createNewAlien={ this.createNewAlien }/> }
    />
    <Route path="/Alienedit/:id" component={ AlienEdit } />
    <Route component={ NotFound }/>
  </Switch>
</Router>
<Footer/>
    </div>
      );
    }
 }
export default App;
