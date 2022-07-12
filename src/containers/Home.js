import { useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import HeaderComponent from "../components/HeaderComponent";
import MainComponent from "../components/MainComponent";

const HomePage = () => {
  return (
    <>
      <HeaderComponent />
      <MainComponent />
    </>
  );
};
export default HomePage;
