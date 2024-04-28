import React from 'react';
import Notification from '../Notifications';
import "./EmailIcon.css"

const EmailIcon = ({notificationNum}) => {
    return (
        <Notification notificationNum={notificationNum} imgURL={"images/top-menu-icons/mail.png"} type={'email-badge'}></Notification>
    );
};

export default EmailIcon;