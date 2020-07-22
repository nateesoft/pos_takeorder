import React from 'react';
import PropTypes from 'prop-types';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import Alert from '@material-ui/lab/Alert';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';

export default function SimpleDialog(props) {
  const { onClose, open, msg } = props;

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
      <DialogTitle id="simple-dialog-title">Table Locked</DialogTitle>
      <Alert severity="error">
        {msg}
      </Alert>
      <DialogActions>
          <Button onClick={handleClose} color="primary" autoFocus>
            OK
          </Button>
        </DialogActions>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  open: PropTypes.bool.isRequired,
};
