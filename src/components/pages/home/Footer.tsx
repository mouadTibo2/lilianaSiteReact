import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import whatupImage from "/public/images/whatsapp.svg";
import facebookImage from "/public/images/facebook.svg";
import instagramImage from "/public/images/instagram.svg";
import telephone from "/public/images/telephone-fill.svg";
import location from "/public/images/geo-alt-fill.svg";
import email from "/public/images/envelope-at-fill.svg";
import CatalogueFooter from "../cataloge/CatalogueFooter";
import AOS from 'aos';
import { useEffect } from "react";

export default function Footer() {
  useEffect(() => {
    AOS.init({
      offset: 190,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
    });
  }, [])
  return (
    <>
      <Container
        fluid
        className="text-light px-1 py-3"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        style={{ backgroundColor: "#78ABA8" }}
      >
        <Container
        >
          <Row className="gap-3">
            <Col lg={3} className="text-start">
              <h4 className="fw-bold text-dark">Menu</h4>
              <Nav.Link
                to="/"
                as={NavLink}
                className="text-decoration-underline"
              >
                Acceuil
              </Nav.Link>
              <Nav.Link
                to="/"
                as={NavLink}
                className="text-decoration-underline"
              >
                A propos
              </Nav.Link>
              <Nav.Link
                to="/Formation"
                as={NavLink}
                className="text-decoration-underline"
              >
                Formation
              </Nav.Link>
              <Nav.Link
                to="/Cataloge"
                as={NavLink}
                className="text-decoration-underline"
              >
                Catalogue
              </Nav.Link>
              <Nav.Link
                to="/Contact"
                as={NavLink}
                className="text-decoration-underline"
              >
                Contact
              </Nav.Link>
              <Nav.Link
                to="/InscriptionEnLigne"
                as={NavLink}
                className="text-decoration-underline"
              >
                Inscription en ligne
              </Nav.Link>
            </Col>
            <Col lg={4}>
              <h4 className="fw-bold text-dark mb-3 text-start">contact</h4>
              <div className="d-flex w-100 justify-content-start">
                <img
                  src={telephone}
                  alt="telephone"
                  className="me-3 text-dark"
                />
                <p className="m-1">+212632001896</p>
              </div>
              <div className="mt-2 d-flex w-100 justify-content-start">
                <img src={location} alt="location" className="me-3 text-dark" />
                <p className="m-1">Villa, 67, Bir Rami Ouest</p>
              </div>
              <div className="mt-2 d-flex w-100 justify-content-start">
                <img src={email} alt="email" className="me-3 text-dark" />
                <p className="m-1">onlineinstituts23@gmail.com</p>
              </div>
              <div className="mt-2 d-flex w-100 justify-content-around">
                <a target="_blank" href="https://api.whatsapp.com/send?phone=+212632001896&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20Varela%202.">
                  <img src={whatupImage} alt="whatupImage" className="me-1" />
                </a>
                <a target="_blank" href="https://www.facebook.com/LilianaDev">
                  <img
                    src={facebookImage}
                    alt="facebookImage"
                    className="me-1"
                  />
                </a>
                <a target="_blank" href="https://www.instagram.com/online_institut9?igsh=MWRvMHk2b3lmMTUzbA==">
                  <img
                    src={instagramImage}
                    alt="instagramImage"
                    className="me-1"
                  />
                </a>
              </div>
            </Col>
            <Col lg={3} className="text-start">
              <h4 className="fw-bold text-dark mb-3">Catalogue</h4>
              <CatalogueFooter />
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}
