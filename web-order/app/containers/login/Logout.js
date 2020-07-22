import React from "react"
import CssBaseline from "@material-ui/core/CssBaseline"
import { makeStyles } from "@material-ui/core/styles"
import Container from "@material-ui/core/Container"
import { useDispatch, useSelector } from "react-redux"

const { checkLogut } = require('../../actions')

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  div: {
    border: "1px solid gold",
    padding: "20px",
    borderRadius: "30px 5px 30px 5px"
  }
}))

const Logout = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const table_code = useSelector((state) => state.table.tableNo)

  dispatch(checkLogut(table_code))

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <h1>Logout Success ...</h1>
        <div className={classes.div}>
          <img src="/img/logout_success.png" alt="" />
        </div>
      </div>
    </Container>
  )
}

export default Logout
