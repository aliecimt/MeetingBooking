import logo from './logo.svg';
import './App.css';
import React from 'react';  
import ScheduleMeeting from './Component/ScheduleMeeting';  
import Studentlist from './Component/Details';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';  
import './App.css'; 
import Details from './Component/Details';
function App() {
  return (
    <Router>  
      <div className="container">  
        <nav className="navbar navbar-expand-lg navheader">  
          <div className="collapse navbar-collapse" >  
            <ul className="navbar-nav mr-auto">  
              <li className="nav-item">  
                <Link to={'/ScheduleMeeting'} className="nav-link">Schedule Meeting</Link>  
              </li>  
              <li className="nav-item">  
                <Link to={'/Details'} className="nav-link">Details</Link>  
              </li>  
            </ul>  
          </div>  
        </nav> <br />  
        <Switch>  
          <Route exact path='/ScheduleMeeting' component={ScheduleMeeting} />  
          {/* <Route path='/edit/:id' component={EditStudent} />   */}
          <Route path='/Details' component={Details} />  
        </Switch>  
      </div>  
    </Router>  
     
  );
}

export default App;
