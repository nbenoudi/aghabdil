import React, {Children, useCallback} from 'react';
import {Calendar, momentLocalizer} from 'react-big-calendar'
import moment from 'moment'
import autoevents from '../Componnents/events'
//let allViews=Object.keys(Views).map(k=>Views[k]);
const localizer = momentLocalizer(moment)

const Colorecell = ({children, value}) =>
    React.cloneElement(Children.only(children), {
        style: {
            ...children.style,
            backgroundColor:value<moment("2025, 01, 13,") ? '#ffb74d': '#ffe0b2'
          }
        });
          
        
    
       
      

const MyCalander=()=>(<div><Calendar 
  style={{ height:"100%", width:"100%",backgroundColor:"#ffffff",color:"black"}}

  
    //events={events}
    events={autoevents}
    //selectable="true"
    step={1} // step={2} 
    timeslots={15} // timeslots={7}
    culture = 'fr'
   // resizable="true"
   // view='day'
    views={['month']}
   // views={allViews}
   work_week="false"
    schowMultiDayTimes
  
    localizer={localizer}
    startAccessor='start'
    endAccessor='end'
  
   min={new Date("2025, 12, 13,")} // 6.00 AM
   max={new Date("2026, 12, 31,")} // Max will be 6.00 PM!
    scrollToTime={new Date()}
    
    toolbar={true}
    messages={{
      today: "ⴰⵢⴻⵔⵔⴰ",
      previous: "<<< ⴰⵢⵓⵔ ⵉⵣⵔⵉⵍ",
      next: "ⴰⵢⵓⵔ ⵢⴰⴹⵍ >>>",
      month: "Ayour",
      week: "Simana",
      day: "Tassa3ine",
      agenda:"liste n ighbdile",
      work_week:"lundi ar vendredi",
      title:"Ighbdil n tana"
    }}
   
    components={{dateCellWrapper:Colorecell}}

    eventPropGetter={
      (event) => {
        let newStyle = {
         backgroundColor:"#000000",
          color: '#ffffff',
          borderRadius: "4px",
          border: "none"
        };
      /*
        if (event.id %2 === 0){
          
          newStyle.backgroundColor = "#fff000"
        }else{
          
          newStyle.backgroundColor = "#133337"
        }
  */
        return {
          className: "",
          style: newStyle
        };
      }
    }
 
  /></div>)
  export default MyCalander;