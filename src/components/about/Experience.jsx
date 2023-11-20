import React from "react";
import whitedot from "../../../public/assets/img/intro/dot_white.png";

const experienceContent = [
  {
    // year: "   2020 - Present",
    position: " Co-Founder & Member",
    compnayName: "Chaos Dao",
    details: `Highly involved in the establishment of ChaosDAO with organization, moderation & content creation as key areas of contribution`,
  },
 
  {
    // year: "2022",
    position: "Founder",
    compnayName: "Polkadot Greece",
    details: `The first time ever Polkadot is introduced in Greek language with simplified explanations about its key characteristics & basic concepts all gathered in one very user-friendly place`,
  },

  {
    // year: "2020 - Present",
    position: " Content Creator",
    compnayName: "Freelance",
    details: `Producing easy to consume content by simplifiyng complicaded terms and topics for educational & motivational purposes. Playing with graphs + data for analyzing on-chain state & trends`,
  },
];

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            {/* <i className="fa fa-history"></i> */}
            <img className="dotl" src={whitedot} alt="dotlogo" />
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.position}
            <span className="place open-sans-font">{val.compnayName}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
