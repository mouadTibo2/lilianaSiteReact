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
  formation: string,
  jourReservation: string,
  tempReservation: string,
  DateReservation:string,
}

function ReservationCart() {
  const [validated, setValidated] = useState(false);
  const [reservationOnline, setReservationOnline] = useState<reservationOnline>({nom:"", 
    preNom:"",
    formation:"",
    jourReservation: "",
    tempReservation: "",
    DateReservation:"",
    });

  const handleNom = (nom:string) => {
      nom = nom.trim();
      setReservationOnline({...reservationOnline, nom : nom});
    };
  const handlePreNom = (preNom:string) => {
      preNom = preNom;
      setReservationOnline({...reservationOnline, preNom : preNom});
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
  const handleDateReservation = (DateReservation:string) => {
    DateReservation = DateReservation;
    setReservationOnline({...reservationOnline, DateReservation : DateReservation});
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setValidated(true);
    console.log(reservationOnline)
  };

  return (
    <Container className="p-4">
      <Row className="justify-content-center">
        <Col lg={12} className="text-center mt-3">
          <h1>Resevation online</h1>
        </Col>
      </Row>
      <Form           
        noValidate
        validated={validated}
        onSubmit={(e) => handleSubmit(e)}>
        <Row className="justify-content-center">
        <Col md={6} className="mt-3">
          <Form.Label>Nom</Form.Label>
          <Form.Control type="text" placeholder="Nom" value={reservationOnline.nom} onChange={(e) => handleNom(e.currentTarget.value)} required />
        </Col>
        <Col md={6} className="mt-3">
          <Form.Label>Prenom</Form.Label>
          <Form.Control type="text" placeholder="Prenom" value={reservationOnline.preNom} onChange={(e) => handlePreNom(e.currentTarget.value)} required />
        </Col>
        <Col md={6} className="mt-3">
          <Form.Label>Date Reservation</Form.Label>
            <Form.Control
              type="date"
              placeholder="Date Reservation"
              value={reservationOnline.DateReservation}
              onChange={(e) => handleDateReservation(e.currentTarget.value)}
              required
            />
        </Col>
        <Col md={6} className="mt-3">
          <Form.Label>Formation</Form.Label>
          <Form.Select aria-label="Default select example" onChange={(e) => handleFormation(e.currentTarget.value)} required> 
            <option value="">Open this select menu</option>
            <option value="Formation 1">Formation 1</option>
            <option value="Formation 2">Formation 2</option>
            <option value="Formation 3">Formation 3</option>
          </Form.Select>
        </Col>
        <Col md={6} className="mt-3">
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
        <Col xm={3} className="mt-3">
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
          <div className="d-flex justify-content-center mb-2">
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