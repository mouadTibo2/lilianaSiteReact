import Footer from "../home/Footer";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { CSSProperties } from "react";
import imageContact from "../../../../public/images/contactUs.jpg";
import Reserv from "../../Resevation/Reserv";
import NavBar from "../../Navbar/NavBar";
interface ContactData {
  nom: string;
  email: string;
  numeroTelephone: string;
  commentaire: string;
}
export default function Contact() {
  const styleImage: CSSProperties = {
    width: "100%",
    height: "61vh",
  };
  const styleContent: CSSProperties = {
    marginTop: "100px",
  };

  const [validated, setValidated] = useState(false);
  const [contactData, setContactData] = useState<ContactData>({
    nom: "",
    email: "",
    numeroTelephone: "",
    commentaire: "",
  });

  const handleNom = (nom: string) => {
    nom = nom.trim();
    setContactData({ ...contactData, nom: nom });
  };
  const handleEmail = (email: string) => {
    email = email.trim();
    setContactData({ ...contactData, email: email });
  };
  const handleNumeroTelephone = (numeroTelephone: string) => {
    numeroTelephone = numeroTelephone.trim();
    setContactData({ ...contactData, numeroTelephone: numeroTelephone });
  };
  const handleCommentaire = (commentaire: string) => {
    commentaire = commentaire;
    setContactData({ ...contactData, commentaire: commentaire });
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setValidated(true);
  };
  /* console.log(contactData); */

  return (
    <>
    <NavBar/>
      <div className="position-relative w-100">
        <div className="position-absolute" style={styleImage}></div>
        <img
          className="w-100 vh-100 img-fluid imginscription"
          src={imageContact}
          alt=""
          style={styleImage}
        />
        <Row className="contactposition" style={styleContent}>
          <Col sm={12} className="">
            <h1>Contact</h1>
          </Col>
        </Row>
      </div>
      <Reserv/>
      <Container fluid="xxl" className="w-75 vh-100 mt-5" data-aos="fade-right">
        <Form
          noValidate
          validated={validated}
          onSubmit={(e) => handleSubmit(e)}
        >
          <Row className="justify-content-center mb-4">
            <Col md={6} className="mt-3">
              <Form.Label>Nom</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nom"
                value={contactData.nom}
                onChange={(e) => handleNom(e.currentTarget.value)}
                required
              />
            </Col>
            <Col md={6} className="mt-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                value={contactData.email}
                onChange={(e) => handleEmail(e.currentTarget.value)}
                required
              />
            </Col>
            <Col md={12} className="mt-3">
              <Form.Label>Numero Telephone</Form.Label>
              <Form.Control
                type="text"
                maxLength={20}
                placeholder="Numero Telephone"
                value={contactData.numeroTelephone}
                onChange={(e) => handleNumeroTelephone(e.currentTarget.value)}
                required
              />
            </Col>
            <Col md={12} className="mt-4">
              <Form.Label>Commentaire</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Commentaire"
                value={contactData.commentaire}
                onChange={(e) => handleCommentaire(e.currentTarget.value)}
                required
              />
            </Col>
          </Row>
          <Button size="lg" type="submit">
            Envoyer
          </Button>
        </Form>
      </Container>
      <Footer />
    </>
  );
}
