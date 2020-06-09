import React, { useState, useEffect } from "react"
import Avatar from "@material-ui/core/Avatar"
import Button from "@material-ui/core/Button"
import CssBaseline from "@material-ui/core/CssBaseline"
import TextField from "@material-ui/core/TextField"
import LockOutlinedIcon from "@material-ui/icons/LockOutlined"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"
import Container from "@material-ui/core/Container"
import { Redirect } from "react-router"
import { useDispatch, useSelector, connect } from "react-redux"
import { v4 as uuidv4 } from "uuid"
import { clearTable, newOrder } from "../../actions"
import MessageUtil from '../../utils/alertMsg'

const { CHECK_LOGIN } = require('../../actions/constants')

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}))

const Login = props => {
  const { checkLogin } = props
  const classes = useStyles()
  const [msgError, setMsgError] = useState("")
  const [user, setUser] = useState("")
  const [pass, setPass] = useState("")
  const order_no = useSelector(state => state.table.order.orderNo)
  const loginResponse = useSelector(state => state.login)
  const dispatch = useDispatch()

  useEffect(() => {
    const { status, message, username } = loginResponse
    if (status === "Success") {
      if (!order_no) {
        dispatch(newOrder({
          order_no: uuidv4(),
          emp_code: username,
          table_no: "no_select"
        }))
      }
    }
    
    if (status === "Invalid") {
      setMsgError(message)
    }
    
    if (status === 'Error') {
      setMsgError(message)
    }
    
    if (status === 'Not_Found') {
      setMsgError(message)
    }
    
    return () => {
    }
  }, [dispatch, loginResponse, order_no])

  if (order_no !== "") {
    return <Redirect push to="/table" />
  } else {
    dispatch(clearTable())
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          เข้าสู่ระบบ
        </Typography>
        <form className={classes.form} noValidate onSubmit={e => e.preventDefault()}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="empCode"
            label="Employee Code"
            name="empCode"
            autoComplete="email"
            autoFocus
            value={user}
            onChange={e => setUser(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={pass}
            onChange={e => setPass(e.target.value)}
          />
          <Button type="button" fullWidth variant="contained" color="primary" className={classes.submit}
            onClick={() => checkLogin(user, pass)}>Sign In
          </Button>
        </form>
        {msgError && <MessageUtil message={msgError} />}
      </div>
    </Container>
  )
}

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {
    checkLogin: (user, pass) => dispatch({ 
      type: CHECK_LOGIN, 
      payload: {
        username: user, 
        password: pass
      } 
    }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
