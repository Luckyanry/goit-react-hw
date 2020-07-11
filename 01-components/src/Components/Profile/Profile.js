import React from "react";
import PropTypes from "prop-types";
import {
  Container,
  Desc,
  Avatar,
  Img,
  Name,
  Item,
  StatsList,
  Label,
  Quantity,
} from "./Profile.styled";

const Profile = ({ name, tag, location, avatar, stats }) => {
  return (
    <Container>
      <Desc>
        <Avatar>
          <Img src={avatar} alt={name} />
        </Avatar>
        <Name>{name}</Name>
        <p>@{tag}</p>
        <p>{location}</p>
      </Desc>

      <StatsList>
        <Item>
          <Label>Followers</Label>
          <Quantity>{stats.followers}</Quantity>
        </Item>
        <Item>
          <Label>Views</Label>
          <Quantity>{stats.views}</Quantity>
        </Item>
        <Item>
          <Label>Likes</Label>
          <Quantity>{stats.likes}</Quantity>
        </Item>
      </StatsList>
    </Container>
  );
};

export default Profile;

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }).isRequired,
};
