import DataTable from 'react-data-table-component';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Figure from 'react-bootstrap/Figure';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Form from 'react-bootstrap/Form';
import trash from "../../../public/images/trash3-fill.svg";
import update from "../../../public/images/pencil.svg";
import view from "../../../public/images/eye-fill.svg"
import AdminNavBar from './AdminNavBar';
import { useEffect, useState} from 'react'
interface dataProps {
  idFormation: number,
  titreformation:String,
  imageFormation: String,
  descriptionFormation: String,
  modules:[
    
  ]
}
  


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

const Crud = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  
  const [data ,setData] = useState( [] as dataProps[]);
  const [row ,setRow] = useState(data);
  const columns = [
    {
      name: 'idFormation',
      selector: row => row.idFormation,
      sortable: true,
    },
    {
      name: 'titreformation',
      selector: row => row.titreformation,
      sortable: true,
    },
    {
      name: 'imageFormation',
      selector: row => row.imageFormation,
      sortable: true,
      cell: (row) =>(
        <>
        <Figure className='mt-3'>
          <Figure.Image
            width={171}
            height={170}
            alt="171x180"
            src={row.imageFormation}
          />
        </Figure>
        </>
      ),
    },
    {
      name: 'descriptionFormation',
      selector: row => row.descriptionFormation,
      sortable: true,
    },
    {
      name: 'modules',
      selector: row => row.modules,
      sortable: true,
      omit: true,
    },
    {
      name: 'Action',
      sortable: true,
      cell: (row) => (
        <>
          <Button variant="primary" onClick={handleShow}><img src={view} alt="" /></Button>
          <Button variant="success" className='mx-2'><img src={update} alt="" /></Button>
          <Button variant="danger"><img src={trash} alt="" /></Button>
        </>
        
      ),
    }
  ];
  

  useEffect(()=>{
    axios
    .get('http://localhost:3000/formationData')
    .then(res=>{setData(res.data)})
    .catch(error=> console.log(error))
  },[]);
  const offCanvaView =data.map(item =>{
		return (
			<>
			<Offcanvas show={show} onHide={handleClose}>
				<Offcanvas.Header closeButton>
				<Offcanvas.Title>View</Offcanvas.Title>
				</Offcanvas.Header>
				<Offcanvas.Body>
				<Form.Label>Id de Formation</Form.Label>
          <Form.Control
            disabled
            type="text"
            placeholder="First name"
            value={item.idFormation}
          />
          <Form.Label>Titre de Formation</Form.Label>
          <Form.Control
            disabled
            type="text"
            placeholder="First name"
            value={item.titreformation}
          />
          <Form.Label>Description Formation</Form.Label>
          <Form.Control
            disabled
            type="text"
            maxLength={20}
            placeholder="First name"
            value={item.descriptionFormation}
          />
          <Form.Label>Date de Naissaince</Form.Label>
          <Figure className='mt-3'>
            <Figure.Image
              width={171}
              height={170}
              alt="171x180"
              src={row.imageFormation}
            />
        </Figure>
          <Form.Label>Modules</Form.Label>
          <Form.Control
            disabled
            type="text"
            placeholder="First name"
            value={item.modules}
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
      <Col lg={12} className="text-center fs-1 my-3">Gestion Formation</Col>
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
      {offCanvaView}
  </Container>
  </>
  )
}

export default Crud