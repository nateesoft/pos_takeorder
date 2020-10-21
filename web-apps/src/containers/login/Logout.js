import React, { useEffect } from "react"
import CssBaseline from "@material-ui/core/CssBaseline"
import { makeStyles } from "@material-ui/core/styles"
import Container from "@material-ui/core/Container"
import { useSelector, connect } from "react-redux"
import { PURGE } from "redux-persist"

const { checkLogut } = require("../../actions")

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  div: {
    border: "1px solid gold",
    padding: "20px",
    borderRadius: "30px 5px 30px 5px",
  },
}))

const Logout = (props) => {
  const classes = useStyles()
  const table_code = useSelector((state) => state.table.tableNo)

  useEffect(() => {
    console.log('useEffect:logout')
    props.initLogout(table_code);
    props.clearState();
  }, [props, table_code])

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

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    initLogout: (table_code) => {
      dispatch(checkLogut(table_code));
    },
    clearState: () => {
      dispatch({
        type: PURGE,
        key: "persist:root",
        result: () => null,
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Logout)
