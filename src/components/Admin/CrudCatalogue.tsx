import DataTable from 'react-data-table-component';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Figure from 'react-bootstrap/Figure';
import {useEffect, useState} from 'react';
import trash from "../../../public/images/trash3-fill.svg";
import update from "../../../public/images/pencil.svg";
import view from "../../../public/images/eye-fill.svg"
import Offcanvas from 'react-bootstrap/Offcanvas';
import Form from 'react-bootstrap/Form';
import AdminNavBar from './AdminNavBar';
interface dataProps{
  id: number;
  imagePath: string;
}
const customStyles = {
	rows: {
		style: {
			minHeight: 'auto', // override the row height
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


const CrudCatalogue = () => {
  const [showView, setShowView] = useState(false);
  const handleCloseView = () => setShowView(false);
  const handleShowView = () => setShowView(true);
  const [showNew, setShowNew] = useState(false);
  const handleCloseNew = () => setShowNew(false);
  const handleShowNew = () => setShowNew(true);

  const [data ,setData] = useState( [] as dataProps[]);
  const [row ,setRow] = useState(data);
  const columns = [
    {
      name: 'Id',
      selector: row => row.id,
      sortable: true,
    },
    {
      name: 'Image Path',
      selector: row => row.imagePath,
      sortable: true,
      cell: (row) => (
        <>
        <Figure className='mt-3'>
          <Figure.Image
            width={171}
            height={170}
            alt="171x180"
            src={row.imagePath}
          />
        </Figure>
        </>
        
      )
    },
    {
      name: 'Action',
      sortable: true,
      cell: (row) => (
        <>
          <Button variant="primary" onClick={handleShowView}><img src={view} alt="" /></Button>
          <Button variant="success" className='mx-2'><img src={update} alt="" /></Button>
          <Button variant="danger"><img src={trash} alt="" /></Button>
        </>
        
      ),
    }
  ];
  const handleChangeSelected = ({ selectedRows }) => {
       console.log('Selected Rows: ', selectedRows);
  };
  useEffect(()=>{
    axios
    .get('http://localhost:3000/catalogueData')
    .then(res=>{setData(res.data)})
    .catch(error=> console.log(error))
  },[]);

  const offCanvaView =data.map(item =>{
		return (
			<>
			<Offcanvas show={showView} onHide={handleCloseView}>
				<Offcanvas.Header closeButton>
				<Offcanvas.Title>View</Offcanvas.Title>
				</Offcanvas.Header>
				<Offcanvas.Body>
				<Form.Label>Id de Formation</Form.Label>
          <Form.Control
            disabled
            type="text"
            placeholder="First name"
            value={item.id}
          />
          <Form.Label>Titre de Formation</Form.Label>
          <Form.Control
            disabled
            type="text"
            placeholder="First name"
            value={item.imagePath}
          />
          <Form.Label>Image</Form.Label>
          <div>
            <Figure className='mt-3'>
              <Figure.Image
                width={171}
                height={170}
                alt="171x180"
                src={item.imagePath}
              />
            </Figure>
          </div>
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
      <Col lg={12} className="text-center fs-1 my-3 fw-normal">Gestion Catalogue</Col>
      <Col lg={12}>
        <DataTable
        columns={columns}
        data={data}
        customStyles={customStyles}
        pagination
        paginationComponentOptions={paginationComponentOptions}
        selectableRows
        onSelectedRowsChange={handleChangeSelected}
        actions={
          <Button variant="primary" onClick={handleShowNew}>Nouveau photo</Button>
        }
        />
      </Col>
    </Row>
    <>
      <Offcanvas show={showNew} onHide={handleCloseNew}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Nouveau Photo</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <Form.Label>Id de Formation</Form.Label>
          <Form.Control
            type="text"
            value=""
          />
          <Form.Label>chemin d'image</Form.Label>
          <Form.Control
            type="text"
            value=""
          />
         
        </Offcanvas.Body>
      </Offcanvas>

      {offCanvaView}
    </>
  </Container>
  </>
  )
}

export default CrudCatalogue