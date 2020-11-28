import React from 'react';
import {
    BrowserRouter as Router, 
    Switch,
    Route,
    Redirect,
} from 'react-router-dom';

import ComponentsNavbar from '../components/Navbar/Navbar';
import PagesLoginForm from '../pages/Login/Form/Form';
import '../App.css'


const navbarmenulinks = {
    "link1" : "Nav1",
    "link2" : "Nav2",
    "link3" : "Nav3",
    
  }; 

const Root = () => {
    return(
        <div>
             <Router>
                <Redirect exact from="/" to="/app" />
                 <ComponentsNavbar navbarmenulinks={navbarmenulinks}></ComponentsNavbar>
                <Switch>
                    <Route path="/app" component={PagesLoginForm}></Route>
                </Switch>
            </Router>
        </div>       
    )
};

export default Root;