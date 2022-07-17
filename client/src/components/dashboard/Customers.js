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
function createData(id, client, Email, Address) {
  return { id, client, Email, Address };
}

const rows = [
  createData(1, 'Iron man', 'new@mail.com', 312.44),
  createData(2, 'Amit KUmar', 'new@mail.com', 662.44),
  createData(3, 'Amit KUmar', 'new@mail.com', 662.44),
  createData(4, 'Amit KUmar', 'new@mail.com', 662.44),
  createData(5, 'Amit KUmar', 'new@mail.com', 662.44),
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
      <Title>Customers</Title>
      <Table size='small'>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Client</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Address</TableCell>
            <TableCell align='center'>Edit</TableCell>
            <TableCell align='center'>Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.client}</TableCell>
              <TableCell>{row.Email}</TableCell>
              <TableCell>{row.Address}</TableCell>
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
      {/* <div className={classes.seeMore}>
        <Link color='primary' href='#' onClick={preventDefault}>
          See more
        </Link>
      </div> */}
    </Fragment>
  );
}
