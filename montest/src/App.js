import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "./img/logo.png"
import Example from "./components/TopBar/Slider"
import Affichage from "./components/AffichageTodo";
import Modifie from "./components/ModifieTodo";
import Ajouter from "./components/AjouterTodo";
import Login from './components/Login/Login';


class App extends React.Component{
  render(){
    return (
      <Router>
        <div className="container">
          
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="http://localhost:3000/">
              <img src={logo} width="103" height="40" alt="" />
            </a>
            <Link to="/" className="navbar-brand">GESTION DES TACHES</Link>
            <div className="collpase nav-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">TACHES</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">AJOUTER TACHES</Link>
                </li>
              </ul>
            </div>
          </nav>
          <Route path="/" exact component={Affichage} />
          <Route path="/edit/:id" component={Modifie} />
          <Route path="/create" component={Ajouter} />
        </div>
      </Router>
      
    );
  }
}

export default App;
