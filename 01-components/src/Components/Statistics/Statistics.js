import React from "react";
import {
  Container,
  Title,
  StatsList,
  Item,
  Label,
  Percentage,
} from "./Statistics.styled";
import PropTypes from "prop-types";

const Statistics = ({ title, stats }) => {
  return (
    <Container>
      {title && <Title>Upload stats</Title>}

      <StatsList>
        {stats.map((item) => (
          <Item key={item.id}>
            <Label>{item.label}</Label>
            <Percentage>{item.percentage}%</Percentage>
          </Item>
        ))}
      </StatsList>
    </Container>
  );
};

export default Statistics;

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ).isRequired,
};
