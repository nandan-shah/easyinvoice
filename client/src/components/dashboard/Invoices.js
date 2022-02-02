import React, { Fragment } from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@material-ui/core';

import Edit from '@material-ui/icons/Edit';
import Delete from '@material-ui/icons/DeleteForever';
import Title from './Title';

// Generate Order Data
function createData(id, date, client, dueDate, amount, status) {
  return { id, date, client, dueDate, amount, status };
}

const rows = [
  createData(0, '16 Mar, 2019', 'Iron man', 'in 10 days', 312.44, 'Unpaid'),
  createData(1, '19 May, 2019', 'Amit KUmar', 'in 2 days', 662.44, 'Unpaid'),
  createData(2, '19 May, 2019', 'Amit KUmar', 'in 2 days', 662.44, 'Unpaid'),
  createData(3, '19 May, 2019', 'Amit KUmar', 'in 2 days', 662.44, 'Unpaid'),
  createData(4, '15 Mar, 2019', 'Amit KUmar', 'in 2 days', 662.44, 'Unpaid'),
];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Invoice() {
  const classes = useStyles();
  return (
    <Fragment>
      <Title>Recent Invoices</Title>
      <Table size='small'>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Client</TableCell>
            <TableCell>Due date</TableCell>
            <TableCell>Amount</TableCell>
            <TableCell>Status</TableCell>
            <TableCell align='center'>Edit</TableCell>
            <TableCell align='center'>Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.client}</TableCell>
              <TableCell>{row.dueDate}</TableCell>
              <TableCell>{row.amount}</TableCell>
              <TableCell>{row.status}</TableCell>
              <TableCell align='center'>
                <Edit color='action' />
              </TableCell>
              <TableCell align='center'>
                <Delete color='error' />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color='primary' href='#' onClick={preventDefault}>
          See more orders
        </Link>
      </div>
    </Fragment>
  );
}
