import Footer from "../home/Footer";
import { CSSProperties } from "react";
import CatalogeBody from "./CatalogeBody";
export default function Cataloge(){
  const styleImage: CSSProperties ={
    width:"100%",
    height:"61vh"
  }
  return (
    
    <>
      <div className="position-relative" style={styleImage}>
        <div className="bg-primary opacity-50 position-absolute" style={styleImage}>
          <div className="bg-dark opacity-75 position-absolute" style={styleImage}>
          </div>
        </div>
        <div className="d-flex justify-content-center align-items-center position-absolute top-50 start-50 translate-middle" style={styleImage}>
          <h1 className=" ">Catalogue</h1>
        </div>
      </div>
      <CatalogeBody/>
      <Footer/>
    </>
  )
}
