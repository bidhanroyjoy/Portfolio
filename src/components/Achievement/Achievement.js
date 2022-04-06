import React from 'react'
import Html from "../../img/html.png";
import Udemy from "../../img/udemy.png";
import Excel from "../../img/excel.png";
import Coursera from "../../img/coursera.png";
import Hackathonn from "../../img/hackathon1.png";
import Hackathon from "../../img/hackathon2.png";
import Certificate from "../../img/certificate.png";
import Card from './Box'

import './Achievement.css'

const Achievement = () => {
    const img=[
        {
            image:Hackathonn
        },
        {
            image:Udemy
        },
        {
            image:Hackathon
        },
        {
            image:Coursera
        },
        {
            image:Excel
        },
        {
            image:Certificate
        },
    ]
  return (
    <div className="achievement" id="achievement">
        <span>Achievement</span>
        <div className='project-detail'>
        {img.map(project=><Card project={project}/>)}
    </div>

        </div>
  )
}

export default Achievement