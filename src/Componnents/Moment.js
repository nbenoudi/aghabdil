import React, {Children} from 'react';
import {Calendar, momentLocalizer} from 'react-big-calendar'
import moment from 'moment'
//import events from '../exams.js'
import autoevents from '../Componnents/autoevents'
//let allViews=Object.keys(Views).map(k=>Views[k]);
const localizer = momentLocalizer(moment)

const Colorecell = ({children, value}) =>
    React.cloneElement(Children.only(children), {
        style: {
            ...children.style,
            backgroundColor:value<moment("2021,01,01") ? '#ffb74d': '#ffe0b2'
          }
        });
          
        
    


const MyCalander=()=>(<div><Calendar 
  style={{ height:"80%", width:"80%",backgroundColor:"#ff6f00",color:"black"}}

  
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
  
   //min={new Date(2020, 11, 29, 0, 0)} // 6.00 AM
   // max={new Date(2021, 11, 29, 24, 0)} // Max will be 6.00 PM!
    scrollToTime={new Date()}
     
    toolbar={true}
    messages={{
      today: "ⴰⵙⵙⴰ",
      previous: "<<<",
      next: ">>>",
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
          backgroundColor:"#0d47a1",
          color: '#fbc02d',
          borderRadius: "4px",
          border: "none"
        };
  
        if (event.id%2===0){
          newStyle.backgroundColor = "#1976d2"
        }
  
        return {
          className: "",
          style: newStyle
        };
      }
    }
 
  /></div>)
  export default MyCalander;