import React from "react";
import { Background } from "./Main.styled";
import Profile from "../Profile/Profile";
import user from "../../bd/user.json";

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
    </Background>
  );
};

export default Main;
