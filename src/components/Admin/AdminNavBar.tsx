import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../../public/images/logo921.jpg";

import { NavLink } from "react-router-dom";

const AdminNavBar= () => {
  return (
    <>
    <Navbar
        expand="lg"
        className="sticky-top shadow-sm  border-dark"
        style={{ backgroundColor: "white" }}
      >
        <Container fluid className="fw-medium">
          <Navbar.Brand to="/" as={NavLink} className="ms-2">
            <img
              src={logo}
              width="190"
              height="70"
              className=""
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link to="/Admin/CrudFormation" as={NavLink}>
                Formation
              </Nav.Link>
              <Nav.Link to="/Admin/CrudCatalogue" as={NavLink}>
                Catalogue
              </Nav.Link>
              <Nav.Link to="/Admin/CrudContact" as={NavLink}>
                Contact
              </Nav.Link>
              <Nav.Link to="/Admin/CrudInscription" as={NavLink}>
                Inscription
              </Nav.Link>
              <Nav.Link to="/Admin/CrudResevation" as={NavLink}>
                Resevation
              </Nav.Link>
              <Nav.Link to="/" as={NavLink}>
                Client
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default AdminNavBar