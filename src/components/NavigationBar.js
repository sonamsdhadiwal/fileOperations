import React from 'react';
import { Nav, Navbar, Form, FormControl } from 'react-bootstrap';
import styled from 'styled-components';
import logo3 from '../images/logo3.png';

const Styles = styled.div`
  .navbar { background-color: rgb(0,0,82); }
  a, .navbar-nav, .navbar-light .nav-link {
    color: #9FFFCB;
    &:hover { color: white; }
  }
  .navbar-brand {
    font-size: 1.4em;
    color: #9FFFCB;
    &:hover { color: white; }
  }
  .form-center {
    position: absolute !important;
    left: 35%;
    top: 25%;
  }
  .logo {
    padding-left: 20px;
    width: 80px;
    height: 50px;
    padding-right: 20px;
  }
  .search-bar {
    width: 200px;
  }
  .home {
    padding-left: 840px !important;
    padding-top: 20px;
  }
  .about {
    padding-left: 20px !important;
    padding-top: 20px;
  }
  .topnav {
    overflow: hidden;
    background-color: #e9e9e9;
    padding-top: 12px;
  }
  
  .topnav a {
    float: left;
    display: block;
    color: black;
    text-align: center;
    padding: 4px 16px;
    text-decoration: none;
    font-size: 20px;
  }
  
  .topnav a:hover {
    background-color: #ddd;
    color: black;
  }
  
  .topnav a.active {
    background-color: #2196F3;
    color: white;
  }
  
  .topnav .search-container {
    float: right;
  }
  
  .topnav input[type=text] {
    padding: 6px;
    margin-top: 8px;
    font-size: 17px;
    border: none;
    border-radius: 5px;
    margin-right: 10px;
  }
  
  .topnav .search-container button {
    float: right;
    padding: 6px 10px;
    margin-top: 8px;
    margin-right: 16px;
    background: #ddd;
    font-size: 17px;
    border: none;
    cursor: pointer;
  }
  
  .topnav .search-container button:hover {
    background: #ccc;
  }
  
  @media screen and (max-width: 600px) {
    .topnav .search-container {
      float: none;
    }
    .topnav a, .topnav input[type=text], .topnav .search-container button {
      float: none;
      display: block;
      text-align: left;
      width: 100%;
      margin: 0;
      padding: 14px;
      border-radius: 5px;
    }
    .topnav input[type=text] {
      border: 1px solid #ccc;  
    }
  
`;
export const NavigationBar = () => (
  <Styles>
    <div class="topnav">
      <a href="#home" ><img src={logo3} className="logo"/></a>
  <a class="active" href="#home">Home</a>
  <a href="#about">About</a>
  <a href="#contact">Contact</a>
  <div class="search-container">
    <form action="/action_page.php">
      <input type="text" placeholder="Search.." name="search"/>
    </form>
  </div>
  <a href="javascript:void(0);" class="icon" >
    <i class="fa fa-bars"></i>
  </a>
</div>

    {/* <Navbar > */}
      {/* <Navbar.Toggle aria-controls="basic-navbar-nav"/> */}
      {/* <img src={logo1}/> */}
      {/* <Form className="form-center">
        <FormControl type="text" placeholder="Search" className="" />
      </Form> */}
      {/* <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item><img src={logo3} className="logo"/></Nav.Item>
          <Form className="form-center">
        <FormControl type="text" placeholder="Search" className="search-bar" />
      </Form>
          <Nav.Item><Nav.Link href="/" className="home">Home</Nav.Link></Nav.Item> 
          <Nav.Item><Nav.Link href="/about" className="about">About</Nav.Link></Nav.Item>         
        </Nav>
      </Navbar.Collapse>
    </Navbar> */}
  </Styles>
)