import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
// import Button from "react-bootstrap/Button";
import { FaShoppingCart } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../ContextApi/Context";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function Navbars() {
  const { loggedIn,userData,logout} = useAuth();
  console.log(loggedIn);
  console.log(userData);
  let navi = useNavigate()
  

  return (
    <div className="absolute top-0   ">
      <Navbar
        collapseOnSelect
        expand="lg"
        className=" text-white fixed-top shadow-2xl bg-gray-500 "
      >
        <Container>
          <Navbar.Brand href="#home" className="fs-3 text-white">
            Air<span className="text-orange-500 ">New</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <div className="ms-auto">
              {" "}
              {/* Centering the Nav */}
              <Nav className="justify-content-center gap-4">
                {loggedIn === false ? (
                  <NavLink
                    to="/"
                    className="fs-4  no-underline hover:underline hover:underline-offset-1 text-white"
                  >
                    Login
                  </NavLink>
                ) : (
                  ""
                )}
                {loggedIn === false ? (
                  <NavLink
                    to="/register"
                    className="fs-4  no-underline hover:underline hover:underline-offset-1 text-white"
                  >
                    Register
                  </NavLink>
                ) : (
                  ""
                )}
                {loggedIn === true ? (
                  <NavLink
                    to="/allpost"
                    className="fs-4  no-underline text-white hover:underline hover:underline-offset-1"
                  >
                    All_Post
                  </NavLink>
                ) : (
                  ""
                )}

                {loggedIn === true ? (
                  <NavLink
                    to="/C_Product"
                    className="fs-4  text-white no-underline hover:underline hover:underline-offset-1"
                  >
                    Create_Post
                  </NavLink>
                ) : (
                  ""
                )}

               
    {
      loggedIn === true ?   <DropdownButton
      id="dropdown-basic-button"
      title={userData}
      
    >
      <Dropdown.Item href="#/action-1" onClick={logout}>Log out</Dropdown.Item>
    </DropdownButton>:""
    }
              </Nav>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
export default Navbars;
