import React, { Component } from "react";
import ScrollReveal from "scrollreveal";

//import sr from "./ScrollReveal";
import Zoom from "react-reveal/Zoom";
import Flip from "react-reveal/Flip";
import Aos from "aos";
import "aos/dist/aos.css";
class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: null,
    };
  }

  componentDidMount() {
    // ScrollReveal().reveal(".headline");
    Aos.init({ duration: 1500 });
  }
  render() {
    return (
      <div className="container project-container  " id="projects">
        {" "}
        <h1 className="projects">Projects</h1>
      
        <div className="row m-2 headline" data-aos="flip-down">
          <div className="col project" data-aos="fade-down">
            <img
              src="./images/sunshine.png"
              className="mx-auto image"
              alt="sunshine cofee website."
            />
          </div>
          <div className="col project" data-aos="fade-down">
            <img
              src="images/weather.png"
              className=" mx-auto image "
              alt="Photo of a kitten looking menacing."
            />
          </div>
          <div className="col project" data-aos="fade-down">
            <img
              src="images/recipe.png"
              className=" mx-auto image"
              alt="Photo of a kitten looking menacing."
            />
          </div>
        </div>
        <div className="row m-2 headline" data-aos="flip-down">
          <a href="https://smart-face-detecting-brain.herokuapp.com" className="col project" data-aos="fade-down">
            <img
              src="images/face-detector.png"
              className=" mx-auto image"
              alt="Photo of a kitten looking menacing."
            />
          </a>
          <div className="col project" data-aos="fade-down">
            <a href="https://quizzical-neumann-81018c.netlify.app">
            <img
              src="images/github-finder.png"
              className="mx-auto image "
              alt="Photo of a kitten looking menacing."
            />
            </a>
          </div>
          <div className="col project" data-aos="fade-down">
            <img
              src="http://placekitten.com/g/600/400"
              className=" mx-auto image "
              alt="Photo of a kitten looking menacing."
            />
          </div>
        </div>
        <div className="row m-2 headline" data-aos="flip-down">
          <div className="col project" data-aos="fade-down">
            <img
              src="http://placekitten.com/g/600/400"
              className="  mx-auto image"
              alt="Photo of a kitten looking menacing."
            />
          </div>
          <div className="col project" data-aos="fade-down">
            <img
              src="http://placekitten.com/g/600/400"
              className="  mx-auto image"
              alt="Photo of a kitten looking menacing."
            />
          </div>
          <div className="col project" data-aos="fade-down">
            <img
              src="http://placekitten.com/g/600/400"
              className=" mx-auto image"
              alt="Photo of a kitten looking menacing."
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
