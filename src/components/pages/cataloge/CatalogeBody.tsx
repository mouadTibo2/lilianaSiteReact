import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import { Button } from "react-bootstrap";
import { useState } from "react";
import "./catalogue.css"
import xSquareImage from "/public/images/x-square.svg"
import images from "../../Data/catalogueData.json";
type imagesValue ={
  id:number;
  imagePath: string;
}
const CatalogeBody = () => {
  const [btnAnnulerCataloge, setBtnAnnulerCataloge] = useState(false); 
  const [imageClicked, setImageClicked] = useState<imagesValue>({id:0, imagePath:""});
  function handelClickedBtn(id:number, image:string){
    setBtnAnnulerCataloge(true);
    setImageClicked({id:id, imagePath:image})
  }
  const imagesMaped = images.map((image:imagesValue) => {
    return (
    <Col xs={6} md={4} className='my-3' key={image.id} onClick={() =>handelClickedBtn(image.id,image.imagePath)}>
      <Image src={image.imagePath} className='border-5' thumbnail />
    </Col>
    );
  })
  return (
    <Container>
      <Row className='justify-content-center align-items-center'>
        {imagesMaped}
        {btnAnnulerCataloge ? 
        <div className="position-relative">
          <div className="position-fixed cataloguepositiontop w-100 h-100">
            <Button size="lg" variant="dark" className="position-absolute top-0 end-0 z-10 m-2" onClick={()=> setBtnAnnulerCataloge(false)}>
              <img src={xSquareImage} alt="" />
            </Button>
          </div>
          <div className="position-fixed cataloguepositionAboveTop ">
              <Image src={imageClicked.imagePath} className='border-5' thumbnail key={imageClicked.id}/>
            <div className="position-relative">
            </div>
          </div>
        </div>
        : 
        null}
      </Row>
    </Container>
  )
}

export default CatalogeBody