import React, { useState } from 'react';
import moment from 'moment';
import {
  Container,
  Grid,
  Divider,
  Button,
  InputBase,
  Typography,
  Paper,
  TableRow,
  TableHead,
  TableContainer,
  TableCell,
  TableBody,
  Table,
  TextField,
  IconButton,
  Box,
} from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import DeleteOutlineRoundedIcon from '@material-ui/icons/DeleteOutlineRounded';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import SaveIcon from '@material-ui/icons/Save';

import { makeStyles } from '@material-ui/core/styles';

import AddClient from './AddClient';
const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },

  headerContainer: {
    paddingTop: theme.spacing(1),
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(1),
  },
}));

const initialState = {
  clientId: '',
  items: [{ itemName: '', unitPrice: '', quantity: '', discount: '' }],
  subTotal: 0,
  total: 0,
  notes: '',
  rates: '',
  gst: 0,
  currency: '',
  invoiceNumber: Math.floor(Math.random() * 100000),
  status: '',
  type: 'Invoice',
  creator: '',
};

const ClientList = [
  { name: 'first', description: '' },
  { name: 'second', description: '' },
  { name: 'third', description: '' },
];

export const InvoiceForm = () => {
  const [invoiceData, setInvoiceData] = useState(initialState);
  const classes = useStyles();

  const handleAddField = (e) => {
    e.preventDefault();
    setInvoiceData((prevState) => ({
      ...prevState,
      items: [
        ...prevState.items,
        { itemName: '', unitPrice: '', quantity: '', discount: '', amount: '' },
      ],
    }));
  };

  const onChange = (e) =>
    setInvoiceData({ ...invoiceData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(invoiceData);
  };

  const handleRemoveField = (index) => {
    const values = invoiceData.items;
    if (index > -1) {
      values.splice(index, 1);
    }
    setInvoiceData((prevState) => ({ ...prevState, values }));
    console.log(index);
  };

  return (
    <div>
      <Box component='form' noValidate onSubmit={onSubmit}>
        <Container className={classes.headerContainer}>
          <Grid container justifyContent='space-between'>
            <Grid item></Grid>
            <Grid item>
              Invoice #:
              <div
                style={{
                  marginTop: '15px',
                  width: '100px',
                  padding: '8px',
                  display: 'inline-block',
                  backgroundColor: '#f4f4f4',
                  outline: '0px solid transparent',
                }}
                contenteditable='true'
                // onInput={(e) =>
                //   setInvoiceData({
                //     ...invoiceData,
                //     invoiceNumber: e.currentTarget.textContent,
                //   })
                // }
              >
                <span
                  style={{ width: '40px', color: 'black', padding: '15px' }}
                >
                  1
                </span>
                <br />
              </div>
            </Grid>
          </Grid>
        </Container>
        <Divider />

        <Container>
          <Grid
            container
            justifyContent='space-between'
            style={{ marginTop: '40px' }}
          >
            <Grid item style={{ width: '50%' }}>
              <Container>
                <Typography
                  variant='overline'
                  style={{ color: 'gray', paddingRight: '3px' }}
                  gutterBottom
                >
                  Client
                </Typography>

                <Autocomplete
                  id='combo-box-demo'
                  options={ClientList}
                  getOptionLabel={(option) => option.name}
                  style={{ width: 300 }}
                  renderInput={(params) => (
                    <TextField {...params} label='Client' variant='outlined' />
                  )}
                />
                <div>
                  <AddClient />
                </div>
              </Container>
            </Grid>

            <Grid item style={{ marginRight: 20, textAlign: 'right' }}>
              <Typography
                variant='overline'
                style={{ color: 'gray' }}
                gutterBottom
              >
                Status
              </Typography>
              <Typography variant='h6' gutterBottom style={{ color: 'red' }}>
                {'Unpaid'}
              </Typography>
              <Typography
                variant='overline'
                style={{ color: 'gray' }}
                gutterBottom
              >
                Date
              </Typography>
              <Typography variant='body2' gutterBottom>
                {moment().format('MMM Do YYYY')}
              </Typography>
              <Typography
                variant='overline'
                style={{ color: 'gray' }}
                gutterBottom
              >
                Due Date
              </Typography>
              <Typography variant='body2' gutterBottom>
                27th Sep 2021
              </Typography>
              <Typography variant='overline' gutterBottom>
                Amount
              </Typography>
              <Typography variant='h6' gutterBottom>
                1000
              </Typography>
            </Grid>
          </Grid>
        </Container>
        {/* table */}
        <div>
          <TableContainer component={Paper} className='tb-container'>
            <Table className={classes.table} aria-label='simple table'>
              <TableHead>
                <TableRow>
                  <TableCell>Item</TableCell>
                  <TableCell>Qty</TableCell>
                  <TableCell>Price</TableCell>
                  <TableCell>Disc(%)</TableCell>
                  <TableCell>Amount</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {invoiceData.items.map((itemField, index) => (
                  <TableRow key={index}>
                    <TableCell scope='row' style={{ width: '40%' }}>
                      {' '}
                      <InputBase
                        style={{ width: '100%' }}
                        outline='none'
                        sx={{ ml: 1, flex: 1 }}
                        type='text'
                        name='itemName'
                        placeholder='Item name or description'
                      />{' '}
                    </TableCell>
                    <TableCell align='right'>
                      {' '}
                      <InputBase
                        sx={{ ml: 1, flex: 1 }}
                        type='number'
                        name='quantity'
                        placeholder='0'
                      />{' '}
                    </TableCell>
                    <TableCell align='right'>
                      {' '}
                      <InputBase
                        sx={{ ml: 1, flex: 1 }}
                        type='number'
                        name='unitPrice'
                        placeholder='0'
                      />{' '}
                    </TableCell>
                    <TableCell align='right'>
                      {' '}
                      <InputBase
                        sx={{ ml: 1, flex: 1 }}
                        type='number'
                        name='discount'
                        placeholder='0'
                      />{' '}
                    </TableCell>
                    <TableCell align='right'>
                      {' '}
                      <InputBase
                        sx={{ ml: 1, flex: 1 }}
                        type='number'
                        name='amount'
                        disabled
                      />{' '}
                    </TableCell>
                    <TableCell align='right'>
                      <IconButton onClick={() => handleRemoveField(index)}>
                        <DeleteOutlineRoundedIcon
                          style={{
                            width: '20px',
                            height: '20px',
                            color: 'red',
                          }}
                        />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <div>
            <Button
              color='primary'
              size='large'
              startIcon={<AddCircleOutlineIcon />}
              onClick={handleAddField}
            >
              Add Item
            </Button>
          </div>
        </div>
        {/* table */}
        <Container>
          <Grid
            container
            justifyContent='space-between'
            style={{ marginTop: '40px' }}
          >
            <Grid item style={{ width: '50%' }}>
              <TextField
                name='notes'
                required
                fullWidth
                multiline
                rows={4}
                variant='outlined'
                id='notes'
                label='Notes'
              />
            </Grid>
            <Grid item>
              <Paper variant='outlined' style={{ padding: '20px' }}>
                <Typography variant='h5' gutterBottom>
                  Invoice Summary
                </Typography>
                <div>
                  <Typography variant='h6' gutterBottom>
                    Sub total: 90
                  </Typography>
                </div>
                <div>
                  <Typography variant='h6' gutterBottom>
                    GST(%): 10
                  </Typography>
                </div>
                <div>
                  <Typography variant='h5' gutterBottom>
                    Total : 100
                  </Typography>
                </div>
              </Paper>
            </Grid>
          </Grid>
        </Container>
        <br />
        <Divider />
        <Grid container justifyContent='center'>
          <Button
            variant='contained'
            style={{ justifyContentContent: 'center', marginTop: '15px' }}
            type='submit'
            color='primary'
            size='large'
            startIcon={<SaveIcon />}
          >
            Save and Continue
          </Button>
        </Grid>
      </Box>
    </div>
  );
};
