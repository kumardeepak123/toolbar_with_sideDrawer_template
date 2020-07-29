import React from 'react';
import  VyoriusLogo from '../../../assests/images/logo.png'
import './logo.css'

const logo = (props) => {

    

    return ( 
       
        <div className="Logo"  style={{ height: props.height }}>
            <img src={VyoriusLogo}   alt="logo" />
            
        </div>
        
       
    );
}
 
export default logo;
