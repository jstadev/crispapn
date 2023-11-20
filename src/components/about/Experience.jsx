import React from "react";

const experienceContent = [
  {
    // year: "   2020 - Present",
    position: " Co-Founder & Member",
    compnayName: "Chaos Dao",
    details: `Highly involved in the establishment of ChaosDAO with organization, moderation & content creation as key areas of contribution`,
  },
  {
    // year: "2020 - Present",
    position: " Operations",
    compnayName: "Solarbeam",
    details: `Over 2 years team-Solarbeam with main responsibility on Operations `,
  },
  // {
  //   year: "2022",
  //   position: "Advisor",
  //   compnayName: "Kawa Finance",
  //   details: `Provided strategic guidance and advisory support to Kawa Finance, leveraging comprehensive knowledge and experience to enhance the project's development and success in the decentralized finance (DeFi) sector.`,
  // },
];

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-history"></i>
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
