import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import image1 from "../../../images/formationContinue.jfif"

const CatalogeBody = () => {
  return (
    <Container>
      <Row>
        <h1 className='my-3'>Notre Catalogue</h1>
        <Col xs={6} md={4} className='my-3'>
          <Image src={image1} className='border-5' thumbnail />
        </Col>
        <Col xs={6} md={4} className='my-3' >
          <Image src={image1} className='border-5' thumbnail />
        </Col>
        <Col xs={6} md={4} className='my-3'>
          <Image src={image1} className='border-5' thumbnail />
        </Col>
      </Row>
    </Container>
  )
}

export default CatalogeBody