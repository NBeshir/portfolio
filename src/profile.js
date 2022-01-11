import React, { Component } from "react";
import Typed from "react-typed";
import Slide from "react-reveal/Slide";


const Profile = ()=> {
  
    return (
      <Slide top>
        <div
          className="animate-profile slideInDown mt-5 p-5"
          id="about"
        >
          <div className="w-40 mt5 profile  " id="slide">
            <h1>
              Hi, I'm <em>Nejmiya</em>
            </h1>
            <Typed
              strings={["Front End Developer", "React", "Mother"]}
              typeSpeed={50}
              autoStart="true"
              loop="true"
            />
            <br />
            <p className="">
              I am a self thought junior front end developer. I have experience
              working on small projects and I am always ready to learn more
            </p>{" "}
          </div>
          <a className="btn btn-secondary" href=" mailto:tnejmi@gmail.com">
            Get in touch
          </a>
        </div>
      </Slide>
    );
  
}

const profileStyle = {
  // padding: "1.5rem",
  // fontFamily: "roboto",
  // transition: "transform 0.2s",
  // width: "400px",
  // height: "300px",
  // margin: " 0 auto",
};

export default Profile;
