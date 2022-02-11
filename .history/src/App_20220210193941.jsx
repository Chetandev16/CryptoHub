import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd";
import {
  Navbar,
  Exchanges,
  Homepage,
  Cryptocurrencies,
  CryptoDetails,
  News,
} from "./components";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route exact path="/" component={<Homepage />} />{" "}
              <Route exact path="/exchanges" component={<Exchanges />} />
              <Route
                exact
                path="/cryptocurrencies"
                component={<Cryptocurrencies />}
              />
              <Route
                exact
                path="/crypto/:coinId"
                component={<CryptoDetails />}
              />
              <Route exact path="/news" component={<News />} />
            </Routes>
          </div>
        </Layout>
      </div>
      <div className="footer"></div>
    </div>
  );
};

export default App;
