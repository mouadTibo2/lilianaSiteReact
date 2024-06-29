import DataTable from 'react-data-table-component';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import trash from "../../../public/images/trash3-fill.svg";
import update from "../../../public/images/pencil.svg";
import view from "../../../public/images/eye-fill.svg";
import Offcanvas from 'react-bootstrap/Offcanvas';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import AdminNavBar from './AdminNavBar';
import {useEffect, useState} from 'react'
const customStyles = {
	rows: {
		style: {
			minHeight: '80px', // override the row height
		},
	},
	headCells: {
		style: {
			paddingLeft: '10px', // override the cell padding for head cells
			paddingRight: '8px',
      
		},
	},
	cells: {
		style: {
			paddingLeft: '10px', // override the cell padding for data cells
			paddingRight: '10px',
		},
	},


	
};


	
const data = [
  	{
		nom: "ahmed",
		preNom: "Tiboqaline",
		email: "Tibouqalineg@gmail.com",
		numeroTelephone: "02202020200",
		dateNaissaince: "4/25/939",
		sexe: "home",
		ville: "kenitra",
		formation: "base iformatique",
		commentaire: "bonjour",
	},
  {
		nom: "Mouad",
		preNom: "Tiboqaline",
		email: "Tibouqalineg@gmail.com",
		numeroTelephone: "02202020200",
		dateNaissaince: "4/25/939",
		sexe: "home",
		ville: "kenitra",
		formation: "base iformatique",
		commentaire: "bonjour",
	},
  {
		nom: "walid",
		preNom: "Tiboqaline",
		email: "Tibouqalineg@gmail.com",
		numeroTelephone: "02202020200",
		dateNaissaince: "4/25/939",
		sexe: "home",
		ville: "kenitra",
		formation: "base iformatique",
		commentaire: "bonjour",
	},
]
const CrudInscription = () => {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	
	const columns = [
		{
			name: 'Nom',
			selector: row => row.nom,
			sortable: true,
		},
		{
			name: 'PreNom',
			selector: row => row.preNom,
			sortable: true,
		},
		{
			name: 'Email',
			selector: row => row.email,
			sortable: true,
		},
		{
			name: 'Numero de Telephone',
			selector: row => row.numeroTelephone,
			sortable: true,
		},
		{
			name: 'Date de Naissaince',
			selector: row => row.dateNaissaince,
			sortable: true,
			omit: true,
		},
		{
			name: 'Sexe',
			selector: row => row.sexe,
			sortable: true,
			omit: true,
		},
		{
			name: 'Ville',
			selector: row => row.ville,
			sortable: true,
			omit: true,
		},
	  {
			name: 'Formation',
			selector: row => row.formation,
			sortable: true,
		},
		{
			name: 'Commentaire',
			selector: row => row.commentaire,
			sortable: true,
			omit: true,
			omit: true,
		},
		{
			name: 'Action',
			sortable: true,
		cell: (row) => (
		  <>
			<Button variant="primary"  onClick={handleShow}><img src={view} alt="" /></Button>
			<Button variant="success" className='mx-2'><img src={update} alt="" /></Button>
			<Button variant="danger" ><img src={trash} alt="" /></Button>
		  </>
		  
		)
		}
	];
	
	const offCanvaView =data.map(item =>{
		return (
			<>
			<Offcanvas show={show} onHide={handleClose}>
				<Offcanvas.Header closeButton>
				<Offcanvas.Title>View</Offcanvas.Title>
				</Offcanvas.Header>
				<Offcanvas.Body>
				<Form.Label>Nom</Form.Label>
          <Form.Control
            disabled
            type="text"
            placeholder="First name"
            value={item.nom}
          />
          <Form.Label>Email</Form.Label>
          <Form.Control
            disabled
            type="email"
            placeholder="First name"
            value={item.email}
          />
          <Form.Label>Numero de Telephone</Form.Label>
          <Form.Control
            disabled
            type="text"
            maxLength={20}
            placeholder="First name"
            value={item.numeroTelephone}
          />
          <Form.Label>Date de Naissaince</Form.Label>
          <Form.Control
            disabled
            type="text"
            placeholder="First name"
            value={item.dateNaissaince}
          />
          <Form.Label>Sexe</Form.Label>
          <Form.Control
            disabled
            type="text"
            placeholder="First name"
            value={item.sexe}
          />
          <Form.Label>Ville</Form.Label>
          <Form.Control
            disabled
            type="text"
            placeholder="First name"
            value={item.ville}
          />
          <Form.Label>Formation</Form.Label>
          <Form.Control
            disabled
            type="text"
            placeholder="First name"
            value={item.formation}
          />
          <Form.Label>Commentaire</Form.Label>
          <Form.Control
            disabled
            type="textarea"
            placeholder="First name"
            value={item.commentaire}
          />
				</Offcanvas.Body>
			</Offcanvas>
			</>
		);
	})
  
  return (
	<>
	<AdminNavBar/>
    <Container>
    <Row>
      <Col lg={12} className="text-center fs-1 my-3">Gestion Inscription</Col>
      <Col lg={12}>
        <DataTable
        columns={columns}
        data={data}
        customStyles={customStyles}
        pagination
        />
      </Col>
    </Row>
	<>
    {offCanvaView}
    </>
     
  </Container>
  </>
  )
}

export default CrudInscription