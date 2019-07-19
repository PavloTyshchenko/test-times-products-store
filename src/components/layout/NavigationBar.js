import React from 'react'
import { Navbar } from 'react-bootstrap';

const NavigationBar = () => {

    return (
        <Navbar bg="primary" variant="dark" className="mb-3">
            <Navbar.Brand href="#home">Products Store</Navbar.Brand>
        </Navbar>
    )
};

export default NavigationBar;
