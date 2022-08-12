import React, { useState } from 'react';
import { Container, Navbar, Form, Nav, NavDropdown, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { FilterProductsThunk } from '../store/slices/products.slice';
import { useNavigate } from 'react-router-dom';
import Offcanvas from 'react-bootstrap/Offcanvas';
import CartSideBar from './CartSideBar';
import { useEffect } from 'react';
import { CartThunk } from '../store/slices/cart.slice';

const NavBar = () => {

  
  const dispatch = useDispatch();
  const cart = useSelector(state=> state?.cart.data?.cart.products);
  const [searchValue, setSearchValue] = useState("");
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const logOut = () => {
    localStorage.setItem("token", "");
    navigate("/login");
  }
  
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    
    if(token){
      setShow(true);
    } else{
     alert("You dont have an account, please Log in")
      navigate("/login")

    }
  }

  useEffect(()=>{
        dispatch(CartThunk());
  },[])



  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">Solo Cogo</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="/#/">Home</Nav.Link>
              
              <Nav.Link href="/#/purchases">Purchases</Nav.Link>
              <Nav.Link   onClick={handleShow}>Show Cart</Nav.Link>
              <NavDropdown title="Settings" id="navbarScrollingDropdown">
                <NavDropdown.Item href="/#/login">Login</NavDropdown.Item>
                <NavDropdown.Item href="/#/singup">
                  Sing Up
                </NavDropdown.Item>
                <NavDropdown.Divider />
                {


                }
                <NavDropdown.Item as="button" onClick={logOut}>
                  Log Out
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                onChange={e => setSearchValue(e.target.value)}
                value={searchValue}
              />
              <Button variant="outline-dark" onClick={() => dispatch(FilterProductsThunk(searchValue))}>Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <ul>
                {
                  cart?.map(c=>(
                    <li>{c.title}: {c.price}$</li>
                  ))
                }

        </ul>
        </Offcanvas.Body>
      </Offcanvas>  


   
    </>
  );
};

export default NavBar;