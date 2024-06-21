import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import plateFormImage from "/public/images/arrow-bar-right.svg"
import TopNavBar from "./TopNavBar";
import { useState } from 'react';
import { useEffect } from 'react';
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function NavBar() {
  const {t} = useTranslation();
  const [screenWidth, setScreenWidth]= useState(window.screen.width);
  function screenChange(){
    setScreenWidth(window.screen.width);
  }
  useEffect(()=>{
    window.addEventListener("resize",screenChange);
  },[]);
  /* console.log(screenWidth); */
 let resultBottom = (screenWidth  <= 990 ? <TopNavBar/> : null);
 let resultTop = (screenWidth  >= 991 ? <TopNavBar/> : null)
  return (
  <>
    {resultTop}
    <Navbar expand="lg" className="sticky-top shadow-sm  border-dark" style={{backgroundColor:"#F0EBE3"}}>
      <Container fluid className="fw-medium">
        <Navbar.Brand to="/" as={NavLink} className="ms-2">Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">  
            <Nav.Link to="/" as={NavLink}>{t('acceuil')}</Nav.Link>
            <Nav.Link to="/" as={NavLink}>{t('apropos')}</Nav.Link>
            <Nav.Link to="/Formation" as={NavLink}>{t('formation')}</Nav.Link>
            <Nav.Link to="/Cataloge" as={NavLink}>{t('catalogue')}</Nav.Link>
            <Nav.Link to="/Contact" as={NavLink}>{t('contact')}</Nav.Link>
            <Nav.Link to="/InscriptionEnLigne" as={NavLink}>{t('inscriptionEnLigne')}</Nav.Link>
          </Nav>
          
        </Navbar.Collapse>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto mb-2">
            <Nav.Link >
              <Button>{t('plateForme')}
                <img src={plateFormImage} alt="plateFormImage" />
              </Button>
            </Nav.Link>
          </Nav>
        {resultBottom}
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </>
  );
}
