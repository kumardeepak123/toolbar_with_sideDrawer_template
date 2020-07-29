import React from "react";
import "./Toolbar.css";
//import classes from './Toolbar.css'

import NavigationItems from "../Navigation/Navigationitems/Navigationitems";
import SideDrawerToggler from "../Navigation/Sidedrawer/SidedrawerToggler/SidedrawerToggler";


const toolBar = (props) => {



  return (


    <header className="Toolbar">
      <SideDrawerToggler toggleClick={props.toggleClicked} />
      <nav className="DesktopOnly">
        <NavigationItems />
      </nav>
      
    </header>
  );
};

export default toolBar;
