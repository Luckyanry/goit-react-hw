import styled from "styled-components";

const Container = styled.section`
  width: 250px;
  height: max-content;
  color: #ffffff;
  text-shadow: 0px 0px 1px #475965;
  border-radius: 4px;
  background-color: rgb(255, 255, 255);
  box-shadow: 2px 2px 5px 0px rgba(191, 205, 222, 0.75);
  text-align: center;
  margin: 0 auto 30px;
  padding-top: 22px;
`;

const Title = styled.h2`
  font-size: 16px;
  font-weight: 700;
  color: #475965;
  text-transform: uppercase;
  text-align: center;
  margin: 0;
  padding-bottom: 22px;
`;

const StatsList = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;
`;

const Item = styled.li`
  width: 50px;
  height: max-content;
  background-color: ${(props) =>
    props.key !== null &&
    "#" + Math.floor(Math.random() * 16777215).toString(16)};
  text-align: center;
  padding: 12px 0 15px;

  :first-child {
    border-bottom-left-radius: 4px;
  }

  :last-child {
    border-bottom-right-radius: 4px;
  }
`;

const Label = styled.span`
  display: block;
  font-size: 12px;
  font-weight: 400;
`;

const Percentage = styled.span`
  font-size: 14px;
  font-weight: 700;
`;

export { Container, Title, StatsList, Item, Label, Percentage };
