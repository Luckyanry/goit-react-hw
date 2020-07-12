import React from "react";
import {
  Transactions,
  THead,
  Th,
  TBody,
  Tr,
  Td,
} from "./TransactionHistory.styled";
import PropTypes from "prop-types";

const TransactionHistory = ({ items }) => {
  return (
    <Transactions>
      <THead>
        <Tr>
          <Th>Type</Th>
          <Th>Amount</Th>
          <Th>Currency</Th>
        </Tr>
      </THead>

      <TBody>
        {items.map((item) => (
          <Tr key={item.id}>
            <Td>{item.type}</Td>
            <Td>{item.amount}</Td>
            <Td>{item.currency}</Td>
          </Tr>
        ))}
      </TBody>
    </Transactions>
  );
};

export default TransactionHistory;

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    })
  ).isRequired,
};
