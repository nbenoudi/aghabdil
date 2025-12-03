

import React from 'react';
import 'react-big-calendar/lib/css/react-big-calendar.css';
//import MyCalander from './Componnents/Moment';
import MyCalander from './Componnents/MyCalander';
import "./App.css";
class  App  extends React.Component {

  state = {
    view: "day",
    date: new Date(2025, 12, 15),
    width: 500
  };

 


 render(){
  return(<div> 
    <div id="aghabdilevent" className='App-header'>ⴰⵖⴰⴱⴷⵉⵍ ⵏ ⵜⴰⵏⴰ</div>
     
       
    <MyCalander style={{borderBottom: "solid black 1px", 
    alignItems: "center", 
    justifyContent: "center", 
    fontWeight: "bold",
    

  }
     }>
      
    </MyCalander>
  
    
    </div> 
    
    
    )
   
 }
}
  


export default App;

