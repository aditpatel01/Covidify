import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Topnav from './nav-bar/Navbar';
import News from './components/News'
import Map from './components/Map'
import homepage from './components/homepage'
import symptoms from './components/symptoms'
import about from './components/about'


import SimpleForm from './SimpleForm';


function App() {

  let [showChat, setShowChat] = useState(false);

  const startChat = () => { setShowChat(true); }
  const hideChat = () => { setShowChat(false); }

  return (
    <div>
      <Router>
            <div>
              <Topnav />
              <Route path="/" component={App}>
                <Route path="/home" component={homepage} />
                <Route path="/news" component={News} />
                <Route path="/map" component={Map} />
                <Route path="/symptoms" component={symptoms} />
                <Route path="/about" component={about} />
              </Route>
            </div>
          </Router>  

          <div className = "footer"></div>
            <div className = "bot">
              <div style ={{display: showChat ? "" : "none"}}>
                <SimpleForm></SimpleForm>
              </div>      
        {/* <div> {showChat ? <SimpleForm></SimpleForm> : null} </div> */}
              <div>
          {!showChat 
            ? <button style={{backgroundColor: "#5695DC", color: "white"}} className="btn" onClick={() => startChat()}>click to chat... </button> 
            : <button style={{backgroundColor: "#5695DC", color: "white"}} className="btn" onClick={() => hideChat()}>click to hide... </button>}
        </div>
      </div> 



    </div>
  )
}

export default App;
