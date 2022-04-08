import React from 'react'
import "./Intro.css";

import "./Intro.css";
// import Vector1 from "../../img/Vector1.png";
// import Vector2 from "../../img/Vector2.png";

// import boy from "../../img/avatar5.png";
import boy from "../../img/avatar4.png";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Twitter from "../../img/twitter.png";
import Instagram from "../../img/instagram.png";
import Resume from './resume.pdf';
import {motion} from 'framer-motion/dist/es/index'
import { Link } from "react-scroll";
const Intro = () => {

  const transition = { duration: 2, type: "spring" };

  return (
    <div className="Intro" id="Intro">
   
      <div className="i-left">
        <div className="i-name">
          <span>Hy! I Am</span>
          <span>Bidhan Roy</span>
          <span>
            Frontend Developer with an experience in web designing
            and development, producting the Quality work
          </span>
        </div>
        {/* <Link to="contact" smooth={true} spy={true}> */}
        <div className='cv'>
          <button className="button i-button">Hire me</button>
          <a href={Resume} download>
          <button className="button crop">Download CV</button>
        </a>
        </div>
        {/* </Link> */}
        {/* social icons */}
        <div className="i-icons">
        <a href="https://github.com/bidhanroyjoy" target="_blank"><img src={Github} alt=""/> </a>
        <a href="https://www.linkedin.com/in/bidhanroyjoy19994/" target="_blank"><img src={LinkedIn} alt="" /></a>
        <a href="https://twitter.com/Bidhanr06168171" target="_blank"><img src={Instagram} alt="" /> </a>
       
        </div>
      </div>
      
      <div className="i-right">
        {/* <img src={Vector1} alt="" />
        <img src={Vector2} alt="" /> */}
        <img src={boy} alt="" className='crop' />
        
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={glassesimoji}
          alt=""
        />

        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={crown} text1="Frontend" text2="Developer" />
        </motion.div>

     
        <motion.div
          initial={{ left: "0rem", top: "17rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div"
        >
          
          <FloatinDiv img={thumbup} text1="Apps" text2="developer" />
        </motion.div>

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro