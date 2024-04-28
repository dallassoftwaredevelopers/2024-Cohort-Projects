import React from 'react';
import Notification from '../Notifications';
import './BellIcon.css'


const BellIcon = ({notificationNum}) => {

    return (
        <Notification notificationNum={notificationNum} imgURL={"images/top-menu-icons/alert.png"} type={'bell-badge'}></Notification>
        
    );
};
export default BellIcon;