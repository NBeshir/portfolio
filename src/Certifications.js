import React from 'react';
import { createTheme } from '@mui/material/styles';
import { green, purple } from '@mui/material/colors';



const Certifications = () =>{
    return(
        
    
    <div className="container certificates-container mx-auto mt-5 ">
        <h1>Certificates</h1>
        <div className="row certificate-row">
            <div className="col m-3 ">
                <img src="./images/bootstrap.png"/>
            </div>
            <div className="col m-3">
                <img src="./images/front-end-mobile.png"/>
            </div>
            
            <div className="col m-3">
                <img src="./images/react.png"/>
             </div>
        </div>
        <div className="row certificate-row">
            <div className="col m-3 col-w">
                <img src="" className="img"/>
            </div>
            <div className="col m-3">
                <img src="./images/reactnative.png"/>
            </div>
            
            <div className="col m-3">
                <img src="./images/node-express.png"/>
            </div>
        </div>
        
   

           
            
            
    </div>
       
    )
}

export default Certifications;
