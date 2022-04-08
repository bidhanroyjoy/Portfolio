import React from 'react'
import Card from './Card'
import Skill from './Skill'
import { colors } from './style'
import MediumHeading from './MediumHeading'
import SmallHeading from './SmallHeading'
import './Specializing.css'

const Specializing = () => {
  const skills = [
    {
      skillName: "HTML/CSS",
      desc: "Hands on experience in Html/Css",
      value: 80,
      textColor: colors.primaryColor,
      pathColor: "#f2a154",
    },
    {
      skillName: "JavaScript",
      desc: "Hands on experience in JavaScript",
      value: 90,
      textColor: colors.primaryColor,
      pathColor: "#f9f871",
    },
    {
      skillName: "ReactJS",
      desc: "Hands on experience in ReactJS",
      value: 90,
      textColor: colors.primaryColor,
      pathColor: "#00af91",
    },
    {
      skillName: "PWA",
      desc: "Hands on experience in PWA",
      value: 60,
      textColor: colors.primaryColor,
      pathColor: "#845ec2",
    },
    {
      skillName: "Redux",
      desc: "Hands on experience in Redux",
      value: 85,
      textColor: colors.primaryColor,
      pathColor: "#54e346",
    },
    {
      skillName: "Bootstrap",
      desc: "Hands on experience in Bootstrap",
      value: 70,
      textColor: colors.primaryColor,
      pathColor: "#845ec2",
    },
  
    {
      skillName: "Sass",
      desc: "Hands on experience in Sass",
      value: 70,
      textColor: colors.primaryColor,
      pathColor: "#111d5e",
    },
    {
      skillName: "React-Native",
      desc: "Hands on experience in React-Native",
      value: 70,
      textColor: colors.primaryColor,
      pathColor: "#f88f01",
    },
    {
      skillName: "Github",
      desc: "Hands on experience in Github",
      value: 85,
      textColor: colors.primaryColor,
      pathColor: "#54e346",
    },
  ];
  return (
    <div className="container" id="specialization">
      {/* <Card style={{ padding: "1px" }}> */}
     
        <SmallHeading text="What I do" />
        <MediumHeading text="Specializing in" />
        <div
          data-aos="fade-up"
          // className="flexRow wrap justify-sb"
          className="layout"
          style={{ padding: "30px" }}
        >
          {skills.map((skill, index) => (
            <Skill
              key={index}
              skillName={skill.skillName}
              desc={skill.desc}
              value={skill.value} 
              textColor={colors.primaryColor}
              pathColor={skill.pathColor}
            />
          ))}
        </div>
      {/* </Card> */}
    </div>
  )
}

export default Specializing