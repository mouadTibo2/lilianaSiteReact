import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import whatupImage from '/public/images/whatsapp.svg';
import facebookImage from '/public/images/facebook.svg';
import instagramImage from '/public/images/instagram.svg';
import telephone from '/public/images/telephone-fill.svg'


export default function TopNavBar() {

  return(
  <Container fluid className="pb-1"style={{backgroundColor:"#F6F5F2"}}>
    <Row className="position-relative">
      <Col md={4}>
        <div className='mt-2 d-flex w-100 justify-content-start'>
          <img src={telephone} alt="telephone" className='mx-3 text-dark'/>
          <p className='m-1'>+2126636737</p>
        </div>
      </Col>
      <Col md={4}>
        <div className='d-flex w-100 gap-2 justify-content-around p-2'>
          <a href=""><img src={whatupImage} alt="whatupImage" className='mx-1'/></a>
          <a href=""><img src={facebookImage} alt="facebookImage" className='mx-1'/></a>
          <a href=""><img src={instagramImage} alt="instagramImage" className='mx-1'/></a>
        </div>
      </Col>
      <Col md={4}>
        <div className='mt-2 d-flex w-100  justify-content-md-end justify-content-center'>
          <ButtonGroup size="sm" aria-label="First group">
            <Button className="mx-1"  variant="secondary">FR</Button> 
            <Button className="mx-1"  variant="secondary">EN</Button> 
          </ButtonGroup>
        </div>
      </Col>
    </Row>
  </Container>
  
  );
}