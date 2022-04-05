import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>bidhan19994@gmail.com</span>
        <div className="f-icons">
        <Insta color="white" size={"3rem"} />
        <a href="https://www.linkedin.com/in/bidhanroyjoy19994/" target="_blank"> <Linkedin color="white" size={"3rem"} /> </a>
          <a href="https://github.com/bidhanroyjoy" target="_blank"> <Gitub color="white" size={"3rem"} /> </a>
        {/* <a href="https://github.com/bidhanroyjoy" target="_blank"><img src={Github} alt="" style={ color: white}/> <a href="https://github.com/bidhanroyjoy" target="_blank">
        <a href="https://www.linkedin.com/in/bidhanroyjoy19994/" target="_blank"><img src={LinkedIn} alt="" /></a>
        <a href="https://github.com/bidhanroyjoy" target="_blank"><img src={Instagram} alt="" /> </a> */}
        </div>
  
      </div>
    </div>
  );
};

export default Footer;
