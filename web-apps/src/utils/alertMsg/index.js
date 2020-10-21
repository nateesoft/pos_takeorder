import React, { useState } from "react"

import Snackbar from "@material-ui/core/Snackbar"
import MuiAlert from "@material-ui/lab/Alert"

const Alert = props => {
  return <MuiAlert elevation={6} variant="filled" {...props} />
}

const AlertMsg = props => {
  const { open: openProps, message: messageProps, messageType } = props
  const [open, setOpen] = useState(openProps || true)
  const [message, setMessage] = useState(messageProps || "")
  const [type, setType] = useState(messageType || "error")

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setMessage('')
    setType('error')
    setOpen(false);
  }

  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{vertical: "top", horizontal: "right"}}>
      <Alert onClose={handleClose} severity={type}>{message}</Alert>
    </Snackbar>
  )
}

export default AlertMsg
