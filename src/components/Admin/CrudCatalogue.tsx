import DataTable from 'react-data-table-component';
import Container from 'react-bootstrap/Container';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Figure from 'react-bootstrap/Figure';
import { useEffect, useState} from 'react';
import trash from "../../../public/images/trash3-fill.svg";
import update from "../../../public/images/pencil.svg";
import view from "../../../public/images/eye-fill.svg"
import Offcanvas from 'react-bootstrap/Offcanvas';
import Form from 'react-bootstrap/Form';
import AdminNavBar from './AdminNavBar';
import { useNavigate } from 'react-router-dom';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

interface dataProps{
  id: number;
  imagePath: string;
}

const CrudCatalogue = () => {
  /* usestate */
  const [idinc, setIdinc] = useState(0);
  const navigate = useNavigate()
  const [show, setShow] = useState(false);
  const [data ,setData] = useState( [] as dataProps[]);
  const [row ,setRow] = useState(data);
  const [records, setRecords] = useState([] as dataProps[])
  const [validated, setValidated] = useState(false);
  const [showUpdate, setShowUpdate] = useState(false);
  const [showAnnuler, setShowAnnuler] = useState(false);
  const [showValider, setShowValider] = useState(false);
  /* data useState */
  const [id, setId] = useState<number>(0);
  const [imagePath, setImagePath] = useState<string>("");
  /* functions */
  const handleChangeSelected = ({ selectedRows }) => {
       console.log('Selected Rows: ', selectedRows);
  };
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
      name: 'Image Path',
      selector: row => row.imagePath,
      sortable: true,
    },
    {
      name: 'Image',
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
          <Button variant="primary" onClick={() =>handleView(row.id)}><img src={view} alt="" /></Button>
          <Button variant="success" className='mx-2' onClick={() =>handleEdite(row.id)}><img src={update} alt="" /></Button>
          <Button variant="danger" onClick={() =>handleDelete(row.id)}><img src={trash} alt="" /></Button>
        </>
        
      ),
    }
  ];
  const customStyles = {
    rows: {
      style: {
        minHeight: 'auto', // override the row height
      },
    },
    headCells: {
      style: {
        paddingLeft: '0px', // override the cell padding for head cells
        paddingRight: '0px',
        
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
    .get(`http://localhost:3000/catalogueData`)
    .then(res=>{setData(res.data)
      setRecords(res.data);
      setIdinc(res.data.length + 1);
    })
    .catch(error=> console.log(error))
  },[]);
  const handleFilter = (e:React.ChangeEvent<HTMLInputElement>) =>{
    (e.target.value) == "" ?
      setRecords(data)
      :
      setRecords(
        data.filter((f) => {
          return f.id.toString().includes(e.target.value)})
      )
  }
  const handleDelete = (id:number) => {
    console.log(id)
    const confirm = window.confirm("vous voulez vraiment supprimer !!!")
    if (confirm === true) {
      axios
        .delete(`http://localhost:3000/catalogueData/${id}`)
        .then((res)=>{
          alert("donner a été suprimer avec success");
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
      return (f.id === id ? setImagePath(f.imagePath):null)
    });
    handleShow();
  }
   const handleEdite = (id:number) => {
    setShowUpdate(true);
    setShowAnnuler(true);
    setShowValider(false);
    setId(id);
    records.filter(f =>{
      return (f.id === id ? setImagePath(f.imagePath):null)
    });
    handleShow();
  }
  const handleNew = () => {
    setShowAnnuler(true);
    setShowValider(true);
    setShowUpdate(false);
    setId(idinc);
    console.log(idinc);
    setImagePath("");
    handleShow();
  }
  const handleUpdate = (e:any) => {
    e.preventDefault();
    axios
        .put(`http://localhost:3000/catalogueData/${id}`,{
          imagePath,
        })
        .then((res)=>{
          alert("mise a jour valider");
          navigate(0);
        })
       .catch(err => console.log(err))
  }
  const handleSubmit = (e:any) => {
    e.preventDefault();
    e.stopPropagation();
    setValidated(true);
    if(imagePath != ""){
      axios
          .post(`http://localhost:3000/catalogueData`,{
            id:idinc,
            imagePath,
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
      <h1 className="text-center fs-1 my-3 fw-normal">Gestion Catalogue</h1>
      <DataTable
        columns={columns}
        data={records}
        customStyles={customStyles}
        pagination
        paginationComponentOptions={paginationComponentOptions}
        selectableRows
        onSelectedRowsChange={handleChangeSelected}
        actions={
          <Button variant="primary" onClick={handleNew}>Nouveau photo</Button>
        }
        subHeader
        subHeaderComponent={
          <Form.Control
            placeholder='Chercher par id'
            className='w-25 me-auto mb-3 shadow-sm'
            onChange={handleFilter}
            
          />
        }
        />
        <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Nouveau Photo</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <Form noValidate validated={validated}>
          <Form.Label>Id de Formation</Form.Label>
            <Form.Control
              type="number"
              value={id}
              onChange={(e) => setId(e.target.value)}
              disabled
            />
            <Form.Label>chemin d'image</Form.Label>
            <Form.Control
              type="text"
              placeholder="../../../images/'Nom de fichier'"
              value={imagePath}
              onChange={(e) => setImagePath(e.target.value)}
              required
            />
            <Form.Label>Image</Form.Label>
            <div>
              <Figure className='mt-3'>
                <Figure.Image
                  width={171}
                  height={170}
                  alt="171x180"
                  src={imagePath}
                />
              </Figure>
            </div>
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

export default CrudCatalogue