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
import { useNavigate } from 'react-router-dom';
import { useEffect, useState} from 'react'

interface dataProps {
  id: number,
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
  

const Crud = () => {
  /* usestates */
  const navigate = useNavigate()
  const [show, setShow] = useState(false);
  const [data ,setData] = useState( [] as dataProps[]);
  const [row ,setRow] = useState(data);
  const [records, setRecords] = useState([] as dataProps[]);

  /* data useState */
  const [id, setId] = useState<number>();
  const [titreformation, setTitreformation] = useState<string>();
  const [imageFormation, setImageFormation] = useState<string>();
  const [descriptionFormation, setDescriptionFormation] = useState<string>();
  const [modules, setModules] = useState({
    moduleId: 0,
    moduleNom:"",
    moduleImage: "",
    moduleObjectif: "",
  });
   /* functions */
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handelFilter = (e:React.ChangeEvent<HTMLInputElement>) =>{
    (e.target.value) == "" ?
      setRecords(data)
      :
      setRecords(
        data.filter((item) => {
         return item.titreformation.toLowerCase().includes(e.target.value)} )
      )
      console.log(data.filter((item) => {item.titreformation.toLowerCase()}),"filter")
      console.log(records)
      console.log(e.target.value)
  }
  const handelDelete = (id:number) => {
    const confirm = window.confirm("vous voulez vraiment supprimer !!!")
    if (confirm === true) {
      axios
        .delete(`http://localhost:3000/formationData/${id}/`)
        .then((res)=>{
          alert("supprission autoriser") ;
          navigate(0);
        })
    }else{
      alert("supprission annuler");
    }
  }
  const handelView = (id:number) => {
    setId(id);
    records.filter(f =>{
      return (f.id === id ? setTitreformation(f.titreformation):null)
    })
    records.filter(f =>{
      return (f.id === id ? setImageFormation(f.imageFormation):null)
    })
    records.filter(f =>{
      return (f.id === id ? setDescriptionFormation(f.descriptionFormation):null)
    })
    records.filter(f =>{
      return (f.id === id ? setModules(f.modules):null)
    })
    handleShow();
    console.log(f.modules);
  }
  /* data-table data structure */
  const columns = [
    {
      name: 'id',
      selector: row => row.id,
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
          <Button variant="primary" onClick={(e) =>handelView(row.id)}><img src={view} alt="" /></Button>
          <Button variant="success" className='mx-2'><img src={update} alt="" /></Button>
          <Button variant="danger" onClick={(e) =>handelDelete(row.id)}><img src={trash} alt="" /></Button>
        </>
        
      ),
    }
  ];
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
  /* data requests */ 
  useEffect(()=>{
    axios
    .get('http://localhost:3000/formationData')
    .then(res=>{setData(res.data)
      setRecords(res.data);
    })
    .catch(error=> console.log(error))
  },[]);
  

  return (
    <>
	  <AdminNavBar/>
    <Container>
    <Row>
      <Col lg={12} className="text-center fs-1 my-3">Gestion Formation</Col>
      <Col lg={12}>
        <DataTable
        columns={columns}
        data={records}
        customStyles={customStyles}
        pagination
        paginationComponentOptions={paginationComponentOptions}
        selectableRows
        onSelectedRowsChange={handleChangeSelected}
       actions={
          <Button variant="primary" onClick={handleShow}>Nouveau Formation</Button>
        }
        subHeader
        subHeaderComponent={
          <Form.Control
            placeholder='Chercher une formation'
            className='w-25 me-auto mb-3 shadow-sm'
            onChange={handelFilter}
          />
        }
        />
      </Col>
    </Row>
    <>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Nouveau Formation</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <Form.Label>Id</Form.Label>
          <Form.Control
            disabled
            type="text"
            placeholder="First name"
            value={id}
          />
          <Form.Label>Titre de Formation</Form.Label>
          <Form.Control
            type="text"
            placeholder="First name"
            value={titreformation}
          />
          
          <Form.Label>image Pahth</Form.Label>
          <Form.Control
            type="text"
            maxLength={20}
            placeholder="First name"
            value={imageFormation}
          />
          <Form.Label>image</Form.Label>
          <div>
            <Figure className='mt-3'>
              <Figure.Image
                width={171}
                height={170}
                alt="171x180"
                src={imageFormation}
              />
            </Figure>
          </div>
        <Form.Label>Description Formation</Form.Label>
          <Form.Control
            type="text"
            maxLength={20}
            placeholder="First name"
            value={descriptionFormation}
          />
          <Form.Label>Modules</Form.Label>
          <Form.Control
            type="text"
            placeholder="First name"
            value={modules}
          />
        </Offcanvas.Body>
      </Offcanvas>
   
    </>
  </Container>
  </>
  )
}

export default Crud