import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { useState } from "react";
import { JourEtTempDisponibleData } from "./JourEtTempDisponible";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import OptionDesFormation from "./OptionDesFormation"

interface reservationOnline {
  nom: string;
  preNom: string;
  formation: string;
  tempReservation: string;
  DateReservation: string;
}

function ReservationCart() {
  const [startDate, setStartDate] = useState(new Date);
  const isWeekday = (date: Date) => {
    const day = date.getDay();
    return day !== 0 && day !== 6;
  };

  useEffect(() => {
    console.log( (startDate.getMonth()+1).toString()+"-" + startDate.getDate().toString()+"-" + startDate.getFullYear().toString());
    
  });

  const [validated, setValidated] = useState(false);
  const [reservationOnline, setReservationOnline] = useState<reservationOnline>(
    {
      nom: "",
      preNom: "",
      formation: "",
      tempReservation: "",
      DateReservation: "",
    }
  );
  const handleNom = (nom: string) => {
    nom = nom.trim();
    setReservationOnline({ ...reservationOnline, nom: nom });
  };
  const handlePreNom = (preNom: string) => {
    preNom = preNom;
    setReservationOnline({ ...reservationOnline, preNom: preNom });
  };
  const handleFormation = (formation: string) => {
    formation = formation;
    setReservationOnline({ ...reservationOnline, formation: formation });
  };
  const handleTempReservation = (tempReservation: string) => {
    tempReservation = tempReservation;
    setReservationOnline({
      ...reservationOnline,
      tempReservation: tempReservation,
    });
  };
  const handleDateReservation = (date: Date):void => {
    setStartDate(date);
    const DateReservation = (startDate.getMonth()+1).toString()+"-" + startDate.getDate().toString()+"-" + startDate.getFullYear().toString();
    setReservationOnline({...reservationOnline, DateReservation :DateReservation});
  };
  

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setValidated(true);
    console.log(reservationOnline);
  };

  return (
    <Container className="p-4">
      <Row className="justify-content-center">
        <Col lg={12} className="text-center mt-3">
          <h1>Resevation online</h1>
        </Col>
      </Row>
      <Form noValidate validated={validated} onSubmit={(e) => handleSubmit(e)}>
        <Row className="justify-content-center">
          <Col md={6} className="mt-3">
            <Form.Label>Nom</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nom"
              value={reservationOnline.nom}
              onChange={(e) => handleNom(e.currentTarget.value)}
              required
            />
          </Col>
          <Col md={6} className="mt-3">
            <Form.Label>Prenom</Form.Label>
            <Form.Control
              type="text"
              placeholder="Prenom"
              value={reservationOnline.preNom}
              onChange={(e) => handlePreNom(e.currentTarget.value)}
              required
            />
          </Col>
          <Col md={6} className="mt-3">
            <Form.Label>Formation</Form.Label>
            <Form.Select
              size="sm"
              aria-label="Default select example"
              onChange={(e) => handleFormation(e.currentTarget.value)}
              required
            >
              <option value="">Open this select menu</option>
              <OptionDesFormation/>
            </Form.Select>
          </Col>
          <Col md={6} className="mt-3">
            <Form.Label htmlFor="current-date" className="mt-3 me-5 d-block">
              {" "}
              Date Reservation
            </Form.Label>
            <DatePicker
             showIcon className="text-center"
              selected={startDate}
              onChange={(date) => handleDateReservation(date)}
              
              filterDate={isWeekday}
              placeholderText="Select a weekday"
            />
          </Col>
          <Col xm={3} className="mt-3">
            <Form.Label>Select a date</Form.Label>
            <Form.Select
              aria-label="Default select example"
              onChange={(e) => handleTempReservation(e.currentTarget.value)}
              required
            >
              <option value="">temp disponible</option>
              <option value="10h-11h">
                {JourEtTempDisponibleData.Lundi[0]}
              </option>
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
  );
}

export default ReservationCart;
