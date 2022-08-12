
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
  import Offcanvas from 'react-bootstrap/Offcanvas';
import { useDispatch } from 'react-redux';
import { getProductsThunk } from '../store/slices/products.slice';

const CartSideBar = () => {
    
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
    
    const dispatch= useDispatch();

    useEffect(()=>{
        dispatch(getProductsThunk())

    },[]);


    return (
        <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    );
};

export default CartSideBar;