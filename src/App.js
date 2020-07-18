import React from 'react';
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import CreateDrums from "./components/create-drums.component";
import EditDrums from "./components/edit-drums.component"
import DrumsList from "./components/drums-list.component"
import logo from "./logo.svg"

function App() {
  return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <img src={logo} alt="drum app" width="30"></img>
          <Link to="/" className="navbar-brand">eDrums App</Link>
          <div className=" nav-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="navbar-item">
                <Link to="/" className="nav-link">eDrums</Link>
              </li>
              <li className="navbar-item">
                <Link to="/create" className="nav-link">Create new eDrum</Link>
              </li>
            </ul>
          </div>
        </nav>
        <h2>MERN STACK EDRUMS APP</h2>
        <Route path="/" exact component={DrumsList} />
        <Route path="/edit/:id" component={EditDrums} />
        <Route path="/create/" component={CreateDrums} />
      </div>
    </Router>
  );
}

export default App;
