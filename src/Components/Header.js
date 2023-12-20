import React, { Component } from "react";
import { Navbar, Nav, FormControl, Container, Form, Button,NavDropdown  } from "react-bootstrap";
import logo from "./logo.jpg";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Home from '../Pages/Home';
import Contacts from '../Pages/Contacts';
import About from '../Pages/About';
import Blog from '../Pages/Blog';


export default class Header extends Component {
    render() {
        return (
            <>
                <Navbar collapseOnSelect expand="md" bg="dark" variant="dark"> {/* md - параметр адаптивности сайта можно поменять на sm */}
                    <Container>
                        <Navbar.Brand href="/" > {/* Логотип */}
                            <img
                                src={logo}
                                height="60"
                                width="120"
                                className="d-inline-block align-top"
                                alt="Logo"
                            /> 
                            <h6>Jump store </h6>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav " />


                        <Navbar.Collapse id="responsive-navbar-nav ">
                            <Nav className="mr-auto">
                                <Nav.Link href="/"> Home </Nav.Link>
                                <Nav.Link href="/about"> Our Products </Nav.Link>
                                <Nav.Link href="/contacts"> Contacts </Nav.Link>
                                <Nav.Link href="/blog"> Blog </Nav.Link>
                            </Nav>
                            
                            <Form inline className="d-flex ml-auto" >
                                <FormControl
                                    type="text"
                                    placeholder="Search"
                                    className="mr-sm-2 me-2"
                                />
                                <Button variant="outline-info"> Search</Button>
                            </Form>


                        </Navbar.Collapse>
                    </Container>
                </Navbar>


                <Router>
                    <Routes>
                    <Route exact path="/" element={<Home/>}/>
                    <Route exact path="/about" element={<About/>}/>
                    <Route exact path="/contacts" element={<Contacts/>}/>
                    <Route exact path="/blog" element={<Blog/>}/>
                    </Routes>
                </Router>
            </>
        );
    }
}
