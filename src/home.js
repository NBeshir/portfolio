import React,{Component} from "react";

import Profile from "./profile";
import Projects from "./projects";
import Skills from "./skills";
import Contact from "./contact";
import Certifications from './Certifications' ;
import Footer from "./footer";
import Typed from "react-typed";
import Slide from "react-reveal/Slide";

class Home extends Component{
  constructor(props){
    super(props)
    this.state={
      sample:[]
    }
  }
 
  
  render(){
  
    return (
      <div className="home">
       
            <Profile /> <hr className="hr"/>
            <Projects /> <hr className="hr"/>
            <Skills/> <hr className="hr"/>
            <Contact/> <hr className="hr"/>
             <Certifications/> 
            <Footer/> 
       
      </div>
    );
  }
};
export default Home;
