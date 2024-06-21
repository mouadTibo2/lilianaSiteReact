
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import whatupImage from '/public/images/whatsapp.svg';
import facebookImage from '/public/images/facebook.svg';
import instagramImage from '/public/images/instagram.svg';
import telephone from '/public/images/telephone-fill.svg';
import location from '/public/images/geo-alt-fill.svg';
import email from '/public/images/envelope-at-fill.svg';
import CatalogueFooter from '../cataloge/CatalogueFooter';
export default function Footer(){
  return (
    <>
    <Container fluid className='text-light px-1 py-3' style={{backgroundColor:"#78ABA8"}}>
      <Container>
      <Row className='gap-3'>
          <Col lg={3} className='text-center'>
            <h4 className='text-decoration-underline text-dark'>Menu</h4>
            <Nav.Link to="/" as={NavLink} className='text-decoration-underline'>Acceuil</Nav.Link>
            <Nav.Link to="/" as={NavLink} className='text-decoration-underline'>A propos</Nav.Link>
            <Nav.Link to="/Formation" as={NavLink} className='text-decoration-underline'>Formation</Nav.Link>
            <Nav.Link to="/Cataloge" as={NavLink} className='text-decoration-underline'>Catalogue</Nav.Link>
            <Nav.Link to="/Contact" as={NavLink} className='text-decoration-underline'>Contact</Nav.Link>
            <Nav.Link to="/InscriptionEnLigne" as={NavLink} className='text-decoration-underline'>Inscription en ligne</Nav.Link>
          </Col>
          <Col lg={4} >
            <h4 className='text-decoration-underline text-dark mb-3 text-center'>contact</h4>
            
            <div className='mt-2 d-flex w-100 justify-content-center'>
              <img src={telephone} alt="telephone" className='mx-3 text-dark'/>
              <p className='m-1'>+2126636737</p>
            </div>
            <div className='mt-2 d-flex w-100 justify-content-center'>
              <img src={location} alt="location" className='mx-3 text-dark'/>
              <p className='m-1'>Villa, 67, Bir Rami Ouest</p>
            </div>
            <div className='mt-2 d-flex w-100 justify-content-center'>
              <img src={email} alt="email" className='mx-3 text-dark'/>
              <p className='m-1'>onlineinstituts23@gmail.com</p>
            </div>
            <div className='mt-2 d-flex w-100 gap-2 justify-content-evenly'>
              <a href=""><img src={whatupImage} alt="whatupImage" className='mx-1'/></a>
              <a href=""><img src={facebookImage} alt="facebookImage" className='mx-1'/></a>
              <a href=""><img src={instagramImage} alt="instagramImage" className='mx-1'/></a>
            </div>
          </Col>
          <Col lg={3}className=''>
          <h4 className='text-decoration-underline text-dark mb-3 text-center'>Cataloge</h4>
            
            <div className='mt-2 d-flex w-100 justify-content-center'>
              <CatalogueFooter/>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
    </>
  )
}
