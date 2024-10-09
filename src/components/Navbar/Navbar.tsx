import React from "react";
import "./Navbar.css";
import happyface from "componentsImageshappyface.png";

interface NavbarProps {
  children?: React.ReactNode;
}

interface NavItemProps {
  icon: string; // Το NavItem δέχεται μόνο icon
}

const Navbar = ({ children }: NavbarProps) => {
  return <nav className="navbar">{children}</nav>;
};

const NavItem = ({ icon }: NavItemProps) => {
  return (
    <li className="nav-item">
      <a href="#" className="icon-button">
        {icon}
      </a>
    </li>
  );
};

export default Navbar;
export { NavItem };
