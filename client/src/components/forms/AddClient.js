import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        size='large'
        color='primary'
        onClick={handleClickOpen}
        startIcon={<AddCircleOutlineIcon />}
      >
        Add Client
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='form-dialog-title'
      >
        <DialogTitle id='form-dialog-title'>Add Client</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Add Details to create new client
          </DialogContentText>

          <TextField
            autoFocus
            margin='dense'
            id='name'
            label='name'
            fullWidth
          />
          <TextField
            margin='dense'
            id='email'
            label='Email'
            type='email'
            fullWidth
          />
          <TextField margin='dense' id='address' label='Address' fullWidth />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color='primary'>
            Cancel
          </Button>
          <Button onClick={handleClose} color='primary'>
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
