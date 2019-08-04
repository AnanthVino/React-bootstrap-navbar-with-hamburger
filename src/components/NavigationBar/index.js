import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, Container } from 'react-bootstrap';
import styled from 'styled-components';
import logoImage from '../../assets/logo_small.png';

const Styles = styled.div`
  .navbar {
    background-color: #FF6347;
    min-height:80px;
    box-shadow: 1px 1px 1px 1px #FF6347;
  }

  .navbar-collapse .navbar-nav .nav-link {
    font-size: 13px;
    text-transform: uppercase;
    font-weight: 400;
    letter-spacing: 1px;
    color: #fff;

    &:hover {
      background-color: white;
      color: #FF6347;
    }

    &:focus {
      color: #FF6347;
      background-color: white;
    }
  }
`;

export const NavigationBar = () => (
  <Styles>
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="/"><img src={logoImage} alt="logo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Item>
              <Nav.Link as={Link} to="/">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/about">About</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/media">Media</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/contact">Contact us</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </Styles >
)
