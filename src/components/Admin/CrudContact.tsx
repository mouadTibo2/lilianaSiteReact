import DataTable from 'react-data-table-component';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import trash from "../../../public/images/trash3-fill.svg";
import update from "../../../public/images/pencil.svg";
import view from "../../../public/images/eye-fill.svg"
import axios from 'axios';
import {useEffect, useState} from 'react'
import AdminNavBar from './AdminNavBar';

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
const columns = [
	{
		name: 'Nom',
		selector: row => row.nom,
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
		name: 'Commentaire',
		selector: row => row.commentaire,
		sortable: true,
	},
	{
		name: 'Action',
		sortable: true,
    cell: (row) => (
      <>
        <Button variant="primary"><img src={view} alt="" /></Button>
        <Button variant="success" className='mx-2'><img src={update} alt="" /></Button>
        <Button variant="danger"><img src={trash} alt="" /></Button>
      </>
      
    ),
	}
];

const data = [
  	{
	nom: "Mouad",
    email: "Tibouqalineg@gmail.com",
    numeroTelephone: "0616363672",
    commentaire: "bojour",
	},
	{
	nom: "Ahmed",
    email: "alawg@gmail.comi",
    numeroTelephone: "0617171811",
    commentaire: "bojour",
	},
]
const CrudContact = () => {
  return (
	<>
	<AdminNavBar/>
    <Container>
    <Row>
      <Col lg={12} className="text-center fs-1 my-3">Gestion Contact</Col>
      <Col lg={12}>
        <DataTable
        columns={columns}
        data={data}
        customStyles={customStyles}
        pagination
		actions={
			<Button variant="primary">Nouveau photo</Button>
		  }
        />
      </Col>
    </Row>
  </Container>
  </>
  );
}

export default CrudContact