import React from "react";
import { Button } from "@material-ui/core";
import "./App.css";
import ProjectHeader from './stories/ProjectHeader/ProjectHeader';
import {Footer} from "./stories/Footer/Footer";
import  {SubmitForm}  from "./stories/SubmitForm/SubmitForm";
import PopUp from "./stories/PopUp/PopUp";
import { Route, Switch } from 'react-router';
import { HomePage } from './stories/Pages/Homepage';
import { SubmitPage } from './stories/Pages/SubmitPage';


function App() {
  return (
 
    <div className="App">
      <Switch>
        <Route path="/home" component={HomePage} />
        <Route path="/submit" component={SubmitPage} />
      </Switch>
      <ProjectHeader></ProjectHeader>
      <Footer></Footer>
      <SubmitForm/>
      <PopUp/>
    </div>  
  );
}
export default App; 