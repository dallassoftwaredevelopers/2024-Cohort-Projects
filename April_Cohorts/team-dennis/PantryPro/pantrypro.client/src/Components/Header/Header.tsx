// Header.tsx
import { FC } from 'react';


import './Header.css';
import ProfilePicture from '../ProfilePicture/ProfilePicture';
 

interface HeaderProps {
  title: string;
}

const Header: FC<HeaderProps> = ({ title }) => {
  return (
    <header className="header">
      <h1>{title} <span className="pantry-text">Pantry</span><span className="pro-text">Pro</span></h1>
     <button className="logout-button">Logout</button>
    <ProfilePicture/>
    </header>
  );
}

export default Header;
