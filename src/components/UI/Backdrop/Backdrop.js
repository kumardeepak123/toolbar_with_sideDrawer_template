import React from "react";
import './Backdrop.css'

//import classes from "./Backdrop.css";

const backDrop = (props) =>
  props.show && <div className= "BackDrop" onClick={props.removeBackdrop}></div>;

export default backDrop;
