import React from "react";
import logo from "../img/logo.svg";
import "../css/App.css";
import Header from "./Header.jsx";

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>React Component</h2>
            <Header />
            <div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}



export default App;
