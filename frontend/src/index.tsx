import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const graphQLClient = new ApolloClient({
  uri: "https://jp-firstproject-backend.azurewebsites.net/graphql/",
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <Router>
    <ApolloProvider client={graphQLClient}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ApolloProvider>
  </Router>,
  document.getElementById("root")
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
