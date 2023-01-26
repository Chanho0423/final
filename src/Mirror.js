import React from 'react';
import Webcam from "react-webcam";

import "./Home.css";

function Mirror() {
  
  
  return (
    <body>
      <div class="searchbox">

        <div class="header">
          <h1>Mirror</h1>  
        </div>

        <div class="container_webcam">
          <Webcam id='webcam' imageSmoothing={true} mirrored={true}/>
        </div>
      </div>
    </body>
    
  );
}

export default Mirror;

