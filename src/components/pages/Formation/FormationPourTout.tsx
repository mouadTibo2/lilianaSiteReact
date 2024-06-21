

import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import whatupImage from '/public/images/whatsapp.svg';
import "./styleFormation.css"

import formationData from "../../Data/formationData.json";

type formationDataValue = {
  idFormation: number,
  audience: number,
  titreformation: string,
  imageFormation: string,
  descriptionFormation: string
}
function FormationPourTout() {

  
  const FormationPourToutMaped = formationData.map((item:formationDataValue) =>{
    return (
      <Col sm={12} md={4}  className='mb-3 text-light packhovered' key={item.idFormation}>
      <Card style={{ width: '100%' ,height:"100%"}}>
        <div className="position-realtive">
          <img className="img-fluid scaleImg rounded"  src={item.imageFormation} alt=""/>
          <div>
            <p className="text-white bg-info fw-medium programmePostion">Programme</p>
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
    </Col>)})
  return (<>
    {FormationPourToutMaped}
  </>
  )
}

export default FormationPourTout;