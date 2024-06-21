

import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import whatupImage from '/public/images/whatsapp.svg';
import "./styleFormation.css";
import formationData from "../../Data/formationData.json";

import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import MWordImage from "/public/images/Mwordimage.png"
import MPImage from "/public/images/powerPoint.png"
import MEImage from "/public/images/excel.png"
import { useState } from 'react';
type formationDataValue = {
  idFormation: number,
  audience: number,
  titreformation: string,
  imageFormation: string,
  descriptionFormation: string
}
function FormationChercheurEmploi() {

  const FormationChercheurEmploiMaped = formationData.map((item:formationDataValue) =>{
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
  
    <Col sm={12} md={4}  className='mb-3 text-light packhovered' key={item.idFormation}>
      <Card style={{ width: '100%' ,height:"100%"}}>
        <div className="position-realtive">
          <img className="img-fluid scaleImg rounded"  src={item.imageFormation} alt=""/>
          <div>
          <Button variant="primary" className="text-white bg-info fw-medium programmePostion" onClick={handleShow}>
            Programme
          </Button>
          </div>
        </div>
        <Card.Body>
          <Card.Title className="mb-2 text-center fs-4">{item.titreformation}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted text-center fs-3"></Card.Subtitle>
          <Card.Text className="mb-2 text-muted text-center">
          {item.descriptionFormation}
          </Card.Text>
          <div className="d-flex justify-content-end">
            <Button size="sm" variant="outline-success">
              contacter-Nous 
              <span className="ms-3"><img src={whatupImage}/></span>
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
          <Modal.Title>Burautique</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row className='my-5 gap-5'>
              <Col md={5}>
                <img src={MWordImage} className="img-fluid w-100 h-100 rounded" alt="" />
              </Col>
              <Col md={6}>
                <div className="d-flex flex-column justify-content-between w-100 h-100">
                  <h1>Word</h1>
                  <h3>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laborum explicabo recusandae facilis
                    cupiditate.
                  </h3>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Odit architecto molestias quidem quibusdam maiores fugiat! Temporibus necessitatibus rem,
                    ipsam modi sit consectetur nulla facilis ullam voluptate animi accusantium, repudiandae provident!
                  </p>
                </div>
              </Col>
            </Row>
            <Row className='my-5 gap-5'>
              <Col md={6}>
                <div className="d-flex flex-column justify-content-between w-100 h-100">
                  <h1>Excel</h1>
                  <h3>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laborum explicabo recusandae facilis
                    cupiditate.
                  </h3>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Odit architecto molestias quidem quibusdam maiores fugiat! Temporibus necessitatibus rem,
                    ipsam modi sit consectetur nulla facilis ullam voluptate animi accusantium, repudiandae provident!
                  </p>
                </div>
              </Col>
              <Col md={5}>
                <img src={MEImage} className="img-fluid w-100 h-100 rounded" alt="" />
              </Col>
            </Row>
            <Row className='my-5 gap-5'>
              <Col md={5}>
                <img src={MPImage} className="img-fluid w-100 h-100 rounded" alt="" />
              </Col>
              <Col md={6}>
                <div className="d-flex flex-column justify-content-between w-100 h-100">
                  <h1>Power Point</h1>
                  <h3>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laborum explicabo recusandae facilis
                    cupiditate.
                  </h3>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Odit architecto molestias quidem quibusdam maiores fugiat! Temporibus necessitatibus rem,
                    ipsam modi sit consectetur nulla facilis ullam voluptate animi accusantium, repudiandae provident!
                  </p>
                </div>
              </Col>
            </Row>
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

export default FormationChercheurEmploi;