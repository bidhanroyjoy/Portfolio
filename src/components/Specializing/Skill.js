import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import './Specializing.css'

const Skill = (props) => {
  return (
    // <div className="flexRow align-center mtb-10">
    <div className="skill">
      <div className="skillContainer">
        <CircularProgressbar
          value={props.value}
          text={`${props.value}%`}
          styles={buildStyles({
            textColor: props.textColor,
            pathColor: props.pathColor,
          })}
        />
      </div>

      {/* <div className="mlr-10"> */}
      <div className="skillbox">
        <p className="skillName">{props.skillName}</p>
        {/* <p className="font-16 bold-500 textColor mtb-10">{props.skillName}</p> */}
        <p className="desc">{props.desc}</p>
        {/* <p className="font-14 bold-500 grey mtb-10">{props.desc}</p> */}
      </div>
    </div>
  );
};

export default Skill;
