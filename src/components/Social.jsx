import React from "react";

const SocialShare = [
  {
    iconName: "fa fa-twitter",
    link: "https://twitter.com/Cris_Pap8",
  },
  { iconName: "fa fa-telegram", link: "https://t.me/Cris_Pap" },
  // {
  //   iconName: "fa-brands fa-discord",
  //   link: "https://www.twitter.com/",
  // },
  { iconName: "fa fa-envelope", link: "http://discordapp.com/users/827156319097323520" },
];

const Social = () => {
  return (
    <ul className="social list-unstyled pt-1 mb-5">
      {SocialShare.map((val, i) => (
        <li key={i}>
          <a href={val.link} target="_blank" rel="noreferrer">
            <i className={val.iconName}></i>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Social;
