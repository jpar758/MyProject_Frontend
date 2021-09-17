import React from "react";
import { Button } from "@material-ui/core";
import "./App.css";
import ProjectHeader from './stories/ProjectHeader/ProjectHeader';
import {Footer} from "./stories/Footer/Footer";

function App() {
  return (
 
    <div className="App">
      <ProjectHeader></ProjectHeader>
      <Footer></Footer>
    </div>  
  );
}
export default App; 