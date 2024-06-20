import imageHeaderFormation from "/public/images/formationContinue.jfif"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { CSSProperties } from "react";

export default function  headerFo() {
  const styleImage: CSSProperties ={
    width:"100%",
    height:"75vh",
    backgroundSize: "cover",
  }
  const styleContent: CSSProperties ={
    marginTop:"100px",
  }
  return (
  <div className="position-relative w-100"> 
    <div className="bg-dark opacity-50 position-absolute" style={styleImage}>
    </div>
          <img className="w-100" src={imageHeaderFormation} alt="" style={styleImage} /> 
      <Row className="position-absolute top-50 start-50" style={styleContent}>
      <Col sm={12}>
      </Col>
      <Col sm={12}>
      </Col>
    </Row>
  </div>
  );
}
