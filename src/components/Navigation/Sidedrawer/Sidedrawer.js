import React from "react";

import NavigationItems from "../Navigationitems/Navigationitems";
//import classes from "./SideDrawer.css";
import BackDrop from '../../UI/Backdrop/Backdrop'
import Auxiliary from '../../../hoc/auxiliary/auxiliary'
import './Sidedrawer.css'

const sideDrawer = (props) => { 

 let attachClasses =[ "SideDrawer" ,  "Open" ]
 if(!props.Open)
  {
      attachClasses= [ "SideDrawer" , "Close" ]
  }



  return (
    <Auxiliary>
      <BackDrop show={props.Open} removeBackdrop={props.backDropRemove} />
     <div className={attachClasses.join(" ")}>
      <nav>
        <NavigationItems />
      </nav>
    </div>
    </Auxiliary>
  );
};

export default sideDrawer;
