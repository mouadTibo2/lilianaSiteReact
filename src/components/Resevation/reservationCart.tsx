import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { Button } from "react-bootstrap";
import { useState } from 'react';
import { JourEtTempDisponibleData } from './JourEtTempDisponible';

interface reservationOnline {
  nom: string,
  preNom: string,
  email: string,
  numeroTelephone: string,   
  formation: string,
  jourReservation: string,
  tempReservation: string,
}

function ReservationCart() {
  const [validated, setValidated] = useState(false);
  const [reservationOnline, setReservationOnline] = useState<reservationOnline>({nom:"", 
    preNom:"",
    email:"", 
    numeroTelephone:"",
    formation:"",
    jourReservation: "",
    tempReservation: "",
    });

  const handleNom = (nom:string) => {
      nom = nom.trim();
      setReservationOnline({...reservationOnline, nom : nom});
    };
  const handlePreNom = (preNom:string) => {
      preNom = preNom;
      setReservationOnline({...reservationOnline, preNom : preNom});
   };
  const handleEmail = (email:string) => {
    email = email.trim();
    setReservationOnline({...reservationOnline, email : email});
  };
  const handleNumeroTelephone = (numeroTelephone:string) => {
    numeroTelephone = numeroTelephone.trim();
    setReservationOnline({...reservationOnline, numeroTelephone : numeroTelephone});
  };
  const handleFormation = (formation:string) => {
    formation = formation;
    setReservationOnline({...reservationOnline, formation : formation});
  };
  const handleJourReservation = (jourReservation:string) => {
    jourReservation = jourReservation;
    setReservationOnline({...reservationOnline, jourReservation : jourReservation});
  };
  const handleTempReservation = (tempReservation:string) => {
    tempReservation = tempReservation;
    setReservationOnline({...reservationOnline, tempReservation : tempReservation});
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setValidated(true);
    console.log(reservationOnline)
  };

  return (
    <Container className="mb-4">
      <Row className="justify-content-center my-2">
        <Col lg={12} className="text-center">
          <h1>Resevation online</h1>
        </Col>
      </Row>
      <Form           
        noValidate
        validated={validated}
        onSubmit={(e) => handleSubmit(e)}>
        <Row className="justify-content-center">
        <Col xm={6} className="mt-3">
          <Form.Label>Nom</Form.Label>
          <Form.Control type="text" placeholder="Nom" value={reservationOnline.nom} onChange={(e) => handleNom(e.currentTarget.value)} required />
        </Col>
        <Col xm={6} className="mt-3">
          <Form.Label>Prenom</Form.Label>
          <Form.Control type="text" placeholder="Prenom" value={reservationOnline.preNom} onChange={(e) => handlePreNom(e.currentTarget.value)} required />
        </Col>
        <Col md={6} className="mt-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="name@example.com"
            value={reservationOnline.email}
            onChange={(e) => handleEmail(e.currentTarget.value)}
            required
          />
        </Col>
        <Col md={6} className="mt-3">
          <Form.Label>Numéro de téléphone</Form.Label>
            <Form.Control
              type="text"
              maxLength={20}
              placeholder="Numero Telephone"
              value={reservationOnline.numeroTelephone}
              onChange={(e) => handleNumeroTelephone(e.currentTarget.value)}
              required
            />
        </Col>
        <Col md={6} className="mt-4">
          <Form.Label>Formation</Form.Label>
          <Form.Select aria-label="Default select example" onChange={(e) => handleFormation(e.currentTarget.value)} required> 
            <option value="">Open this select menu</option>
            <option value="homme">Formation 1</option>
            <option value="femme">Formation 2</option>
            <option value="autre">Formation 3</option>
          </Form.Select>
        </Col>
        <Col xm={3} className="mt-4">
          <Form.Label>Select a date</Form.Label>
            <Form.Select aria-label="Default select example" onChange={(e) => handleJourReservation(e.currentTarget.value)} required> 
              <option value="">jour disponible</option>
              <option value="Lundi">Lundi</option>
              <option value="Mardi">Mardi</option>
              <option value="Mercredi">Mercredi</option>
              <option value="jeudi">jeudi</option>
              <option value="vendredi">vendredi</option>
          </Form.Select>
        </Col>
        <Col xm={3} className="mt-4">
        <Form.Label>Select a date</Form.Label>
            <Form.Select aria-label="Default select example" onChange={(e) => handleTempReservation(e.currentTarget.value)} required> 
              <option value="">temp disponible</option>
              <option value="10h-11h">{JourEtTempDisponibleData.Lundi[0]}</option>
              <option value="11h-12h">11h-12h</option>
              <option value="2h-3h">2h-3h</option>
              <option value="3h-4h">3h-4h</option>
              <option value="4h-5h">4h-5h</option>
          </Form.Select>
        </Col>
        <Col md={12} className="mt-4"> 
          <div className="d-flex justify-content-center">
            <Button size="lg" type="submit" className="w-50">
              Resever-Moi
            </Button>
          </div>
        </Col>
        </Row>
      </Form>
  </Container>
  )
}

export default ReservationCart;