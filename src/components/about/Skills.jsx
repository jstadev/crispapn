import React from "react";

const skillsContent = [
  { skillClass: "p85", skillPercent: "85", skillName: "Marketing" },
  { skillClass: "p89", skillPercent: "89", skillName: "Project Managment" },
  { skillClass: "p70", skillPercent: "70", skillName: "Copy Writing" },
  { skillClass: "p66", skillPercent: "66", skillName: "Community Managment" },
  { skillClass: "p95", skillPercent: "95", skillName: "Photoshop" },
  { skillClass: "p50", skillPercent: "50", skillName: "Data Analysis" },
  { skillClass: "p65", skillPercent: "65", skillName: "kati akoma" },
  { skillClass: "p45", skillPercent: "45", skillName: "akoma kati" },
];

const Skills = () => {
  return (
    <>
      {skillsContent.map((val, i) => (
        <div className="col-6 col-md-3 mb-3 mb-sm-5" key={i}>
          <div className={`c100 ${val.skillClass}`}>
            <span>{val.skillPercent}%</span>
            <div className="slice">
              <div className="bar"></div>
              <div className="fill"></div>
            </div>
          </div>
          <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
            {val.skillName}
          </h6>
        </div>
      ))}
    </>
  );
};

export default Skills;
