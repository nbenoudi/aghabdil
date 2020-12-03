
import React from 'react';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import MyCalander from './Componnents/Moment';
class  App  extends React.Component {

  state = {
    view: "day",
    date: new Date(2015, 3, 12),
    width: 500
  };

 


 render(){
  return(<div> <div style={{color:"brown",fontSize:"10px",animation:"both"}} > <center><h1> ⴰⵖⴰⴱⴷⵉⵍ ⵏ ⵜⴰⵏⴰ  </h1></center></div> 
       
    <MyCalander style={{borderBottom: "solid black 1px", alignItems: "center", justifyContent: "center", fontWeight: "bold"} }>
      
    </MyCalander>
  
    
    </div> 
    
    
    )
   
 }
}
  


export default App;

