import  "./SideButton.css";

const SideBtn = ({ menuLink, iconUrlActive, iconUrlInactive, alt, children, active}) => (
    <a href={menuLink} className={`side-btn ${active ? 'active' : ''}`}>
        <img src={active ? iconUrlActive : iconUrlInactive} alt={alt} className={active ? "active-icon" : ''}></img>
        {children} 
    </a>
   );

   export default SideBtn;