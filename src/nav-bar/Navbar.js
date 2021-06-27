import { Navbar,Nav} from "react-bootstrap";
import React from 'react' ;
import { Link } from "react-router-dom";

import './Navbar.css';

function Topnav() {
    return (
    <div class="space">
        
        <Navbar bg="light" expand="lg">
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
        <Link to='/home' id="sp">Home</Link>
        <Link to='/news' id="sp">News</Link>
        <Link to='/map' id="sp">Covid Hospitals</Link>
        <Link to='/symptoms' id="sp">Symptoms</Link>
        <Link to='/about' id="sp">About</Link>

        </Nav>
    </Navbar.Collapse>
    </Navbar> 
    </div>
      )
    }
    export default Topnav;