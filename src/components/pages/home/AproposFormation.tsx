import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import whatupImage from '/public/images/whatsapp.svg';
import "../Formation/styleFormation.css";
import image1 from "/public/images/management.jpg";
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";
import AOS from 'aos';
import { useEffect } from "react";

const AproposFormation = () => {
  useEffect(() => {
    AOS.init({
      offset: 190,
      duration: 200,
      easing: 'ease-in-sine',
      delay: 100,
    });
  }, [0])
  return (
    <Row className='gap-5 my-5'>
          <h1>Notre formation</h1>
          <Col lg={12}>
            <Row >
              <Col sm={12} md={4}  className='mb-3 text-light packhovered' data-aos="flip-left">
                <Card style={{ width: '100%' ,height:"100%"}}>
                  <div className="position-realtive">
                    <img className="img-fluid scaleImg rounded"  src={image1} alt=""/>
                    <div>
                      <Button to="/Formation" className="text-white bg-info fw-medium programmePostion text-center" style={{fontSize:"9px"}}as={Link}>
                        Programme pour les jeunes
                      </Button>
                    </div>
                  </div>
                  <Card.Body>
                    <Card.Title className="mb-2 text-center fs-4"></Card.Title>
                    <Card.Subtitle className="mb-2 text-muted text-center fs-3">Base informatique</Card.Subtitle>
                    <Card.Text className="mb-2 text-muted text-center">
                      Hardware-Software
                    </Card.Text>
                    <div className="d-flex justify-content-end">
                      <Button size="sm" variant="outline-success">
                        <Nav.Link href="https://api.whatsapp.com/send?phone=+212632001896&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20Varela%202.">
                          contacter-Nous
                          <span className="ms-3"><img src={whatupImage}/></span>
                        </Nav.Link>
                      </Button>
                    </div>
                </Card.Body>
                <div className="d-flex justify-content-around border" style={{fontSize:"10px"}}>
                  <div className="text-secondary py-2">30 Etudiants</div>
                  <div className="text-secondary py-2">A distance</div>
                  <div className="text-secondary py-2">Licence</div>
                </div>
                </Card>
              </Col>
              <Col sm={12} md={4}  className='mb-3 text-light packhovered' data-aos="flip-left" >
                <Card style={{ width: '100%' ,height:"100%"}}>
                  <div className="position-realtive">
                    <img className="img-fluid scaleImg rounded"  src={image1} alt=""/>
                    <div>
                      <Button to="/Formation" className="text-white bg-info fw-medium programmePostion text-center" style={{fontSize:"8px"}} as={Link}>
                        Programme pour les chercheur d'emplois
                      </Button>
                    </div>
                  </div>
                  <Card.Body>
                    <Card.Title className="mb-2 text-center fs-4"></Card.Title>
                    <Card.Subtitle className="mb-2 text-muted text-center fs-3">Burautique</Card.Subtitle>
                    <Card.Text className="mb-2 text-muted text-center">
                      Word - Execel - PowerPoint (2016)
                    </Card.Text>
                    <div className="d-flex justify-content-end">
                      <Button size="sm" variant="outline-success">
                      <Nav.Link href="https://api.whatsapp.com/send?phone=+212632001896&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20Varela%202.">
                        contacter-Nous
                        <span className="ms-3"><img src={whatupImage}/></span>
                      </Nav.Link>
                      </Button>
                    </div>
                </Card.Body>
                <div className="d-flex justify-content-around border" style={{fontSize:"10px"}}>
                  <div className="text-secondary py-2">30 Etudiants</div>
                  <div className="text-secondary py-2">A distance</div>
                  <div className="text-secondary py-2">Licence</div>
                </div>
                </Card>
              </Col>
              <Col sm={12} md={4}  className='mb-3 text-light packhovered' data-aos="flip-left">
                <Card style={{ width: '100%' ,height:"100%"}}>
                  <div className="position-realtive">
                    <img className="img-fluid scaleImg rounded"  src={image1} alt=""/>
                    <div>
                      <Button to="/Formation" className="text-white bg-info fw-medium programmePostion text-center" style={{fontSize:"9px"}} as={Link}>
                        Programme pour les salairies
                      </Button>
                    </div>
                  </div>
                  <Card.Body>
                    <Card.Title className="mb-2 text-center fs-4"></Card.Title>
                    <Card.Subtitle className="mb-2 text-muted text-center fs-3">Formation comptabilité Générale</Card.Subtitle>
                    <Card.Text className="mb-2 text-muted text-center">
                      Formation comptabilité Générale  - Marketing Stratégique - Marketing Digital
                    </Card.Text>
                    <div className="d-flex justify-content-end">
                      <Button size="sm" variant="outline-success">
                      <Nav.Link href="https://api.whatsapp.com/send?phone=+212632001896&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20Varela%202.">
                        contacter-Nous
                        <span className="ms-3"><img src={whatupImage}/></span>
                      </Nav.Link>
                      </Button>
                    </div>
                </Card.Body>
                <div className="d-flex justify-content-around border" style={{fontSize:"10px"}}>
                  <div className="text-secondary py-2">30 Etudiants</div>
                  <div className="text-secondary py-2">A distance</div>
                  <div className="text-secondary py-2">Licence</div>
                </div>
                </Card>
              </Col>
            </Row>
          </Col>
        <Col>
          <div className="d-flex justify-content-center">
            <Button to="/Formation" as={Link} variant="outline-secondary" >Voir Tout les Formation</Button>
          </div>
        </Col>
      </Row>
  )
}

export default AproposFormation