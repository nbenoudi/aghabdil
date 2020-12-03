
import React, { Component } from 'react'

import AgendaCalender from 'react-agenda-calendar'
import 'react-agenda-calendar/dist/index.css'

export default AgendaCalender = ()=>{

       const agenda = [
          {
            title: "Title",
            startDate: {day: 1, month: 2, year: 2020},
            endDate: {day: 5, month: 2, year: 2020},
          }
        ]
      
        
          return <AgendaCalender containerStyle={{height: "calc(100% - 51x)"}} containerClassName={styles.calenderContainer} agenda={agenda} currentDate={new Date(2004, 0, 6)} />
   
      }






