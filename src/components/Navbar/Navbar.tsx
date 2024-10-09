import React from "react";
import "./Navbar.css";
import happyface from "componentsImageshappyface.png";

interface Props {
  children?: React.ReactNode;
  icon: React.ReactNode;
}

const Navbar = ({ children }: Props) => {
  return <nav className="navbar">{children}</nav>;
};

const NavItem = ({ icon }: Props) => {
  return (
    <li className="nav-item">
      <a href="#" className="icon-button ">
        {icon}
      </a>
    </li>
  );
};

export default Navbar;
NavItem;
