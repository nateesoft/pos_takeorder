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

export default function SpanningTable() {
  const classes = useStyles()
  const [isLoader, setIsLoader] = useState(false)
  const [rows, setRows] = useState([])

  useEffect(() => {
    fetch(`http://localhost:5000/bill_detail?bill_no=b001`)
      .then(res => res.json())
      .then(
        result => {
          setRows(result)
        },
        error => {
          setIsLoader(true)
        }
      )
  }, [])

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
          <Button color="inherit">999</Button>
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
            {rows.map(row => (
              <TableRow key={row.desc}>
                <TableCell>{row.desc}</TableCell>
                <TableCell align="right">{row.qty}</TableCell>
                <TableCell align="right">{row.unit}</TableCell>
                <TableCell align="right">{row.price}</TableCell>
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
