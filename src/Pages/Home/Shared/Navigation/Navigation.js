import React from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useAuth from "../../../../hooks/useAuth";
const Navigation = () => {
  const { allContext } = useAuth();
  const { user, logout } = allContext;
  return (
    <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/home">
          <i className="fas fa-glasses me-1"></i>SunglassShopBD
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/home">
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/exploremorehome">
              Exploremore
            </Nav.Link>
            {user?.email ? (
              <>
                <Nav.Link as={NavLink} to="/dashboard">
                  Dashboard
                </Nav.Link>
                <Nav.Link>{user?.displayName}</Nav.Link>
                <Button onClick={logout}>Logout</Button>
              </>
            ) : (
              <Nav.Link as={NavLink} to="/login">
                Login
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
