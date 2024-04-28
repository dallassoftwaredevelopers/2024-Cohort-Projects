import React from 'react';
import Fridge from './Fridge-btn/Fridge-btn';
import SearchBar from './Search/SearchBar';
import BellIcon from './Notifications/BellIcon/BellIcon';
import EmailIcon from './Notifications/EmailIcon/EmailIcon';
import './TopMenu.css'

const TopMenu = ({alertNum, emailNum}) => {

    return (
        <div className='top-menu'>
            <div className='menu-items'>
                <div className='menu-items-left'>
                    <SearchBar className='search-bar'></SearchBar>
                </div>
                <div className='menu-items-right'>
                    <a href="#" className='mail-icon'><EmailIcon notificationNum={emailNum} ></EmailIcon></a>
                    <a href="#" className='bell-icon'><BellIcon notificationNum={alertNum} ></BellIcon></a>
                    <Fridge className='fridge-icon'></Fridge>

                </div>
                
                
                
            </div>
        </div>
    );
};
export default TopMenu;


