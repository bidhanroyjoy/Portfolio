import React from "react";

const Tile = ({ title, mediumTitle, desc,result,year }) => {
  return (
    <div
      data-aos="zoom-in-up"
      className="data"
    //   className="mtb-10"
    //   style={{ background: "#fff", padding: "20px", width: "300px" }}
    >
      <p className="title">{title}</p>
      {/* <p className="primaryColor font-14 bold-500 mtb-10 uppercase">{title}</p> */}
      <p className="mediumTitle">
        {mediumTitle}
      </p>
      {/* <p className="textColor font-14 bold-600 mtb-10 uppercase">
        {mediumTitle}
      </p> */}
      <p className="desc">{desc}</p>
      <p className="result">{result}</p>
      <p className="year">{year}</p>
      {/* <p className="grey font-12 mtb-10">{desc}</p> */}
    </div>
  );
};

export default Tile;
