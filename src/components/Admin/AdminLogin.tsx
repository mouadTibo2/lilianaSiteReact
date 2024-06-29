import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { useState ,useEffect} from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";

interface logInValue {
	id: number;
	logIn: string;
	password: string;
}
const AdminLogin = () => {
	const [data, setData] = useState([] as logInValue[]);
	const [logIn,setLogIn] = useState<string>("");
	const [password,setPassword] = useState<string>("");
	const navigate = useNavigate();
	const handelLogIn =(logIn:any)=>{
		setLogIn(logIn);
	}
	const handelPassword =(password:any)=>{
		setPassword(password);
		
	}
	console.log(logIn,password);
	console.log(data)

	useEffect(()=>{
		axios
		.get(
					'http://localhost:3000/user'
			)
			.then((response) => {setData(response.data)}
		);
		/* console.log(data); */
		
		
	},[])
	
		
		
		
		const handleSubmit = (event:any) => {
				event.preventDefault();
				const exist = data.map((item)=>{
						if (item.password === password && item.logIn === logIn){
							return true;
						}
						else return false ;
					
				});
				exist.includes(true) ?  navigate("/Admin/CrudFormation"): window.alert("utilisateur inconnue");
		};
  return (
    <Container className='vh-100'>
			<Form onSubmit={handleSubmit}>
        <Row className='justify-content-center align-content-center vh-100'>
						<Col lg={6} className='rounded p-5 shadow' style={{backgroundColor:"#E7F0DC"}}>
							<h1 className='text-center'>Admin</h1>
							<Form.Label>Nom d'utilisateur</Form.Label>
							<Form.Control
									required
									type="text"
									value={logIn}
									onChange={(event) => handelLogIn(event.target.value)}
							/>
							<Form.Label>Mot de pass</Form.Label>
							<Form.Control 
									required
									type="password"
									value={password}
									onChange={(event) => handelPassword(event.target.value)}
							/>
							<div className="d-flex w-100 justify-content-center mt-4"><Button size="lg" variant="outline-primary" type="submit">Entrer</Button></div>
						</Col>
						
        </Row>
				</Form>
  </Container>
  )
}

export default AdminLogin