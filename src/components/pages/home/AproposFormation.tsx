import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import whatupImage from '/public/images/whatsapp.svg';
import "../Formation/styleFormation.css";
import image1 from "/public/images/Slide-1.jpg";
import { Link } from "react-router-dom";

const AproposFormation = () => {
  return (
    <Row className='gap-5 my-5'>
          <h1>Notre formation</h1>
          <Col lg={12}>
            <Row>
              <Col sm={12} md={4}  className='mb-3 text-light packhovered' >
                <Card style={{ width: '100%' ,height:"100%"}}>
                  <div className="position-realtive">
                    <img className="img-fluid scaleImg rounded"  src={image1} alt=""/>
                    <div>
                      <p className="text-white bg-info fw-medium programmePostion text-center">Programme pour les jeunes</p>
                    </div>
                  </div>
                  <Card.Body>
                    <Card.Title className="mb-2 text-center fs-4"></Card.Title>
                    <Card.Subtitle className="mb-2 text-muted text-center fs-3">Base informatique</Card.Subtitle>
                    <Card.Text className="mb-2 text-muted text-center">
                      Word - Execel - PowerPoint (2016)
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
              </Col>
              <Col sm={12} md={4}  className='mb-3 text-light packhovered' >
                <Card style={{ width: '100%' ,height:"100%"}}>
                  <div className="position-realtive">
                    <img className="img-fluid scaleImg rounded"  src={image1} alt=""/>
                    <div>
                      <p className="text-white bg-info fw-medium programmePostion text-center" style={{fontSize:"9px"}}>Programme pour les chercheur d'emplois</p>
                    </div>
                  </div>
                  <Card.Body>
                    <Card.Title className="mb-2 text-center fs-4"></Card.Title>
                    <Card.Subtitle className="mb-2 text-muted text-center fs-3">Base informatique</Card.Subtitle>
                    <Card.Text className="mb-2 text-muted text-center">
                      Word - Execel - PowerPoint (2016)
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
              </Col>
              <Col sm={12} md={4}  className='mb-3 text-light packhovered' >
                <Card style={{ width: '100%' ,height:"100%"}}>
                  <div className="position-realtive">
                    <img className="img-fluid scaleImg rounded"  src={image1} alt=""/>
                    <div>
                      <p className="text-white bg-info fw-medium programmePostion text-center">Programme pour les salairies</p>
                    </div>
                  </div>
                  <Card.Body>
                    <Card.Title className="mb-2 text-center fs-4"></Card.Title>
                    <Card.Subtitle className="mb-2 text-muted text-center fs-3">Base informatique</Card.Subtitle>
                    <Card.Text className="mb-2 text-muted text-center">
                      Word - Execel - PowerPoint (2016)
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
              </Col>
            </Row>
          </Col>
        <Col>
          <div className="d-flex justify-content-center">
            <Button to="/Formation" variant="outline-secondary" as={Link}>Voir Tout les Formation</Button>
          </div>
        </Col>
      </Row>
  )
}

export default AproposFormation