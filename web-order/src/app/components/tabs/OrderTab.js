import React, { useState, useEffect } from "react"
import { makeStyles } from "@material-ui/core/styles"
import ExpansionPanel from "@material-ui/core/ExpansionPanel"
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails"
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary"
import Typography from "@material-ui/core/Typography"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import { useSelector, useDispatch } from "react-redux"
import { Config } from "../../../config"
import TableContainer from "@material-ui/core/TableContainer"
import TableHead from "@material-ui/core/TableHead"
import TableRow from "@material-ui/core/TableRow"
import Table from "@material-ui/core/Table"
import TableBody from "@material-ui/core/TableBody"
import TableCell from "@material-ui/core/TableCell"
import Paper from "@material-ui/core/Paper"
import DeleteIcon from "@material-ui/icons/Delete"
import AddIcon from "@material-ui/icons/AddCircle"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import IconButton from "@material-ui/core/IconButton"
import Fastfood from "@material-ui/icons/Fastfood"
import Button from "@material-ui/core/Button"
import { increment, decrement, clearItemAdd } from "../../actions"
import { useSnackbar } from "notistack"
import { Redirect } from "react-router"
import { withStyles } from "@material-ui/core/styles"
import Dialog from "@material-ui/core/Dialog"
import MuiDialogTitle from "@material-ui/core/DialogTitle"
import MuiDialogContent from "@material-ui/core/DialogContent"
import CloseIcon from "@material-ui/icons/Close"
import EditMenu from "../menu/EditMenu"

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
})

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  )
})

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent)

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    flexGrow: 1,
  },
  heading: {
    fontSize: 16,
    fontWeight: "ิbold",
    flexBasis: "33.33%",
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  title: {
    flexGrow: 1,
  },
}))

export default function OrderTab() {
  const dispatch = useDispatch()
  const classes = useStyles()
  const [expanded, setExpanded] = useState(false)
  const [rows, setRows] = useState([])
  const { enqueueSnackbar } = useSnackbar()
  const [expansionItem, setExpansionItem] = useState([])

  const [open, setOpen] = useState(false)
  const [menuItem, setMenuItem] = useState("")

  const table_no = useSelector((state) => state.table.tableNo)
  const order_no = useSelector((state) => state.table.order.orderNo)

  useEffect(() => {
    fetch(`${Config.API_HOST}/orders_detail/sum?order_no=${order_no}`)
      .then((res) => res.json())
      .then(
        (response) => {
          if (response.status === "not_found") {
            setRows([])
          } else {
            setRows(response)
          }
        },
        (error) => {
          console.log("in error found => ", error)
        }
      )
      .catch((error) => {
        console.log("Error: (OrderTab: " + error + ")")
      })
    return function () {
      setRows([])
    }
  }, [order_no])

  const loadInitData = () => {
    fetch(`${Config.API_HOST}/orders_detail/sum?order_no=${order_no}`)
      .then((res) => res.json())
      .then(
        (response) => {
          if (response.status === "not_found") {
            setRows([])
          } else {
            setRows(response)
          }
        },
        (error) => {
          console.log("in error found => ", error)
        }
      )
      .catch((error) => {
        console.log("Error: (OrderTab: " + error + ")")
      })
  }

  const handleChange = (menu_code) => (event, isExpanded) => {
    setExpanded(isExpanded ? menu_code : false)
    fetch(
      `${Config.API_HOST}/orders_detail/product?order_no=${order_no}&menu_code=${menu_code}`
    )
      .then((res) => res.json())
      .then((response) => {
        if (response.status === "not_found") {
          setExpansionItem([])
        } else {
          setExpansionItem(response)
        }
      })
  }

  const sendOrderToPOS = () => {
    fetch(`${Config.API_HOST}/orders/move`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        order_no,
      }),
    })
      .then(
        (response) => {
          dispatch(decrement())
          loadInitData()
        },
        (error) => {
          console.log(`error: ${error}`)
        }
      )
      .catch((error) => {
        console.log("Error: (OrderTab: " + error + ")")
      })
  }
  const removeIndex = (uid) => {
    fetch(`${Config.API_HOST}/orders_detail`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        uid: uid,
      }),
    })
      .then(
        (response) => {
          dispatch(decrement())
          loadInitData()
          const variant = "warning"
          enqueueSnackbar("ลบรายการอาหารแล้ว", { variant })
        },
        (error) => {
          console.log(`error: ${error}`)
        }
      )
      .catch((error) => {
        console.log("Error: (OrderTab: " + error + ")")
      })
  }
  const editItem = (item) => {
    setOpen(true)
    setMenuItem(item)
  }
  const addItem = (code, name, price) => {
    fetch(`${Config.API_HOST}/orders_detail/create`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        index: table_no + "/" + code,
        order_no,
        menu_code: code,
        menu_name: name,
        price,
        qty: 1,
        total_amount: price,
      }),
    })
      .then(
        (response) => {
          dispatch(increment())
          dispatch(clearItemAdd())
          loadInitData()
          const variant = "success"
          enqueueSnackbar("เพิ่มรายการอาหาร", { variant })
        },
        (error) => {
          console.log(`error: ${error}`)
        }
      )
      .catch((error) => {
        console.log("Error: (OrderTab: " + error + ")")
      })
  }

  if (order_no === "") {
    return <Redirect push to={`/login`} />
  }
  if (table_no === "" || table_no === "no_select") {
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
      {rows.map((item, index) => (
        <ExpansionPanel
          expanded={expanded === item.menu_code}
          onChange={handleChange(item.menu_code)}
          key={"expanded-" + index}
        >
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography component={"span"} className={classes.heading}>
              {index + 1} - {item.menu_code}
            </Typography>
            <Typography component={"span"} className={classes.heading}>
              {item.menu_name}
            </Typography>
            <Typography component={"span"} className={classes.secondaryHeading}>
              {item.total_qty} x {item.price} = {item.total_price}
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography component={"span"} style={{ width: "100%" }}>
              <TableContainer className={classes.root}>
                <Table aria-label="sticky table" style={{ width: "100%" }}>
                  <TableHead style={{ background: "#dddddd" }}>
                    <TableRow>
                      <TableCell></TableCell>
                      <TableCell>เมนู</TableCell>
                      <TableCell>ข้อความพิเศษ</TableCell>
                      <TableCell>เมนูย่อย</TableCell>
                      <TableCell></TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {expansionItem.map((row) => (
                      <TableRow key={row.uid}>
                        <TableCell>
                          {row.send_order === "N" && (
                            <DeleteIcon
                              style={{ color: "red" }}
                              onClick={() => removeIndex(row.uid)}
                            />
                          )}
                        </TableCell>
                        <TableCell onClick={() => editItem(row)}>
                          {row.menu_name}
                        </TableCell>
                        <TableCell onClick={() => editItem(row)}>
                          {row.s_text}
                        </TableCell>
                        <TableCell onClick={() => editItem(row)}>
                          {row.sub_code}
                        </TableCell>
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
                  </TableBody>
                </Table>
              </TableContainer>
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      ))}

      <Dialog
        onClose={() => setOpen(false)}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle
          id="customized-dialog-title"
          onClose={() => setOpen(false)}
        >
          Edit Menu
        </DialogTitle>
        <DialogContent dividers>
          <EditMenu item={menuItem} />
        </DialogContent>
        {/* <DialogActions>
          <SaveIcon onClick={() => setOpen(false)} />
        </DialogActions> */}
      </Dialog>
    </Paper>
  )
}
