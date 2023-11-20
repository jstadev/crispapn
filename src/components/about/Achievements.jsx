import React from "react";

const achievementsContent = [
  { title: "4", subTitle1: "blockchain", subTitle2: "experience" },
  { title: "150", subTitle1: "topics", subTitle2: "covered" },
  { title: "∞", subTitle1: "nfts", subTitle2: "colleccted" },
  { title: "4269", subTitle1: "coffee", subTitle2: "drunk" },
];

const Achievements = () => {
  return (
    <div className="row">
      {achievementsContent.map((val, i) => (
        <div className="col-6" key={i}>
          <div className="box-stats with-margin">
            <h3 className="poppins-font position-relative">{val.title}</h3>
            <p className="open-sans-font m-0 position-relative text-uppercase">
              {val.subTitle1} <span className="d-block">{val.subTitle2}</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Achievements;
