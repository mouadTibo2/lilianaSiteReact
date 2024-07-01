import DataTable from 'react-data-table-component';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import trash from "../../../public/images/trash3-fill.svg";
import update from "../../../public/images/pencil.svg";
import view from "../../../public/images/eye-fill.svg"
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
const paginationComponentOptions = {
	rowsPerPageText: 'Max de page',
	rangeSeparatorText: 'de',
	selectAllRowsItem: false,
	selectAllRowsItemText: 'Todos',
};
const handleChangeSelected = ({ selectedRows }) => {
	console.log('Selected Rows: ', selectedRows);
};
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
		name: 'Formation',
		selector: row => row.formation,
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
		id: 1,
		title: 'Beetlejuice',
		year: '1988',
	},
	{
		id: 2,
		title: 'Ghostbusters',
		year: '1984',
	},
]
const CrudResevation = () => {
  return (
	<>
	<AdminNavBar/>
    <Container>
    <Row>
      <Col lg={12} className="text-center fs-1 my-3">Gestion Reservation</Col>
      <Col lg={12}>
        <DataTable
        columns={columns}
        data={data}
        customStyles={customStyles}
        pagination
		paginationComponentOptions={paginationComponentOptions}
		selectableRows
        onSelectedRowsChange={handleChangeSelected}
        />
      </Col>
    </Row>
  </Container>
  </>
  )
}

export default CrudResevation