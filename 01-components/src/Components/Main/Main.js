import React from "react";
import { Background } from "./Main.styled";
import Profile from "../Profile/Profile";
import Statistics from "../Statistics/Statistics";
import user from "../../bd/user.json";
import statisticalData from "../../bd/statistical-data.json";

const Main = () => {
  return (
    <Background>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title="Upload stats" stats={statisticalData} />
    </Background>
  );
};

export default Main;
