import styled from "styled-components";

const Transactions = styled.table`
  width: 752px;
  height: max-content;
  border-spacing: 0px;
  box-shadow: 2px 2px 5px 0px rgba(191, 205, 222, 0.75);
  background-color: #ffffff;
  text-align: center;
  margin: 0 auto;
`;

const THead = styled.thead`
  font-size: 14px;
  font-weight: 700;
  line-height: 30px;
  text-transform: uppercase;
  color: #ffffff;
  background-color: rgb(0, 188, 212);
`;

const Th = styled.th`
  width: 250px;
  height: 40px;

  :nth-child(2) {
    border-left: 1px solid rgb(224, 230, 231);
    border-right: 1px solid rgb(224, 230, 231);
  }
`;

const TBody = styled.tbody`
  font-size: 16px;
  font-weight: 400;
  line-height: 30px;
  color: #5c6975;
`;

const Tr = styled.tr`
  height: 40px;

  :nth-child(2n) {
    background-color: rgb(236, 242, 243);
  }
`;

const Td = styled.td`
  height: 40px;

  :nth-child(2) {
    border-left: 1px solid rgb(224, 230, 231);
    border-right: 1px solid rgb(224, 230, 231);
  }

  :first-letter {
    text-transform: uppercase;
  }
`;

export { Transactions, THead, Th, TBody, Tr, Td };
