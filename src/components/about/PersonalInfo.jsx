import React from "react";

const personalInfoContent = [
  // { meta: "first name", metaInfo: "Cris", hasColor: "" },
  // { meta: "last name", metaInfo: "Pap", hasColor: "" },
  // { meta: "Age", metaInfo: "27 Years", hasColor: "" },
  // { meta: "Nationality", metaInfo: "Tunisian", hasColor: "" },
  // { meta: "Freelance", metaInfo: "Available", hasColor: "green" },
  // { meta: "Location", metaInfo: "Asynchronous Era", hasColor: "" },
  // { meta: "focus", metaInfo: "All things @Polkadot", hasColor: "" },
  // { meta: "Email", metaInfo: "hello@crispap.com", hasColor: "" },
  // { meta: "Twitter", metaInfo: " @Cris_Pap8", hasColor: "" },
  // { meta: "", metaInfo: "kala", hasColor: "" },
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span
            className={`value d-block d-sm-inline-block d-lg-block d-xl-inline-block ${val.hasColor}`}
          >
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
