import Footer from "../home/Footer";
import { CSSProperties } from "react";
import CatalogeBody from "./CatalogeBody";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import bgCatalogue from "../../../../public/images/bgCatalogue.jpg";
export default function Cataloge() {
  const styleImage: CSSProperties = {
    width: "100%",
    height: "61vh",
  };
  const styleContent: CSSProperties = {
    marginTop: "100px",
  };
  return (
    <>
      <div className="position-relative w-100">
        <div className="position-absolute" style={styleImage}></div>
        <img
          className="w-100 vh-100 img-fluid opacity-75"
          src={bgCatalogue}
          alt=""
          style={styleImage}
        />
        <Row className="contactposition" style={styleContent}>
          <Col sm={12} className="">
            <h1>Catalogue</h1>
          </Col>
        </Row>
      </div>

      <h1 className="my-3 text-center text-secondary">Notre Catalogue</h1>
      <CatalogeBody />

      <Footer />
    </>
  );
}
