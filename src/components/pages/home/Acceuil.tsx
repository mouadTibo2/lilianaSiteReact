import Apropos from "./Apropos";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Footer from "./Footer";
import { CSSProperties } from "react";
import Slide1 from  "../../../images/Slide-1.jpg";

export default function Acceuil(){

  const styleImage: CSSProperties ={
    width:"100%",
    height:"75vh",
    backgroundSize: "cover",
  }
  const styleContent: CSSProperties ={
    marginTop:"100px",
  }
  return (
    <> 
      <div className="position-relative w-100"> 
        <div className="bg-dark opacity-50 position-absolute" style={styleImage}>
        </div>
              <img className="w-100" src={Slide1} alt="" style={styleImage} /> 
          <Row className="position-absolute top-50 start-50" style={styleContent}>
          <Col sm={12}>
          </Col>
        </Row>
      </div>
      
      <Container>
        <Row>
          <Col className='my-5'>
            <Apropos/>
          </Col>
        </Row>
      </Container>
      <div>
        <Footer/>
      </div>
      
    </>
  )
}