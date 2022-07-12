import { useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import DashboardComponent from "../components/DashboardComponent";

import HeaderComponent from "../components/HeaderComponent";
import MainComponent from "../components/MainComponent";

const HomePage = () => {
  return (
    <>
      <HeaderComponent />
      <DashboardComponent />
      <MainComponent />
    </>
  );
};
export default HomePage;
