import React from "react";
import  {useHistory} from 'react-router-dom'
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useAuth from "../../../../hooks/useAuth";
const Navigation = () => {
  const history = useHistory()
  const { allContext } = useAuth();
  const { user, logout } = allContext;
  const handlelogout = ()=>{
    logout(history)
  }
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
                <Button onClick={handlelogout}>Logout</Button>
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
