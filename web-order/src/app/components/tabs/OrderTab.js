import React, { useEffect, useState } from "react"
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
import DeleteIcon from "@material-ui/icons/Delete"
import AddIcon from "@material-ui/icons/AddCircle"
import EditIcon from "@material-ui/icons/Edit"

const removeIndex = uid => {
  fetch(`http://172.20.10.5:5000/orders_detail`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      uid: uid
    })
  })
  console.log(`Delete success: ${uid}`)
}

const editItem = uid => {
  alert("show edit item popup")
}

const plusItem = (code, name, price) => {
  const order_no = "00001"
  fetch(`http://172.20.10.5:5000/orders_detail/create`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      index: order_no + "/" + code,
      order_no,
      menu_code: code,
      menu_name: name,
      price,
      qty: 1,
      total_amount: price
    })
  })
  console.log(`Add item success: ${code}`)
}

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

export default function OrderTab() {
  const classes = useStyles()
  // const [isLoader, setIsLoader] = useState(false)
  const [rows, setRows] = useState([])

  useEffect(() => {
    console.log("OrderTab startup")
    fetch(`http://172.20.10.5:5000/orders_detail?order_no=00001`)
      .then(res => res.json())
      .then(
        result => {
          setRows(result)
        },
        error => {
          // setIsLoader(true)
        }
      )
    return function() {
      console.log("cleanup")
    }
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
            อาหารที่สั่ง
          </Typography>
          <Button color="inherit">{199 * rows.length}</Button>
        </Toolbar>
      </AppBar>
      <TableContainer component={Paper} className={classes.container}>
        <Table aria-label="spanning table" stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>เมนู</TableCell>
              <TableCell align="right">จำนวน</TableCell>
              <TableCell align="right">ราคา</TableCell>
              <TableCell align="right">รวม</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow key={row.uid}>
                <TableCell>
                  <DeleteIcon
                    style={{ color: "red" }}
                    onClick={() => removeIndex(row.uid)}
                  />
                </TableCell>
                <TableCell>{row.menu_name}</TableCell>
                <TableCell align="right">{row.qty}</TableCell>
                <TableCell align="right">{row.price}</TableCell>
                <TableCell align="right">{row.total_amount}</TableCell>
                <TableCell align="right">
                  <EditIcon
                    style={{ color: "gray", marginRight: 20 }}
                    onClick={() => editItem(row.uid)}
                  />
                  <AddIcon
                    style={{ color: "green" }}
                    onClick={() =>
                      plusItem(row.menu_code, row.menu_name, row.price)
                    }
                  />
                </TableCell>
              </TableRow>
            ))}

            <TableRow style={{ background: "pink" }}>
              <TableCell colSpan={2} style={{ fontWeight: "bold" }}>
                Total
              </TableCell>
              <TableCell
                colSpan={2}
                align="right"
                style={{ fontWeight: "bold" }}
              >
                {1 * rows.length}
              </TableCell>
              <TableCell align="right"></TableCell>
              <TableCell align="right" style={{ fontWeight: "bold" }}>
                {199 * rows.length}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  )
}
