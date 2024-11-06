import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  return (
    <>
      <footer className={isHomePage ? 'homePage_footer otherPage_footer': "otherPage_footer"}>
        <div className="container">
          <h4>Prime Haven</h4>
          <p>
          At Prime Haven, we bring luxury to life. Our homes are designed with exceptional care, blending beauty with modern elegance. Every detail is thoughtfully curated to ensure your home isn’t just a place to live, but a perfect retreat you'll cherish.

          </p>
          <ul>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/termsandconditions"}>Terms&Conditions</Link>
            </li>
            <li>
              <Link to={"/"}>Contact</Link>
            </li>
          </ul>
        </div>
        <div className="container">
          <h4>Connect with us</h4>
          <p>+91 7973165722</p>
          <p>akkrishna1462@gmail.com</p>
          <p>© All Rights Reserved By Akash-Sharma.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
