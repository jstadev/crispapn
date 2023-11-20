import React from "react";
// import whitedot from "../../../public/assets/img/intro/react.svg";

const educationContent = [

  // {
  //   year: "2020 - Present",
  //   degree: "Content Creator",
  //   institute: "Freelance",
  //   details: `Producing easy to consume content by simplifiyng complicaded terms and topics for educational & motivational purposes. Playing with graphs + data for analyzing on-chain state & trends`,
  // },
  {
    // year: "Ecosystem Agent - Polkadot & Kusama Ecosystem",
    degree: "Ecosystem Agent ",
    institute: "Polkadot & Kusama Ecosystem",
    details: `Polkadot and Kusama ecosystem agent and one of the biggest advocates of our ecosystem. Always evolving always pushing`,
  },

  {
    // year: "2023",
    degree: "Operations",
    institute: "Solarbeam",
    details: `Over 2 years team-Solarbeam with main responsibility on Operations`,
  },
];

const Education = () => {
  return (
    <ul>
      {educationContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-history"></i>
            {/* <img className="dotl" src={whitedot} alt="dotlogo" /> */}
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.degree}
            <span className="place open-sans-font">{val.institute}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Education;
