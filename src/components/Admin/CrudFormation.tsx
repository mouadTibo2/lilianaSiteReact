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
  titreformation:string,
  imageFormation: string,
  descriptionFormation: string,
  modules:[ {
    moduleId: number,
    moduleNom: string,
    moduleImage: string,
    moduleObjectif: string,
   }
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

const paginationComponentOptions = {
	rowsPerPageText: 'Max de page',
	rangeSeparatorText: 'de',
	selectAllRowsItem: false,
	selectAllRowsItemText: 'Todos',
};
const handleChangeSelected = ({ selectedRows }) => {
  console.log('Selected Rows: ', selectedRows);
};
const Crud = () => {
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
          <Button variant="primary" onClick={handleShowView}><img src={view} alt="" /></Button>
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
          <Form.Label className='mt-3'>Image</Form.Label>
          <div>
            <Figure className='mt-3'>
              <Figure.Image
                width={171}
                height={170}
                alt="171x180"
                src={item.imageFormation}
              />
            </Figure>
          </div>
          <Form.Label>Modules</Form.Label>
          <div>
          {item.modules.map(item =>{
            return (<>
              <Form.Label>Module {item.moduleId}</Form.Label>  
              <Form.Control
                disabled
                type="text"
                placeholder="First name"
                value={item.moduleId}
              />
              <Form.Control
                disabled
                type="text"
                value={item.moduleNom}
              />
              <Form.Control
                disabled
                type="text"
                value={item.moduleImage}
              />
              <div>
                <Figure className='mt-3'>
                  <Figure.Image
                    width={171}
                    height={170}
                    alt="171x180"
                    src={item.moduleImage}
                  />
                </Figure>
              </div>
              <Form.Control
                disabled
                type="textarea"
                value={item.moduleObjectif}
              />
            </>);})
          }
          </div>
				</Offcanvas.Body>
			</Offcanvas>
			</>
		);
	});

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
        paginationComponentOptions={paginationComponentOptions}
        selectableRows
        onSelectedRowsChange={handleChangeSelected}
        actions={
          <Button variant="primary" onClick={handleShowNew}>Nouveau Formation</Button>
        }
        />
      </Col>
    </Row>
    <>
      <Offcanvas show={showNew} onHide={handleCloseNew}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Nouveau Formation</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <Form.Label>Id de Formation</Form.Label>
          <Form.Control
            type="text"
            placeholder="First name"
            value=""
          />
          <Form.Label>Titre de Formation</Form.Label>
          <Form.Control
            disabled
            type="text"
            placeholder="First name"
            value=""
          />
          <Form.Label>Description Formation</Form.Label>
          <Form.Control
            type="text"
            maxLength={20}
            placeholder="First name"
            value=""
          />
          <Form.Label>Date de Naissaince</Form.Label>
          <Form.Control
            type="text"
            maxLength={20}
            placeholder="First name"
            value=""
          />
          <Form.Label>image</Form.Label>
          <Figure className='mt-3'>
            <Figure.Image
              width={171}
              height={170}
              alt="171x180"
              src=""
            />
        </Figure>
          <Form.Label>Modules</Form.Label>
          <Form.Control
            type="text"
            placeholder="First name"
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

export default Crud