import React, { useState } from "react";

const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  // const closeMenu = () => {
  //   setShowMenu(false);
  // };

  return (
    <div className="container">
      <nav className="navbar">
        <div className="logo">
          <img src="./images/brand_logo.png" alt="logo" />
        </div>
        {showMenu && <div className="overlay" onClick={toggleMenu}></div>}
        <div className={`menu ${showMenu ? "show" : ""}`}>
          <div className="crossicon" onClick={toggleMenu}>
            <i className="bx bxl-xing"></i>
          </div>

          <ul>
            <a href="#">
              <li onClick={toggleMenu}>MENU</li>
            </a>
            <a href="#">
              <li onClick={toggleMenu}>LOCATION</li>
            </a>
            <a href="#">
              <li onClick={toggleMenu}>ABOUT</li>
            </a>
            <a href="#">
              <li onClick={toggleMenu}>CONTACT</li>
            </a>
          </ul>
          <a href="#" className="login-btn" onClick={toggleMenu}>
            Login
          </a>
        </div>
        <div className="menubar" onClick={toggleMenu}>
          <i className="bx bx-menu-alt-right"></i>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
