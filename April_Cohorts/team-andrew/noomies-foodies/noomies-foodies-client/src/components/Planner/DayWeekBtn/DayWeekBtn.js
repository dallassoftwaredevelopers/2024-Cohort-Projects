import React, { useState } from 'react';
import './DayWeekBtn.css'


const DayWeekBtn = ({isDay, setIsDay}) => {

    // intialize the current state holding variables
    // const [isDay, setIsDay] = useState(true); 
    // const [isWeek, setIsWeek] = useState(false);

    // sets the day state
    const setDayView = () => {
        setIsDay(true);
        // setIsWeek(false);
    }

    //set the view to week
    const setWeekView = () => {
        setIsDay(false);
        // setIsWeek(true);
    }

  // returns two buttons. day btn when clicked sets  isDay to true and is week to false. 
  // sets today btn to active state. 
    return (
        <div className="day-week-toggle">
            <button className={`day-week-btn ${isDay ? 'active' : ''}`} onClick={setDayView}>Today</button>
            <button className={`day-week-btn ${!isDay ? 'active' : ''}`} onClick={setWeekView}>Week</button>
        </div>
    );
}
export default DayWeekBtn;