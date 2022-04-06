import React from 'react'
import SmallHeading from '../Specializing/SmallHeading'
import MediumHeading from '../Specializing/MediumHeading'
import Tile from './Tile'

import './Qualification.css'

const Qualification = () => {
    return (
        <div className="contain" id="qualification">
          <SmallHeading text="Qualifications" />
          {/* <MediumHeading text={"My Education"} /> */}
          <div
            className='education'
            // className="flexRow flexCol align-center justify-sb"
            // style={{ margin: "50px 0" }}
          >
            {/* <div data-aos="fade-up-right">
              <img src={me} alt="" /> */}
              {/* <div
                style={{
                  background: "#fff",
                  padding: "10px 10px",
                  boxSizing: "border-box",
                  display: "flex",
                  justifyContent: "center",
                  borderRadius: "20px",
                }}
              > */}
                {/* <div className="mlr-10">
                  <Button label="Hire Me" />
                </div> */}
                {/* <div className="mlr-10">
                  <Button label="Download CV" inverse={true} />
                </div> */}
              {/* </div> */}
            {/* </div> */}
            <div>
              <Tile
                title="B.Tech"
                mediumTitle="Information Technology(IT)"
                desc="Lovely Professional University, India-Punjab"
                result="6.85/10"
                year="2016-2020"
              />
              <Tile
                title="H.S.C"
                mediumTitle="Science"
                desc="Dhaka College, Dhaka"
                result="4.7"
                year="2014"
              />
              <Tile
                title="S.S.C"
                mediumTitle="Science"
                desc="Willes Little Flower School &College"
                result='5.00'
                year="2012"
              />
            </div>
          </div>
        </div>
      );
}

export default Qualification