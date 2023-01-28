import { useState } from "react";
import "./App.css";
import logo from "./assets/ChitChat.png";
import { useForm } from "react-hook-form";
import Login from "./components/Login";

function App() {
  return (
    <div className="App px-24">
      <div className="app-name">
        <img src={logo} alt="Chitchat"></img>
      </div>
      <Login />
      {/* <Register /> */}
    </div>
  );
}
export default App;
