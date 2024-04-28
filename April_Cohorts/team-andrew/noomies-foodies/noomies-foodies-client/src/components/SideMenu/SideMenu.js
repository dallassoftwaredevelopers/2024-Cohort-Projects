import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './SideMenu.css';
import SideBtn from './SideButton/SideButton';

const SideMenu = ({ username, userProfile }) => {
    // get the route of the current page using useLocation hook from React Router
    const location = useLocation();

    return (
        <div className='side-bar'>
            <div className='profile'>
                <img src={userProfile} alt="user-icon"></img>
                <p>Welcome Back <span className='username'>{username}</span>!</p>
            </div>

            <ul className='menu'>
                <li>
                    <Link to="/planner">
                        <SideBtn  
                            iconUrlActive="/images/side-bar-icons/planner-white.png" 
                            iconUrlInactive="/images/side-bar-icons/planner-icon.png" 
                            alt="planner"
                            active={location.pathname === "/planner"}
                        > Planner
                        </SideBtn>
                    </Link>
                </li>

                <li>
                    <Link to="/profile">
                        <SideBtn  
                            iconUrlActive="/images/side-bar-icons/profile-white.png" 
                            iconUrlInactive="/images/side-bar-icons/profile-icon.png" 
                            alt="profile"
                            active={location.pathname === "/profile"}
                        > My Profile
                        </SideBtn>
                    </Link>
                </li>

                <li>
                    <Link to="/grocery">
                        <SideBtn  
                            iconUrlActive="/images/side-bar-icons/gg_list-white.png" 
                            iconUrlInactive="/images/side-bar-icons/gg_list-icon.png" 
                            alt="grocery"
                            active={location.pathname === "/grocery"}
                        > My Grocery List
                        </SideBtn>
                    </Link>
                </li>

                <li>
                    <Link to="/recipes">
                        <SideBtn  
                            iconUrlActive="/images/side-bar-icons/chef-white.png" 
                            iconUrlInactive="/images/side-bar-icons/recipes-icon.png" 
                            alt="recipes"
                            active={location.pathname === "/recipes"}
                        > My Recipes
                        </SideBtn>
                    </Link>
                </li>

                <li>
                    <Link to="/settings">
                        <SideBtn  
                            iconUrlActive="/images/side-bar-icons/settings-white.png" 
                            iconUrlInactive="/images/side-bar-icons/settings-icon.png" 
                            alt="settings"
                            active={location.pathname === "/settings"}
                        > Settings
                        </SideBtn>
                    </Link>
                </li>

                <li>
                    <Link to="/help">
                        <SideBtn  
                            iconUrlActive="/images/side-bar-icons/help-white.png" 
                            iconUrlInactive="/images/side-bar-icons/help-icon.png" 
                            alt="help"
                            active={location.pathname === "/help"}
                        > Help
                        </SideBtn>
                    </Link>
                </li>            
            </ul>

            <img className='side-bar-logo' src='/images/side-bar-icons/LOGO.png' alt="logo" ></img>
        </div>
    );
}

export default SideMenu;
