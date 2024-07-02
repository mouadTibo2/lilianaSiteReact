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
import ButtonGroup from 'react-bootstrap/ButtonGroup';
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
  const [idinc, setIdinc] = useState(0);
  const navigate = useNavigate()
  const [show, setShow] = useState(false);
  const [data ,setData] = useState( [] as dataProps[]);
  const [row ,setRow] = useState(data);
  const [records, setRecords] = useState([] as dataProps[]);
  const [validated, setValidated] = useState(false);
  const [showUpdate, setShowUpdate] = useState(false);
  const [showAnnuler, setShowAnnuler] = useState(false);
  const [showValider, setShowValider] = useState(false);
  /* data useState */
  const [id, setId] = useState<number>(0);
  const [titreformation, setTitreformation] = useState<string>("");
  const [imageFormation, setImageFormation] = useState<string>("");
  const [descriptionFormation, setDescriptionFormation] = useState<string>("");
  const [modules, setModules] = useState({
    moduleId: 0,
    moduleNom:"",
    moduleImage: "",
    moduleObjectif: "",
  });
   /* functions */
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
          <Button variant="primary" onClick={(e) =>handleView(row.id)}><img src={view} alt="" /></Button>
          <Button variant="success" onClick={(e) =>handleEdite(row.id)} className='mx-2'><img src={update} alt="" /></Button>
          <Button variant="danger" onClick={(e) =>handleDelete(row.id)}><img src={trash} alt="" /></Button>
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
  /* data requests */ 
  useEffect(()=>{
    axios
    .get('http://localhost:3000/formationData')
    .then(res=>{setData(res.data)
      setRecords(res.data);
      setIdinc(res.data.length + 1)
    })
    .catch(error=> console.log(error))
  },[]);
  const handleFilter = (e:React.ChangeEvent<HTMLInputElement>) =>{
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
  const handleDelete = (id:number) => {
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
  const handleView = (id:number) => {
    setShowUpdate(false);
    setShowAnnuler(true);
    setShowValider(false);
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
  }
  const handleEdite = (id:number) => {
    setShowUpdate(true);
    setShowAnnuler(true);
    setShowValider(false);
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
  }
  const handleNew = () => {
    setShowAnnuler(true);
    setShowValider(true);
    setShowUpdate(false);
    setId(idinc);
    console.log(idinc);
    setTitreformation("");
    setImageFormation("");
    setDescriptionFormation("");
    handleShow();
  }
  const handleUpdate = (e:any) => {
    e.preventDefault();
    axios
        .put(`http://localhost:3000/formationData/${id}`,{
          titreformation,
          imageFormation,
          descriptionFormation,
          modules,
        })
        .then((res)=>{
          alert("mise a jour valider");
          navigate(0);
        })
       .catch(err => console.log(err))
  }
  const handleSubmit = (e:any) => {
    e.preventDefault();
    setValidated(true);
    if (titreformation !="" && imageFormation !="" && descriptionFormation !=""){
      axios
          .post(`http://localhost:3000/formationData`,{
            id:idinc,
            titreformation,
            imageFormation,
            descriptionFormation,
            modules,
          })
          .then((res)=>{
            setRecords(res.data);
            navigate(0);
          })
         .catch(err => console.log(err))
    }
  }

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
       actions={
          <Button variant="primary" onClick={handleNew}>Nouveau Formation</Button>
        }
        subHeader
        subHeaderComponent={
          <Form.Control
            placeholder='Chercher une formation'
            className='w-25 me-auto mb-3 shadow-sm'
            onChange={handleFilter}
          />
        }
        />
      </Col>
    </Row>
    <Offcanvas show={show} onHide={handleClose}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Nouveau Formation</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
      <Form noValidate validated={validated}>
        <Form.Label>Id</Form.Label>
          <Form.Control
            disabled
            type="number"
            value={id}
            onChange={(e) => setId(e.target.value)}
            required
            
          />
          <Form.Label>Titre de Formation</Form.Label>
          <Form.Control
            type="text"
            required
            value={titreformation}
            onChange={(e) => setTitreformation(e.target.value)}
          />
          
          <Form.Label>image Pahth</Form.Label>
          <Form.Control
            type="text"
            maxLength={20}
            required
            value={imageFormation}
            onChange={(e) => setImageFormation(e.target.value)}
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
            required
            value={descriptionFormation}
            onChange={(e) => setDescriptionFormation(e.target.value)}
          />
          <Form.Label>Modules</Form.Label>
          <Form.Control
            type="text"
            required
            value={modules}
            onChange={(e) => setModules(e.target.value)}
          />
        </Form>
      </Offcanvas.Body>
      <ButtonGroup className="mb-2 w-100">
        {showValider === true ?
            <Button onClick={handleSubmit}type="submit" variant='success' className='me-2 rounded'>Valider</Button>:
            null
        }
        {showUpdate === true ?
          <Button type="submit" onClick={handleUpdate}variant='primary' className='me-2 rounded'>Update</Button>:
          null
        }
        {showAnnuler === true ?
          <Button onClick={() => handleClose()} variant='danger' className='me-2 rounded'>Annuler</Button>:
          null
        }
      </ButtonGroup>
    </Offcanvas>
  </Container>
  </>
  )
}

export default Crud