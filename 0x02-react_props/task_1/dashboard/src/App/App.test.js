import React from "react";
import { shallow } from "enzyme";
// import App from "./App";
import Login from "../Login/Login";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const wrapper = shallow(
  <>
    <Login />
    <Header />
    <Footer />
    <Notification />
  </>
);

it("renders without crashing", () => {
  shallow(
    <>
      <Login />
      <Header />
      <Footer />
      <Notification />
    </>
  );
});
