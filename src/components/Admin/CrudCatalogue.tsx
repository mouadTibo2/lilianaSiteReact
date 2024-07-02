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

interface dataProps{
  id: number;
  imagePath: string;
}

const CrudCatalogue = () => {
  /* usestate */
  const navigate = useNavigate()
  const [show, setShow] = useState(false);
  const [data ,setData] = useState( [] as dataProps[]);
  const [row ,setRow] = useState(data);
  const [records, setRecords] = useState([] as dataProps[])
  
  /* data useState */
  const [id, setId] = useState<number>();
  const [imagePath, setImagePath] = useState<string>();
  /* functions */
  const handleChangeSelected = ({ selectedRows }) => {
       console.log('Selected Rows: ', selectedRows);
  };
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handelFilter = (e:React.ChangeEvent<HTMLInputElement>) =>{
    (e.target.value) == "" ?
      setRecords(data)
      :
      setRecords(
        data.filter((f) => {
          return f.id.toString().includes(e.target.value)})
      )
  }
  const handelDelete = (id:number) => {
    console.log(id)
    const confirm = window.confirm("vous voulez vraiment supprimer !!!")
    if (confirm === true) {
      axios
        .delete(`http://localhost:3000/catalogueData/${id}`)
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
      return (f.id === id ? setImagePath(f.imagePath):null)
    })
    handleShow();
  }
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
          <Button variant="primary" onClick={() =>handelView(row.id)}><img src={view} alt="" /></Button>
          <Button variant="success" className='mx-2'><img src={update} alt="" /></Button>
          <Button variant="danger" onClick={() =>handelDelete(row.id)}><img src={trash} alt="" /></Button>
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
    .get(`http://localhost:3000/catalogueData/`)
    .then(res=>{setData(res.data)
      setRecords(res.data);
    })
    .catch(error=> console.log(error))
  },[]);

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
          <Button variant="primary" onClick={handleShow}>Nouveau photo</Button>
        }
        subHeader
        subHeaderComponent={
          <Form.Control
            placeholder='Chercher par id'
            className='w-25 me-auto mb-3 shadow-sm'
            onChange={handelFilter}
            
          />
        }
        />
        <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Nouveau Photo</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <Form.Label>Id de Formation</Form.Label>
          <Form.Control
            type="number"
            value={id}
            onChange={(e) => setId(e.target.value)}
            required
            disabled
          />
          <Form.Label>chemin d'image</Form.Label>
          <Form.Control
            type="text"
            value={imagePath}
            onChange={(e) => setImagePath(`../../../images/${e.target.value}`)}
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
        </Offcanvas.Body>
      </Offcanvas>
  </Container>
  </>
  )
}

export default CrudCatalogue