import Footer from "../home/Footer";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { CSSProperties } from "react";
import imageInscrition from "../../../../public/images/inscriptionOnligne.jpg";
import Reserv from "../../Resevation/Reserv";
import NavBar from "../../Navbar/NavBar";
import OptionDesFormation from "../../Resevation/OptionDesFormation";
interface ContactData {
  nom: string;
  preNom: string;
  email: string;
  numeroTelephone: string;
  dateNaissaince: string;
  sexe: string;
  ville: string;
  formation: string;
  commentaire: string;
}

export default function InscriptionEnLigne() {
  const styleImage: CSSProperties = {
    width: "100%",
    height: "61vh",
  };
  const styleContent: CSSProperties = {
    marginTop: "100px",
  };
  const [validated, setValidated] = useState(false);
  const [inscriptiontData, setInscriptiontData] = useState<ContactData>({
    nom: "",
    preNom: "",
    email: "",
    numeroTelephone: "",
    dateNaissaince: "",
    sexe: "",
    ville: "",
    formation: "",
    commentaire: "",
  });

  const handleNom = (nom: string) => {
    nom = nom.trim();
    setInscriptiontData({ ...inscriptiontData, nom: nom });
  };
  const handlePreNom = (preNom: string) => {
    preNom = preNom;
    setInscriptiontData({ ...inscriptiontData, preNom: preNom });
  };
  const handleEmail = (email: string) => {
    email = email.trim();
    setInscriptiontData({ ...inscriptiontData, email: email });
  };
  const handleNumeroTelephone = (numeroTelephone: string) => {
    numeroTelephone = numeroTelephone.trim();
    setInscriptiontData({
      ...inscriptiontData,
      numeroTelephone: numeroTelephone,
    });
  };
  const handleDateNaissaince = (dateNaissaince: string) => {
    dateNaissaince = dateNaissaince;
    setInscriptiontData({
      ...inscriptiontData,
      dateNaissaince: dateNaissaince,
    });
  };
  const handleSexe = (sexe: string) => {
    sexe = sexe;
    setInscriptiontData({ ...inscriptiontData, sexe: sexe });
  };
  const handleVille = (ville: string) => {
    ville = ville;
    setInscriptiontData({ ...inscriptiontData, ville: ville });
  };
  const handleFormation = (formation: string) => {
    formation = formation;
    setInscriptiontData({ ...inscriptiontData, formation: formation });
  };
  const handleCommentaire = (commentaire: string) => {
    commentaire = commentaire;
    setInscriptiontData({ ...inscriptiontData, commentaire: commentaire });
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setValidated(true);
    console.log(inscriptiontData);
  };
  return (
    <>
    <NavBar/>
      <div className="position-relative w-100">
        <div className="position-absolute" style={styleImage}></div>
        <img
          className="w-100 vh-100 img-fluid imginscription"
          src={imageInscrition}
          alt=""
          style={styleImage}
        />
        <Row className="inscrptionPosition" style={styleContent}>
          <Col sm={12} className="">
            <h1>Inscription En Ligne</h1>
          </Col>
        </Row>
      </div>
      <Reserv/>
      <Container fluid="xxl" className="w-75 mt-5">
        <Form
          noValidate
          validated={validated}
          onSubmit={(e) => handleSubmit(e)}
        >
          <Row className="justify-content-center mb-4" data-aos="fade-right">
            <Col md={6} className="mt-3">
              <Form.Label>Nom</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nom"
                value={inscriptiontData.nom}
                onChange={(e) => handleNom(e.currentTarget.value)}
                required
              />
            </Col>
            <Col md={6} className="mt-3">
              <Form.Label>Prenom</Form.Label>
              <Form.Control
                type="text"
                placeholder="Prenom"
                value={inscriptiontData.preNom}
                onChange={(e) => handlePreNom(e.currentTarget.value)}
                required
              />
            </Col>
            <Col md={12} className="mt-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                value={inscriptiontData.email}
                onChange={(e) => handleEmail(e.currentTarget.value)}
                required
              />
            </Col>
            <Col md={12} className="mt-3">
              <Form.Label>Numéro de téléphone</Form.Label>
              <Form.Control
                type="text"
                maxLength={20}
                placeholder="Numero Telephone"
                value={inscriptiontData.numeroTelephone}
                onChange={(e) => handleNumeroTelephone(e.currentTarget.value)}
                required
              />
            </Col>
            <Col md={6} className="mt-3">
              <Form.Label>Date de naissaince</Form.Label>
              <Form.Control
                type="Date"
                value={inscriptiontData.dateNaissaince}
                onChange={(e) => handleDateNaissaince(e.currentTarget.value)}
                required
              />
            </Col>
            <Col md={6} className="mt-3">
              <Form.Label>Sexe</Form.Label>
              <Form.Select
                aria-label="Sexe"
                onChange={(e) => handleSexe(e.currentTarget.value)}
              >
                <option value="">Open this select menu</option>
                <option value="homme">Homme</option>
                <option value="femme">Femme</option>
                <option value="autre">Three</option>
              </Form.Select>
            </Col>
            <Col md={12} className="mt-4">
              <Form.Label>Ville</Form.Label>
              <Form.Select
                aria-label="Default select example"
                onChange={(e) => handleVille(e.currentTarget.value)}
              >
                <option value="">Open this select menu</option>
                <option value="kenitra">Kenitra</option>
                <option value="rabat">Rabat</option>
                <option value="casablanca">Casablanca</option>
              </Form.Select>
            </Col>
            <Col md={12} className="mt-4">
              <Form.Label>Formation</Form.Label>
              <Form.Select
                aria-label="Default select example"
                onChange={(e) => handleFormation(e.currentTarget.value)}
              >
                <option value="">Open this select menu</option>
                <OptionDesFormation />
              </Form.Select>
            </Col>
            <Col md={12} className="mt-4">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Commenter ici"
                value={inscriptiontData.commentaire}
                onChange={(e) => handleCommentaire(e.currentTarget.value)}
                required
              />
            </Col>
            <Col md={12} className="mt-4">
              <div className="d-flex justify-content-center">
                <Button size="lg" type="submit" className="w-50">
                  Inscrivez-Vous
                </Button>
              </div>
            </Col>
          </Row>
        </Form>
      </Container>
      <Footer />
    </>
  );
}
