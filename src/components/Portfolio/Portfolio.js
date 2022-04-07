import React from 'react'
import './Portfolio.css'
import Card from './MediaCard'
import crypto from "../../img/crypto.png";
import dashboard from "../../img/dashboard.png";
import expensetracker from "../../img/expensetracker.png";
import iforestry from "../../img/iforestry.png";
import falcon from "../../img/falcon.png";
import ecommerce from "../../img/ecommerce.png";

const Portfolio = () => {
    const data=[
        {
            img:ecommerce,
            link1:"https://github.com/bidhanroyjoy/E-commerce",
            link2:"https://ecstatic-edison-fda9e3.netlify.app/"
        },
        {
            img:expensetracker,
            link1:"https://github.com/bidhanroyjoy/Expense_Tracker",
            link2:"https://wallet-track.netlify.app"
        },
        {
            img:falcon,
            link1:"https://github.com/bidhanroyjoy/data_of_rocket",
            link2:"https://nervous-davinci-453fd7.netlify.app"
        },
        {
            img:dashboard,
            link1:"https://github.com/bidhanroyjoy/Admin_Panel",
            link2:"https://adminpanell.netlify.app"
        },
        {
            img:iforestry,
            link1:"https://github.com/bidhanroyjoy/E-commerce",
            link2:"https://iforestery.herokuapp.com/"
        },
        {
            img:crypto,
            link1:"https://github.com/bidhanroyjoy/CryptoApp",
            link2:"https://digitalcurrency.netlify.app"
        },
     
    ];
  return (
    <div className="portfolio" id="portfolio">
        <span>Recent Projects</span>
      <span>Portfolio</span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
 
    <div className='project-detail'>
        {data.map(project=><Card project={project}/>)}
    </div>

        </div>
  )
}

export default Portfolio










// import React, { useContext } from "react";
// import "./Portfolio.css";
// import { Swiper, SwiperSlide } from "swiper/react"
// import 'swiper/swiper-bundle.min.css'
// import 'swiper/swiper.min.css'
// // import "swiper/css";
// import Sidebar from "../../img/sidebar.png";
// import Ecommerce from "../../img/ecommerce.png";
// import HOC from "../../img/hoc.png";
// import MusicApp from "../../img/musicapp.png";
// // import { themeContext } from "../../Context";
// const Portfolio = () => {
// //   const theme = useContext(themeContext);
// //   const darkMode = theme.state.darkMode;
//   return (
//     <div className="portfolio" id="portfolio">
//       {/* heading */}
//       <span>Recent Projects</span>
//       <span>Portfolio</span>

//       {/* slider */}
//       <Swiper
//         spaceBetween={30}
//         slidesPerView={3}
        
//         grabCursor={true}
//         className="portfolio-slider"
//       >
//         <SwiperSlide>
//           <img src={Sidebar} alt="" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={Ecommerce} alt="" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={MusicApp} alt="" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={HOC} alt="" />
//         </SwiperSlide>
//       </Swiper>
//     </div>
//   );
// };

// export default Portfolio;
