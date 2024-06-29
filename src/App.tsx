

import ThemeProvider from 'react-bootstrap/ThemeProvider'
import 'bootstrap/dist/css/bootstrap.min.css';
import {  Routes, Route  } from "react-router-dom";
import Acceuil from "../src/components/pages/home/Acceuil";
import Formation from "./components/pages/Formation/Formation";
import Cataloge from "./components/pages/cataloge/Cataloge";
import InscriptionEnLigne from "./components/pages/Inscription en ligne/InscriptionEnLigne";
import Contact from "./components/pages/Contact/Contact";
import { Suspense } from 'react';
import CrudFormation from "./components/Admin/CrudFormation";
import CrudCatalogue from "./components/Admin/CrudCatalogue";
import CrudContact from "./components/Admin/CrudContact";
import CrudInscription from "./components/Admin/CrudInscription";
import CrudResevation from "./components/Admin/CrudResevation";
import AdminLogin from './components/Admin/AdminLogin';
import "./App.css"
import 'aos/dist/aos.css';


export interface langueValue {
  langue:string,
  setlangue:Function,
}  

function App() {
  return (
    <>
    <Suspense fallback="loading">
      <div style={{backgroundColor:"#F3F7EC"}}>
        <ThemeProvider
          breakpoints={['xxxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
          minBreakpoint="xxs"
        >  
        <Routes>
          <Route path="/" element={<Acceuil/>}/>
          <Route path="/Formation" element={<Formation/>}/>
          <Route path="/Cataloge" element={<Cataloge/>}/>
          <Route path="/Contact" element={<Contact/>}/>
          <Route path="/InscriptionEnLigne" element={<InscriptionEnLigne/>}/>
          <Route path="/AdminLogIn" element={<AdminLogin/>}/>
          <Route path="/Admin/CrudFormation" element={<CrudFormation/>}/>
          <Route path="/Admin/CrudCatalogue" element={<CrudCatalogue/>}/>
          <Route path="/Admin/CrudContact" element={<CrudContact/>}/>
          <Route path="/Admin/CrudInscription" element={<CrudInscription/>}/>
          <Route path="/Admin/CrudResevation" element={<CrudResevation/>}/>
        </Routes>
        </ThemeProvider>
      </div>
    </Suspense>

    </>
  )
}

export default App
