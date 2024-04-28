import React from 'react';
import "./Notifications.css"

const Notification = ({notificationNum, imgURL, type}) => {
    return (
        <div className="button">
            <img src={imgURL} alt="notification icon"></img>
            <span className={`button__badge ${type}`}>{notificationNum}</span>
        </div>
    );
};

export default Notification;