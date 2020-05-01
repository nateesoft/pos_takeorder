import React, { useState } from "react"

import Snackbar from "@material-ui/core/Snackbar"
import MuiAlert from "@material-ui/lab/Alert"

const Alert = (props) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />
}

const AlertMsg = (props) => {
  const [open, setOpen] = useState(props.open || false)
  const [message, setMessage] = useState(props.message || "")

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setMessage('')
    setOpen(false);
  };

  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
      <Alert onClose={handleClose} severity="error">{message}</Alert>
    </Snackbar>
  )
}

export default AlertMsg
