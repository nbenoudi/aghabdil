
import React from 'react';
import "./event.css"
 export  function AghabdilEvent(event) {

const localDate = new Date(event.start).toLocaleDateString("fr");


    return (
      <div className='event'> 
          <h1>   Taggourt: {event.title}  Le :  {localDate}  </h1>

        </div>
    
    );
  

    }