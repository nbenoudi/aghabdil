
import React from 'react'

import AgendaCalender from 'react-agenda-calendar'
import 'react-agenda-calendar/dist/index.css'

export default AgendaCalender = ()=>{

       const agenda = [
          {
            title: "Title",
            startDate: {day: 1, month: 1, year: 2021},
            endDate: {day: 5, month: 1, year: 2021},
          }
        ]
      
        
          return <AgendaCalender containerStyle={{height: "calc(100% - 30x)"}} containerClassName={styles.calenderContainer} agenda={agenda} currentDate={new Date(2021, 1, 6)} />
   
      }






