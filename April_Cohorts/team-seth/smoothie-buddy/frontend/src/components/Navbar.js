import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
  return (
    <header>
      <nav className="nav">
        {/* add home to the below path="/" to point the site-title to /home if enabled in App.js */}
        <Link to="/" className="site-title">
          <img
            src="img/logo-transparent-bg.png"
            alt=""
            height="100"
            width="100"
          />
          <span className="pink" inline-block margin-right>
            Smoothie
          </span>
          <span className="orange">Buddy</span>
        </Link>
        <CustomLink to="/kitchen">My Kitchen</CustomLink>
      </nav>
    </header>
  );
}

export function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <span className={isActive ? "active" : "hover"}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </span>
  );
}
