import styled from "styled-components";

const Item = styled.li`
  display: flex;
  align-items: center;
  width: 250px;
  height: max-content;
  background-color: #ffffff;
  border-radius: 4px;
  box-shadow: 2px 2px 5px 0px rgba(191, 205, 222, 0.75);
  padding: 10px 0;
  margin-bottom: 10px;
`;

const Status = styled.span`
  display: block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${(props) => (props.isOnline ? "#00d223" : "#ef3030")};
  margin: 0 20px;
`;

const Img = styled.img`
  display: block;
  max-width: 100%;
  height: auto;
  border-radius: 50%;
  margin-right: 20px;
`;

const Name = styled.p`
  font-size: 18px;
  font-weight: 700;
  color: #122236;
  margin: 0;
`;

export { Status, Item, Img, Name };
