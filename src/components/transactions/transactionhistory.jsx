import React from 'react';
import { Container, TableTransactions, TableHeader, TableHead, TableRow, TableBody, TableData } from './transactionhistory.styled';
import PropTypes from 'prop-types';

export const TransactionHistory = ({ items }) => {
  return (
    <section>
      <h2>
        Task #04 - Transaction History
        <span className="subheader"> | using Emotion/styled</span>
      </h2>
      <Container>
        <TableTransactions>
        <TableHeader>
            <tr>
              <TableHead>Type</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Currency</TableHead>
            </tr>
          </TableHeader>
          <TableBody>
          {items.map(el => {
            return (
              <TableRow key={el.id}>
                <TableData style={{textAlign: "left", paddingLeft: "115px"}}>{el.type}</TableData>
                <TableData style={{textAlign: "right", paddingRight: "100px"}}>{el.amount}</TableData>
                <TableData>{el.currency}</TableData>
              </TableRow>
            );
          })}
            </TableBody>
          </TableTransactions>
      </Container>
    </section>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.array.isRequired,
};
