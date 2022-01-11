import "./App.css";
import React, { Component } from "react";
import { Animate } from "react-animate-mount";
import Navigation from "./navigation";
import Home from "./home";
import Profile from "./profile";
import Projects from "./projects";
import Skills from "./skills";
import Contact from "./contact";
import Footer from "./footer";
import { Transition } from "react-transition-group";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { fadeIn } from "react-animations";
//import { Shuffle } from "react-shuffle";
import Main from './main'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: null,
    };
  }

  componentDidMount() {
   this.setState({show:<Home/>})
  }

  render() {
   
    return (
      <BrowserRouter >
        <div className="app ">
          
          <Navigation />
         
          <Switch>
          <Route exact path="/" component={Home} />
          
          <Route exact path="/home" component={Home} />
            

            <Route exact path="/projects" component={Projects} />

            <Route exact path="/skills" component={Skills} />
            <Route exact path="exact" path="/contact" component={Contact} />

           
          </Switch>
       
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
