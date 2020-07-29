import React from 'react';
//import classes from './NavigationItems.css'
import './Navigationitems.css'
import NavigationItem from  '../Navigationitem/Navigationitem'
import Button  from '../../UI/Button/Button'

import VyirousLogo  from '../../UI/Logo/logo'

const navigationItems = () => {

    return (  
        <div  className= "NavigationItems">
         <div className= "Laptopview">
         <VyirousLogo />
         <div >
         <h2 className="CompanyTitle" > VYORIUS</h2>
         </div>
        <ul>
            <NavigationItem link="/" exact >Why Vyorius?</NavigationItem>
            <NavigationItem link="/solutions" >Solutions</NavigationItem>
            <NavigationItem link="/products" > Products</NavigationItem>
            <NavigationItem link="/usecases" >Use Cases</NavigationItem>
            <NavigationItem link="/team" >Team</NavigationItem>
            <NavigationItem link="/partners" >Partners</NavigationItem>
            <NavigationItem link="/contact" >Contact us</NavigationItem>
        </ul>
         </div>

        <Button >Launch Vyorius</Button>
        
        </div>
    );
}
 
export default navigationItems;