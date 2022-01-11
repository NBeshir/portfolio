import React,{Component} from "react";
import Home from './home';
import Profile from "./profile";
import Projects from "./projects";
import Skills from "./skills";
import Contact from "./contact";
import Footer from "./footer";
import Typed from "react-typed";
import Slide from "react-reveal/Slide";
import { FaMapPin } from "react-icons/fa";

class Main extends Component{
  constructor(props){
    super(props)
    this.state={
      sample:[]
    }
  }
 
  componentDidMount(){
this.setState({sample:[<Home/>]})
  }
  render(){
  
    return (
      <div className="home">
        {this.state.sample}
      </div>
    );
  }
};

export default Main