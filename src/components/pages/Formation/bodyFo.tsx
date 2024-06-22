import "./styleFormation.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import FormationDisponible from "./FormationDisponible"



const bodyFo = () => {
  /* 1 = Formation chercheur d'emploi 
    2 = Formation des salariés
    3 = Formation des Jeune
    4 = tout
  */


  return (
    <Container className='my-5'>
      <Row className='justify-content-evenly my-5'>
        <FormationDisponible/>
      </Row>
   </Container>
  )
}

export default bodyFo
