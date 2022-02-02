import React from 'react';

import { Typography, Link } from '@material-ui/core';
export default function Copyright() {
  return (
    <Typography variant='body2' color='secondary' align='center'>
      {'Copyright © '}
      <Link color='inherit' href='https://easyinvoice.herokuapp.com/'>
        easyInvoice
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
