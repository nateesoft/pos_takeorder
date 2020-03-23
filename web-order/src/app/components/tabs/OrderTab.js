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
import DeleteIcon from "@material-ui/icons/Delete"
import AddIcon from "@material-ui/icons/AddCircle"
import { Config } from "../../config"
import { useDispatch, useSelector } from "react-redux"
import { increment, decrement } from "../../actions"
import { Redirect } from "react-router"
import { useSnackbar } from "notistack"

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    flexGrow: 1
  },
  container: {
    maxHeight: window.innerHeight - 175
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  fab: {
    position: "absolute",
    right: theme.spacing(2),
    bottom: theme.spacing(5)
  }
}))

export default function OrderTab() {
  const dispatch = useDispatch()
  const classes = useStyles()
  const [rows, setRows] = useState([])
  const [loading, setLoading] = useState(true)
  const { enqueueSnackbar } = useSnackbar()

  const table_no = useSelector(state => state.table.tableNo)
  const order_no = useSelector(state => state.table.order.orderNo)

  const initLoad = () => {
    fetch(`${Config.API_HOST}/orders_detail?order_no=${order_no}`)
      .then(res => res.json())
      .then(
        response => {
          if (response.status === "not_found") {
            setRows([])
          } else {
            setRows(response)
          }
          setLoading(false)
        },
        error => {
          console.log("in error found => ", error)
        }
      )
      .catch(error => {
        console.log("Error: (OrderTab: " + error + ")")
      })
  }

  useEffect(() => {
    console.log("useEffect")
    if (loading) {
      initLoad()
    }
  })

  const sendOrderToPOS = () => {
    console.log("sendOrderToPOS")
    fetch(`${Config.API_HOST}/orders/move`, {
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
          dispatch(decrement())
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

  const removeIndex = uid => {
    console.log("removeIndex")
    fetch(`${Config.API_HOST}/orders_detail`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        uid: uid
      })
    })
      .then(
        response => {
          dispatch(decrement())
          initLoad()
          const variant = "warning"
          enqueueSnackbar("ลบรายการอาหารแล้ว", { variant })
        },
        error => {
          console.log(`error: ${error}`)
        }
      )
      .catch(error => {
        console.log("Error: (OrderTab: " + error + ")")
      })
  }

  const editItem = uid => {
    // alert("show edit item popup")
    console.log("show edit item popup")
  }

  const addItem = (code, name, price) => {
    console.log("addItem")
    fetch(`${Config.API_HOST}/orders_detail/create`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        index: table_no + "/" + code,
        order_no,
        menu_code: code,
        menu_name: name,
        price,
        qty: 1,
        total_amount: price
      })
    })
      .then(
        response => {
          dispatch(increment())
          initLoad()
          const variant = "success"
          enqueueSnackbar("เพิ่มรายการอาหาร", { variant })
        },
        error => {
          console.log(`error: ${error}`)
        }
      )
      .catch(error => {
        console.log("Error: (OrderTab: " + error + ")")
      })
  }

  if (order_no === "") {
    return <Redirect push to={`/login`} />
  }
  if (table_no === "") {
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
            อาหารที่สั่ง
          </Typography>
          {rows.length > 0 && (
            <Button
              variant="contained"
              style={{ backgroundColor: "green", color: "white" }}
              onClick={() => sendOrderToPOS()}
            >
              ยืนยันรายการ
            </Button>
          )}
        </Toolbar>
      </AppBar>
      {rows.length > 0 && (
        <TableContainer component={Paper} className={classes.container}>
          <Table aria-label="sticky table" stickyHeader>
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
                    {row.send_order === "N" && (
                      <DeleteIcon
                        style={{ color: "red" }}
                        onClick={() => removeIndex(row.uid)}
                      />
                    )}
                  </TableCell>
                  <TableCell onClick={() => editItem()}>
                    {row.menu_name}
                  </TableCell>
                  <TableCell align="right">{row.qty}</TableCell>
                  <TableCell align="right">{row.price}</TableCell>
                  <TableCell align="right">{row.total_amount}</TableCell>
                  <TableCell align="right">
                    <AddIcon
                      style={{ color: "green" }}
                      onClick={() =>
                        addItem(row.menu_code, row.menu_name, row.price)
                      }
                    />
                  </TableCell>
                </TableRow>
              ))}
              <TableRow>
                <TableCell colSpan={2} style={{ fontWeight: "bold" }}>
                  Total
                </TableCell>
                <TableCell align="right" style={{ fontWeight: "bold" }}>
                  {1 * rows.length}
                </TableCell>
                <TableCell align="right"></TableCell>
                <TableCell align="right" style={{ fontWeight: "bold" }}>
                  {199 * rows.length}
                </TableCell>
                <TableCell align="right"></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Paper>
  )
}
