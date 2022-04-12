import React,{Component} from 'react';
// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Header from './components/Header';
import India from './components/India';
import World from './components/World';
// import Greet from './components/Greet';
// import Welcome from './components/Welcome';
// import Hello from './components/Hello';
// import Prop from './components/Props';

class App extends Component{
  constructor(){
    super();
  }
  render(){
    return(
      <div className='container-fluid'>

        <Router>
          <Header/>
          <Switch>
            <Route exact path="/">
              <India/>
            </Route>
            <Route exact path="/india">
              <India/>
            </Route>
            <Route exact path="/world">
              <World/>
            </Route>
          </Switch>
        </Router>
          {/* <Greet/>
          <Welcome/> */}
        {/* <Hello name="raseena"/>
        <Hello/> */}
        {/* <Prop name="raseena" heroName="rusu"/>
        <p>This is childreen</p>
        <Prop name="anu" heroName="A"/>
        <button>Click</button>
        <Prop name="ammu" heroName="Am"/> */}
      
      </div>
    )
  }
}

export default App;
