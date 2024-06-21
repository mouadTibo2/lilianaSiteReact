import "./styleFormation.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import FormationChercheurEmploi from "./FormationChercheurEmploi";
import FormationSalaries from "./FormationSalaries";
import FormationJeune from "./FormationJeune";
import FormationPourTout from "./FormationPourTout";



const bodyFo = () => {
  /* 1 = Formation chercheur d'emploi 
    2 = Formation des salariés
    3 = Formation des Jeune
    4 = tout
  */


  return (
    <Container className='my-5'>
      <Row className='justify-content-evenly my-5'>
        <FormationSalaries />
      </Row>
      <Row className='justify-content-evenly my-5'>
        <FormationChercheurEmploi/>
      </Row>
      <Row className='justify-content-evenly my-5'>
        <FormationJeune/>
      </Row>
      <Row className='justify-content-evenly my-5'>
        <FormationPourTout/>
      </Row>
   </Container>
  )
}

export default bodyFo
