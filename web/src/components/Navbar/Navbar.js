import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { NavLink } from "react-router-dom";


import NavMenuLogo from 'components/Navbar/logo.svg';



const ComponentsNavbar = ({ navbarmenulinks }) => {

  const [ isOpen, setIsOpen ] = useState(false);
 
  const handleToggle = () =>{
    setIsOpen(!isOpen);
  }




    return(
        <Navbar bg="dark" variant="dark" className="navbar navbar-expand-lg bg-primary">
          <button 
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbar01"
            aria-controls="navbar01"
            aria-expanded="false"
            aria-label="toggle navigation"
            onClick={handleToggle}
          >
            <span className="text-white">Menu</span>

          </button>
          <div className={`${isOpen ? 'show' : ''} collapse navbar-collapse nav-menu__container`} id="navbar01">
            <img src={NavMenuLogo} alt="logo" className="navbar-menu__logo"></img>
            <Nav className="mr-2 navbar-menu nav-item">
              <NavLink className="navbar-menu__link nav-link" to="/home" onClick={handleToggle} activeClassName="active">{navbarmenulinks.link1}</NavLink>
              <NavLink className="navbar-menu__link nav-link" to="/app"onClick={handleToggle} activeClassName="active">{navbarmenulinks.link2}</NavLink>
              <NavLink className="navbar-menu__link nav-link" to="/list" onClick={handleToggle} activeClassName="active">{navbarmenulinks.link3}</NavLink>
            </Nav>
          </div>
      </Navbar>
    )
};

export default ComponentsNavbar;
