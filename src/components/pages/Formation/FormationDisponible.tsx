

import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import whatupImage from '/public/images/whatsapp.svg';
import "./styleFormation.css";
import formationData from "../../Data/formationData.json";
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Nav from 'react-bootstrap/Nav';
import { useState } from 'react';

function FormationDisponible() {

  const FormationChercheurEmploiMaped = formationData.map((item) =>{
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    const ModulesMaped = item.modules.map(item =>{
      return item;
    });
    console.log(ModulesMaped);
    const ModaleMaped = ModulesMaped.map(item =>{
      return (
      <Row className='my-5 gap-5 justify-content-center' key={item.moduleId}>
        <Col md={5} className='p-4 customHeight'>
          <img src={item.moduleImage} width="100%" height="100%" className="rounded" alt="" />
        </Col>
        <Col md={6} className='p-4 customHeight'>
          <div className="d-flex flex-column">
            <h3>
              {item.moduleNom}
            </h3>
            <p>
              {item.moduleObjectif}
            </p>
          </div>
        </Col>
      </Row>)
    });

    return (
  
    <Col sm={12} md={4}  className='mb-3 text-light packhovered' key={item.idFormation}>
      <Card style={{ width: '100%' ,height:"100%"}}>
        <div className="">
          <Card.Img variant="top" className="img-fluid scaleImg rounded"  src={item.imageFormation}  />
        <div>
          <Button variant="primary" className="text-white bg-info fw-medium programmePostion" onClick={handleShow}>
            Programme
          </Button>
          </div>
        </div>
        <Card.Body>
          <Card.Title className="mb-1 text-center fs-4">{item.titreformation}</Card.Title>
          <Card.Subtitle className="mb-1 text-muted text-center fs-3"></Card.Subtitle>
          <Card.Text className="mb-1 text-muted text-center">
          {item.descriptionFormation}
          </Card.Text>
          <div className="d-flex justify-content-center">
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
      <Modal fullscreen dialogClassName="modal-0w" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{item.titreformation}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            {ModaleMaped}
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Col>)})
  return (
  <>
    {FormationChercheurEmploiMaped}
  </>
  )
}

export default FormationDisponible;
  