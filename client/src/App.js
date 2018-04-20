import React, { Component } from "react";
import "./App.css";
import Navbar from './Components/Navbar/Navbar.js';
import Jumbotron from "./Components/Jumbotron/Jumbotron.js";
import Info from "./Components/Info/Info.js";
import LoginModal from "./Components/Login-Modal/LoginModal.js";
import Content from "./Components/Content/Content.js";
class App extends Component {
  render() {
    return (
      <div>
      <Navbar />
      <Jumbotron />
      <LoginModal />
      <Info />
      <Content />
      
      </div>
    );
  }
}


export default App;
