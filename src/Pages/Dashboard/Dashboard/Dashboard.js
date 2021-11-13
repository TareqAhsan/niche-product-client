import React from "react";
import {
  Container,
  Button,
  Nav,
  Navbar,
  Offcanvas,
} from "react-bootstrap";
import {
  Switch,
  Route,
  Link,
  useHistory,
  useRouteMatch,
} from "react-router-dom";
import AddAProduct from "../AddAProduct/AddAProduct";
import DashboardHome from "../DashboardHome/DashboardHome";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import ManageAllOrders from "../ManageAllOrders/ManageAllOrders";
import ManageProducts from "../ManageProducts/ManageProducts";
import useAuth from "../../../hooks/useAuth";
import Pay from "../Pay/Pay";
import Myorders from "../Myorders/Myorders";
import AdminRoute from "../../Login/AdminRoute/AdminRoute";
import Review from "../Review/Review";
// import Myorders from "../Myorders/Myorders";

const Dashboard = () => {
  const history = useHistory();
  let { path, url } = useRouteMatch();
  const { allContext } = useAuth();
  const { logout, admin } = allContext;
  const handleLogout = () => {
    logout(history);
  };
  return (
    <div>
      <Navbar sticky="top" bg="dark" expand={false}>
        <Container>
          <Navbar.Brand className="text-white fw-bold" href="#">
            Dashboard
          </Navbar.Brand>
          <Navbar.Toggle className="bg-light" aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">
                Dashboard
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link as={Link} to={`${url}`}>
                  <Button variant="success" className="w-100">
                    Dashboard
                  </Button>
                </Nav.Link>
                {admin ? (
                  <>
                    <Nav.Link as={Link} to={`${url}/makeadmin`}>
                      <Button variant="success" className="w-100">
                        Add Admin
                      </Button>
                    </Nav.Link>
                    <Nav.Link as={Link} to={`${url}/addproduct`}>
                      <Button variant="success" className="w-100">
                        Add Product
                      </Button>
                    </Nav.Link>
                    <Nav.Link as={Link} to={`${url}/manageproduct`}>
                      <Button variant="success" className="w-100">
                        Manage Products
                      </Button>
                    </Nav.Link>
                    <Nav.Link as={Link} to={`${url}/manageallorders`}>
                      <Button variant="success" className="w-100">
                        Manage All Orders
                      </Button>
                    </Nav.Link>
                  </>
                ) : (
                  <>
                    <Nav.Link as={Link} to={`${url}/pay`}>
                      <Button variant="success" className="w-100">
                        Payment System
                      </Button>
                    </Nav.Link>
                    <Nav.Link as={Link} to={`${url}/myorders`}>
                      <Button variant="success" className="w-100">
                        My Orders
                      </Button>
                    </Nav.Link>
                    <Nav.Link as={Link} to={`${url}/review`}>
                      <Button variant="success" className="w-100">
                        Review
                      </Button>
                    </Nav.Link>
                  </>
                )}
                <Button onClick={handleLogout} variant="primary">
                  Logout
                </Button>
                <Nav.Link as={Link} to="/">
                  <Button className="w-100" variant="primary">
                    Go to Home
                  </Button>
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
      <Switch>
        <Route exact path={path}>
          <DashboardHome />
        </Route>
        <AdminRoute path={`${path}/makeadmin`}>
          <MakeAdmin />
        </AdminRoute>
        <AdminRoute path={`${path}/addproduct`}>
          <AddAProduct />
        </AdminRoute>
        <AdminRoute path={`${path}/manageproduct`}>
          <ManageProducts />
        </AdminRoute>
        <AdminRoute path={`${path}/manageallorders`}>
          <ManageAllOrders />
        </AdminRoute>
        <Route path={`${path}/pay`}>
          <Pay />
        </Route>
        <Route path={`${path}/myorders`}>
          <Myorders />
        </Route>
        <Route path={`${path}/review`}>
          <Review />
        </Route>
      </Switch>
      {/* <Myorders/> */}
    </div>
  );
};

export default Dashboard;
