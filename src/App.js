import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar.component"
import ChampionList from "./components/champion-list.component"


function App() {
  return (
    <Router>
        <div className="container">
            <Navbar />
            <br/>
            <Route path="/" exact component={ChampionList} />
            <Route path="/champions/:id" component={ChampionList} />
        </div>
    </Router>
  );
}

export default App;
