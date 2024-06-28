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
        <Button variant="primary"><img src={view} alt="" /></Button>
        <Button variant="success" className='mx-2'><img src={update} alt="" /></Button>
        <Button variant="danger"><img src={trash} alt="" /></Button>
      </>
      
    ),
	}
];

const CrudCatalogue = () => {

  const [data ,setData] = useState( [] as dataProps[]);
  const [row ,setRow] = useState(data);
  useEffect(()=>{
    axios
    .get('http://localhost:3000/catalogueData')
    .then(res=>{setData(res.data)})
    .catch(error=> console.log(error))
  },[]);
  return (
    <Container>
    <Row>
      <Col lg={12} className="text-center fs-1 my-3 fw-normal">Gestion Catalogue</Col>
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
  )
}

export default CrudCatalogue