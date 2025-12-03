import React, { Children } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import autoevents from './events'
//import { usePopup } from './PopupProvider';
import { AghabdilEvent } from "./AghabdilEvent"
//import { render } from '@testing-library/react';
import ReactDOM from 'react-dom';

//const allViews=Object.keys(Views).map(k=>Views[k]);
const localizer = momentLocalizer(moment);
const Colorecell = ({ children }) => React.cloneElement(Children.only(children),
                                                                    {
                                                                      style: {
                                                                        ...children.style,
                                                                        backgroundColor: '#194D33',
                                                                       

                                                                      }
                                                                    }) ;
                                                                   
                                                                   
    const  eventStyleGetter = (event, start, end, isSelected) => {
      console.log(event);
      return {
        style:{backgroundColor:event.title==="الجامع"?'red':'green'}
       
      };
    }                                                              
                                                                    
const MyCalander = () => (<div><Calendar
  style={{
    height: "100%", width: "100%",
    color: "black",
    borderBlock: 5,
    backgroundColor: 'lightgreen',
    fontFamily: 'sans-serif',
    fontSize: 20,
    fontWeight: 'bold',
    borderColor: 'darkgreen',
  }

  }
  onSelectEvent={(event) => { ReactDOM.render(AghabdilEvent(event), document.getElementById('aghabdilevent')) }}
  events={autoevents}
  step={1} // step={2} 
  //timeslots={7}
  culture='fr'
  resizable="true"
  //view='day'
  //views={['month']}
  views={['month']}
  //onView={onView} 
  work_week="false"
  schowMultiDayTimes

  localizer={localizer}
  startAccessor='start'
  endAccessor='end'

  min={new Date("2025, 12, 12,")} // 6.00 AM
  max={new Date("2026, 12, 12,")} // Max will be 6.00 PM!
  scrollToTime={new Date()}
  toolbar={true}
  messages={{
    today: "ⴰⵢⴻⵔⵔⴰ",
    previous: "<<< ⴰⵢⵓⵔ ⵉⵣⵔⵉⵍ",
    next: "ⴰⵢⵓⵔ ⵢⴰⴹⵍ >>>",
    month: "Ayour",
    week: "Simana",
    day: "Tassa3ine",
    agenda: "liste",
    work_week: "lundi ar vendredi",
    title: "Ighbdil n tana",

  }}

  components={{ dateCellWrapper: Colorecell }}

  eventPropGetter= {(eventStyleGetter)}

 

/></div>)
export default MyCalander;