import  "./reserv.css";
import { Button } from "react-bootstrap";
import { useState } from "react";

import xSquareImage from "/public/images/x-square.svg"
import ReservationCart from "./reservationCart";

const Reserv = () => {
  const [btnState, setBtnState] = useState(false); 
  
  function component1(){
    return(<>
      <div className="position-relative">
        <div className="position-fixed top-50 end-0 z-1">
          <Button className="myBtn rounded" variant="outline-danger" onClick={()=> setBtnState(true)}>Reserver</Button>
        </div>
      </div>
      <div className="position-relative ">
        <div className="position-fixed top-50 end-0 z-1">
        </div>
      </div>
  </>
    )
  } 
  function component2(){
    return(<>
      <div className="position-relative hideBtn">
        <div className="position-fixed top-50 end-0 z-1">
          <Button className="myBtn rounded" variant="outline-danger" onClick={()=> setBtnState(true)}>Reserver</Button>
        </div>
      </div>
      <div className="position-relative">
        <div className="position-fixed mypositiontop w-100 h-100">
        </div>
        <div className="mypositionAboveTop">
          <Button size="lg" variant="dark" className="position-absolute end-0 z-1 m-2" onClick={()=> setBtnState(false)}>
            <img src={xSquareImage} alt="" />
          </Button>
          <div className="position-relative">
            <ReservationCart/>
          </div>
        </div>
      </div>
  </>
    )
  } 
  return (
    <>
    {btnState ? component2(): component1()}
    </>
  )
}

export default Reserv