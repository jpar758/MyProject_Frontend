import React from "react";
import { Button } from "@material-ui/core";
import "./App.css";
import ProjectHeader from "./stories/ProjectHeader/ProjectHeader";
import { Footer } from "./stories/Footer/Footer";
import { SubmitForm } from "./stories/SubmitForm/SubmitForm";
import PopUp from "./stories/PopUp/PopUp";
import { Route, Switch } from "react-router";
import { HomePage } from "./stories/Pages/Homepage";
import { SubmitPage } from "./stories/Pages/SubmitPage";
import { useQuery } from "@apollo/client";
import { getBlogs } from "./api/__generated__/getBlogs";
import { BLOGS } from "./api/queries";

function App() {
  const { loading, error, data } = useQuery<getBlogs>(BLOGS);
  if (loading) return <p>loading..</p>;

  return (
    <div className="App">
      <Switch>
        <Route path="/home" component={HomePage} />
        <Route path="/submit" component={SubmitPage} />
      </Switch>
      <ProjectHeader></ProjectHeader>
      {data?.blogs?.nodes?.map((BLOG) => (
        <p>{BLOG.name}</p>
      ))}
      <Footer></Footer>
      <PopUp>
        <SubmitForm />
      </PopUp>
    </div>
  );
}
export default App;
