import React from 'react';
import { Navbar, Nav, Form, Button, FormControl, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
  return (
   <>
  <Navbar bg="dark" variant="dark" expand="lg">
  <Navbar.Brand href="#">ASSIGNMENT.COM</Navbar.Brand>
  <Navbar.Toggle aria-controls="navbarScroll" />
  <Navbar.Collapse id="navbarScroll">
    <Nav
      className="mr-auto my-2 my-md-0"
      navbarScroll
    >
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/" className="link" activeClassName="active" exact>
          Assignments List
      </Nav.Link>
      <Nav.Link href="/add" className="link" activeClassName="active">
          Add Assignment
      </Nav.Link>
      <Form className="d-flex">
      <FormControl
        type="search"
        placeholder="Search"
        className="mr-2"
        aria-label="Search"
      />
      <Button variant="outline-success">Search</Button>
    </Form>
    </Nav>
    <Nav bg="dark" variant="dark" expand="lg">
      <NavDropdown title="Login/SignUp " id="navbarScrollingDropdown" className="mr-3">
        <NavDropdown.Item href="#action3">Login</NavDropdown.Item>
        <NavDropdown.Item href="#action4">SignUp</NavDropdown.Item>
    </NavDropdown>
    </Nav>
  </Navbar.Collapse>
</Navbar>
</>
  );
};

export default Header;