import React, { Component } from "react";
import "./App.css";
import Navbar from './Components/Navbar/Navbar.js';
import Jumbotron from "./Components/Jumbotron/Jumbotron.js";
import Info from "./Components/Info/Info.js";
import LoginModal from "./Components/Login-Modal/LoginModal.js";
import Content from "./Components/Content/Content.js";
import Footer from "./Components/Footer/Footer.js";
import DoFavor from "./Components/DoFavor/DoFavor.js";
class App extends Component {
  render() {
    return (
      <div>
      <Navbar />
      <Jumbotron />
      <LoginModal />
      <Info />
      <Content />

      <Footer />
      
      </div>
    );
  }
}


export default App;
