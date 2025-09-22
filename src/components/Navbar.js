import React, { useState } from "react";
import FUDLogo from "../assets/FUDLogo.png";
import "./Navbar.css";

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null); // Track which menu is clicked

  const handleMenuClick = (menu) => {
    setActiveMenu(menu === activeMenu ? null : menu); // Toggle menu
  };

  return (
    <>
      <div className="nav-bg">
        <img src={FUDLogo} alt="fudlogo" className="logo-img" />

        <div className="nav-menu">
          <div onClick={() => handleMenuClick("about")}>
              <p className="menu1 menu">
              About us <span className="arrow"></span>
            </p>
          </div>

          <div onClick={() => handleMenuClick("studyAbroad")}>
            <p className="menu2 menu">
              Study in Abroad <span className="arrow"></span>
            </p>
          </div>

          <div onClick={() => handleMenuClick("studyUK")}>   
            <p className="menu3 menu">
              Study in UK & Ireland <span className="arrow"></span>
            </p>
          </div>

          <div onClick={() => handleMenuClick("courseFinder")}>
            <p className="menu3 menu">
              Course Finder <span className="arrow"></span>
            </p>
          </div>

          <div onClick={() => handleMenuClick("countries")}>
            <p className="menu3 menu">
              Countries <span className="arrow"></span>
            </p>
          </div>
        </div>
      </div>

      {/* Content section */}
      <div className="menu-content">
        {activeMenu === "about" && (
          <div>
            <h2>About Us</h2>
            <p>Company details: FlyurDream Consultancy</p>
            <p>Contact: info@flyurdream.com | +91 12345 67890</p>
          </div>
        )}

        {activeMenu === "studyAbroad" && (
          <div>
            <h2>Study in Abroad</h2>
            <p>Information about studying abroad programs.</p>
          </div>
        )}

        {activeMenu === "studyUK" && (
          <div>
            <h2>Study in UK & Ireland</h2>
            <p>Details about UK & Ireland universities.</p>
          </div>
        )}

        {activeMenu === "courseFinder" && (
          <div>
            <h2>Course Finder</h2>
            <p>Search and find your course easily.</p>
          </div>
        )}

        {activeMenu === "countries" && (
          <div>
            <h2>Countries</h2>
            <p>All countries where we operate.</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
