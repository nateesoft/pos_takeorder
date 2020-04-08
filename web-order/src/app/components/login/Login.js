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
import { reset, clearTable, newOrder } from "../../actions"
import { useDispatch, useSelector } from "react-redux"
import { v4 as uuidv4 } from "uuid"
import { Config } from "../../../config"

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

export default function Login() {
  const classes = useStyles()
  const [user, setUser] = useState("")
  const [pass, setPass] = useState("")
  const order_no = useSelector(state => state.table.order.orderNo)
  const dispatch = useDispatch()

  const validLogin = (user, pass) => {
    fetch(`${Config.POS_API_HOST}/employ/login`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: user,
        password: pass
      })
    })
      .then(res => res.json())
      .then(
        response => {
          if (response.status === "success") {
            dispatch(
              newOrder({
                order_no: uuidv4(),
                emp_code: user,
                table_no: "no_select"
              })
            )
          }
        },
        error => {
          console.log("login error found => ", error)
        }
      )
      .catch(error => {
        console.log("Error: (Login: " + error + ")")
      })
  }

  useEffect(() => {
    return function() {
    }
  }, [])

  if (order_no !== "") {
    return <Redirect push to="/table" />
  } else {
    dispatch(reset())
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
        <form
          className={classes.form}
          noValidate
          onSubmit={e => e.preventDefault()}
        >
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
          <Button
            type="button"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={() => validLogin(user, pass)}
          >
            Sign In
          </Button>
        </form>
      </div>
    </Container>
  )
}
