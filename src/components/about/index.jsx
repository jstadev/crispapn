import React from "react";
import Achievements from "./Achievements";
import Education from "./Education";
import Experience from "./Experience";
import PersonalInfo from "./PersonalInfo";
import Skills from "./Skills";
import cv from "../../../public/assets/img/cv.webp";
import heroImgMobile from "../../../public/assets/img/hero/profile.jpg";
import Image from "next/image";
import Social from "../Social";

const index = () => {
  return (
    <section className="main-content ">
      <div className="container">
        <div className="row">
          {/* Personal Info Starts */}

          <div className="col-xl-6 col-lg-5 col-12">
            <div className="row">
              <div className="col-12">
                <h3 className="text-uppercase custom-title mb-0 ft-wt-600">
                  Get to know me
                </h3>
              </div>
              {/* End .col */}

              <div className="col-12 d-block d-sm-none">
                <Image
                  src={heroImgMobile}
                  className="img-fluid main-img-mobile"
                  alt="about avatar"
                />
              </div>
              {/* image for mobile menu */}

              <div className="col-12">
                <PersonalInfo />
                
              </div>
              <div className="col-12">
                <p>
                Hello everybody, Cris_Pap here!
<br/>
Web3 native with extensive knowledge on blockchain technologies & deep understanding of the audience, markets & products.
<br/><br/>
Joined the blockchain industry in 2018 with the last 3+ years solely focus on Polkadot and Kusama!
<br/><br/>
Writing simplified easy to consume content for around 2years with main goal to raise brand awareness and help onboarding new users to our ecosystem.
<br/><br/>
Super passionate about Polkadot with multiple contributions on various fields throughout these years.
<br/><br/>
<a className="pink" href="mailto:chris_pap8@hotmail.com"> Lets connect! </a>

                </p>
              </div>
              <div className="col-12">
              <Social/>
              </div>
              
              {/* End personal info */}

              <div className="col-12 mt-1">
                {/* <a className="button" href={cv} download>
                  <span className="button-text">Download CV</span>
                  <span className="button-icon fa fa-download"></span>
                </a> */}
              </div>
              {/* End download button */}
            </div>
          </div>
          {/*  Personal Info Ends */}

          {/*  Boxes Starts */}
          <div className="col-xl-6 col-lg-7 col-12 mt-5 mt-lg-0">
            <Achievements />
          </div>
          {/* Achievements Ends */}
        </div>
        {/* End .row */}

        <hr className="separator" />

        {/* Skills Starts */}
        {/* <div className="row">
          <div className="col-12">
            <h3 className="text-uppercase pb-4 pb-sm-5 mb-3 mb-sm-0 text-start text-sm-center custom-title ft-wt-600">
              My Skills
            </h3>
          </div>
          <Skills />
        </div> */}
        {/* Skills Ends */}

        <hr className="separator mt-1" />

        {/* Experience & Education Starts */}
        <div className="row">
          <div className="col-12">
            <h3 className="text-uppercase pb-5 mb-0 text-start text-sm-center custom-title ft-wt-600">
              My Contributions
            </h3>
          </div>
          <div className="col-lg-6 m-15px-tb">
            <div className="resume-box">
              <Experience />
            </div>
          </div>
          <div className="col-lg-6 m-15px-tb">
            <div className="resume-box">
              <Education />
            </div>
          </div>
        </div>
        {/*  Experience & Education Ends */}
      </div>
    </section>
  );
};

export default index;
