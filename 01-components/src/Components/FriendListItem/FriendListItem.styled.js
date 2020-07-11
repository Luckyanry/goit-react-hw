import styled from "styled-components";

const Status = styled.span`
  display: block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${(props) => (props.isOnline ? "#00d223" : "#ef3030")};
`;

export { Status };
