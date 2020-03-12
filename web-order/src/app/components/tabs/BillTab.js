import React, { useState, useEffect } from "react"
import { makeStyles } from "@material-ui/core/styles"
import Table from "@material-ui/core/Table"
import TableBody from "@material-ui/core/TableBody"
import TableCell from "@material-ui/core/TableCell"
import TableContainer from "@material-ui/core/TableContainer"
import TableHead from "@material-ui/core/TableHead"
import TableRow from "@material-ui/core/TableRow"
import Paper from "@material-ui/core/Paper"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import IconButton from "@material-ui/core/IconButton"
import Fastfood from "@material-ui/icons/Fastfood"
import { Config } from "../../config"
import { Redirect } from "react-router"

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    flexGrow: 1
  },
  container: {
    height: "100%"
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}))

export default function BillTab() {
  const classes = useStyles()
  const [rows, setRows] = useState([])

  const sendBillToPOS = () => {
    const order_no = localStorage.getItem("order_no")
    fetch(`${Config.API_HOST}/bill/move`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        order_no
      })
    })
      .then(
        response => {
          initLoad()
        },
        error => {
          console.log(`error: ${error}`)
        }
      )
      .catch(error => {
        console.log("Error: (OrderTab: " + error + ")")
      })
  }

  const initLoad = () => {
    const order_no = localStorage.getItem("order_no")
    fetch(`${Config.API_HOST}/bill_detail?order_no=${order_no}`)
      .then(res => res.json())
      .then(
        response => {
          if (response.status === "not_found") {
            setRows([])
          } else {
            setRows(response)
          }
        },
        error => {
          console.log("in error found => ", error)
        }
      )
      .catch(error => {
        console.log("Error: (BillTab: " + error + ")")
      })
  }

  useEffect(() => {
    initLoad()
    return function() {
      setRows([])
    }
  }, [])

  if (!localStorage.getItem("order_no")) {
    return <Redirect push to={`/login`} />
  }
  if (!localStorage.getItem("table_no")) {
    return <Redirect push to={`/table`} />
  }

  return (
    <Paper className={classes.root} elevation={10}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <Fastfood />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            รายการอาหาร
          </Typography>
          <Button
            variant="contained"
            style={{ backgroundColor: "green", color: "white" }}
            onClick={() => sendBillToPOS()}
          >
            ยืนยันรายการ
          </Button>
        </Toolbar>
      </AppBar>
      <TableContainer component={Paper} className={classes.container}>
        <Table aria-label="spanning table" stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell>เมนู</TableCell>
              <TableCell align="right">จำนวน</TableCell>
              <TableCell align="right">ราคา</TableCell>
              <TableCell align="right">รวม</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.menu_name}</TableCell>
                <TableCell align="right">{row.qty}</TableCell>
                <TableCell align="right">{row.price}</TableCell>
                <TableCell align="right">{row.total_amount}</TableCell>
              </TableRow>
            ))}

            <TableRow>
              <TableCell rowSpan={3} />
              <TableCell colSpan={2}>Subtotal</TableCell>
              <TableCell align="right">123</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Tax</TableCell>
              <TableCell align="right">555</TableCell>
              <TableCell align="right">456</TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={2}>Total</TableCell>
              <TableCell align="right">789</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  )
}
