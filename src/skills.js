import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import * as Icons from "@fortawesome/fontawesome-free-solid-svg-icons";
import { fadeIn } from "react-animations";
import Aos from "aos";
import "aos/dist/aos.css";
import { FaBootstrap } from "react-icons/fa";
import { FaGit } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import Slide from "react-reveal/Slide";

const Skills = () => {
  return (
    <Slide top>
       <div className="container skills-container mt-5 " id="skills">
        <h1>Skills</h1>
       

        <div className="row  mx-auto skills-row">
          <div className="col icons ">
            <FaBootstrap className="icon" />
          </div>
          <div className="col  icons ">
            <FaGit className="icon" />
          </div>
          <div className="col  icons">
            <FaJsSquare className="icon" />
          </div>
        </div>
        <div className="row mx-auto skills-row">
          <div className="col icons">
            <FaReact className="icon" />
          </div>
          <div className="col icons">
            <FaCss3Alt className="icon" />
          </div>
          <div className="col icons">
            <FaCss3Alt className="icon" />
          </div>
        </div>
        <div className="row  mx-auto skills-row">
          <div className="col icons">
            <FaReact className="icon" />
          </div>
          <div className="col icons">
            <FaCss3Alt className="icon" />
          </div>
          <div className="col icons">
            <FaCss3Alt className="icon" />
          </div>
        </div>
        <div className="row  mx-auto skills-row">
          <div className="col icons">
            <FaReact className="icon" />
          </div>
          <div className="col icons">
            <FaCss3Alt className="icon" />
          </div>
          <div className="col icons">
            <FaCss3Alt className="icon" />
          </div>
        </div>
      </div>

    </Slide>
  );
};

export default Skills;
