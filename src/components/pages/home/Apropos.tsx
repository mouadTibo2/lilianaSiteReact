import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import imageSalirie from '../../../images/formationPourLesSalairie.jpg'
import { CSSProperties } from 'react';
import AproposFormation from './AproposFormation';
export default function Apropos(){
  const imagesStyle : CSSProperties ={
    height: "70vh",

  }
  return (
    <>
      <div>
      <Row className='my-5 gap-5'>
          <Col md={5}>
            <img src={imageSalirie} className="img-fluid" style={imagesStyle}alt="" />
          </Col>
          <Col md={6}>
            <div className="d-flex flex-column justify-content-between w-100 h-100">
              <h1>Formation des salariés</h1>
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
              <Button variant="outline-secondary">Voir la Formation</Button>{' '}
            </div>
          </Col>
      </Row>
      <Row className='gap-5 my-5'>
        <Col md={6}>
          <div className="d-flex flex-column justify-content-between w-100 h-100">
          <h1>Formation des demandeurs d'emploi</h1>
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
            <Button variant="outline-secondary">Voir la Formation</Button>{' '}
          </div>
        </Col>
        <Col md={5} className=''>
          <img src={imageSalirie} className="img-fluid" style={imagesStyle}alt="" />
        </Col>
      </Row>
      <Row className='gap-5 my-5'>
        <Col md={5}>
          <img src={imageSalirie} className="img-fluid" style={imagesStyle} alt="" />
        </Col>
        <Col md={6}>
          <div className="d-flex flex-column justify-content-between w-100 h-100">
            <h1>Formation des jeunes</h1>
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
            <Button variant="outline-secondary">Voir la Formation</Button>{' '}
          </div>
        </Col>
      </Row>
      <AproposFormation/>
    </div>
    
    </>
  )
}