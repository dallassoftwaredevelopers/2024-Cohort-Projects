// ProfilePicture.tsx

import './ProfilePicture.css';
import profileImage from '../../assets/profile.jpeg';

const ProfilePicture = () => {
  return (
    <div className="profile-picture">
      <img src={profileImage} alt="Profile" className="picture" />
      
    </div>
  );
};

export default ProfilePicture;