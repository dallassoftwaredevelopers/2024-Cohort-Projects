import React, { useState } from 'react';
import './TotalCookingTime.css'

const TotalCookingTime =  ({time}) => {
    return (
        <div className='cooking-total'>
            <img src="./images/planner-icons/clock.png" alt="clock" className='clock-icon' />
            <div><span className='cooking-time'>{time}</span> hours of cooking</div>
        </div>


    );
};
export default  TotalCookingTime;