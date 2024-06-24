import NavBar from "./components/Navbar/NavBar"
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import 'bootstrap/dist/css/bootstrap.min.css';
import {  Routes, Route  } from "react-router-dom";
import Acceuil from "../src/components/pages/home/Acceuil";
import Formation from "./components/pages/Formation/Formation";
import Cataloge from "./components/pages/cataloge/Cataloge";
import InscriptionEnLigne from "./components/pages/Inscription en ligne/InscriptionEnLigne";
import Contact from "./components/pages/Contact/Contact";
import Apropos from "./components/pages/home/Apropos";
import Reserv from "./components/Resevation/Reserv";
import { Suspense } from 'react';
import ModalCover from "./components/pages/ModalFormationContent/ModalCover";

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
          <NavBar /* langue={langue} setlangue={setlangue} *//>
          <Reserv/>
          <ModalCover/>
        <Routes>
          <Route path="/" element={<Acceuil/>}/>
          <Route path="/Apropos" element={<Apropos/>}/>
          <Route path="/Formation" element={<Formation/>}/>
          <Route path="/Cataloge" element={<Cataloge/>}/>
          <Route path="/Contact" element={<Contact/>}/>
          <Route path="/InscriptionEnLigne" element={<InscriptionEnLigne/>}/>
        </Routes>
        </ThemeProvider>
      </div>
    </Suspense>

    </>
  )
}

export default App
