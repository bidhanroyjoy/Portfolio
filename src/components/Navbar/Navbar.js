import React from 'react'
import "./Navbar.css";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className="n-wrapper" id="Navbar">

      <div className="n-left">
        <div className="n-name">Bidhan</div>
       
      </div>
     
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <li>
              <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
                Home
              </Link>
            </li>
            <li>
              <Link to="specialization" spy={true} smooth={true}>
                Specialization
              </Link>
            </li>
            <li>
              <Link to="qualification" spy={true} smooth={true}>
                Qualification
              </Link>
            </li>
            <li>
              <Link to="portfolio" spy={true} smooth={true}>
                Protfolio
              </Link>
            </li>
            <li>
              <Link to="achievement" spy={true} smooth={true}>
               Achievement
              </Link>
            </li>
          </ul>
        </div>
        <Link to="contact" spy={true} smooth={true}>
        <button className="button n-button">Contact</button>
        </Link>
      </div>
    </div>
  )
}

export default Navbar