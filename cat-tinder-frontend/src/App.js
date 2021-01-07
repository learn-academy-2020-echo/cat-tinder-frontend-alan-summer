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



render()  {


  return (
    <div>
      <Header/> 
      <Router>
  <Switch>
    <Route exact path="/" component={ Home } />
    <Route path="/Alienindex" component={ AlienIndex } />
    <Route path="/Alienshow/:id" component={ AlienShow } />
    <Route path="/AlienNew" component={ AlienNew } />
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
