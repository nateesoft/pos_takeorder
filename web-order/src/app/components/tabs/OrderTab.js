import React, { useState, useEffect } from "react"
import { makeStyles } from "@material-ui/core/styles"
import ExpansionPanel from "@material-ui/core/ExpansionPanel"
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails"
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary"
import Typography from "@material-ui/core/Typography"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import { useSelector, useDispatch, connect } from "react-redux"
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
import MessageUtil from '../../utils/alertMsg'

const styles = theme => ({
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

const DialogTitle = withStyles(styles)(props => {
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

const DialogContent = withStyles(theme => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent)

const useStyles = makeStyles(theme => ({
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

const OrderTab = props => {
  const { 
    loadListOrderDetail, 
    loadExpansionProduct, 
    sendToPOS, 
    removeItemIndex, 
    addOrderItem
  }= props
  const dispatch = useDispatch()
  const classes = useStyles()
  const [msgError, setMsgError] = useState("")
  const [expanded, setExpanded] = useState(false)
  const [showButtonSendOrder, setShowButtonSendOrder] = useState(true)
  const { enqueueSnackbar } = useSnackbar()

  const [open, setOpen] = useState(false)
  const [menuItem, setMenuItem] = useState("")

  const table_no = useSelector(state => state.table.tableNo)
  const order_no = useSelector(state => state.table.order.orderNo)

  const orderList = useSelector(state => state.table.order.items)
  const expansionItem = useSelector(state => state.table.product.expansionItem)
  const statusSendToPOS = useSelector(state => state.table.order.sendToPOS)
  const statusOrderRemove = useSelector(state => state.table.order.removeItem)
  const statusAddNewOrderItem = useSelector(state => state.table.order.addNewItem)

  useEffect(() => {
    setMsgError('')
    loadListOrderDetail(order_no)
    return function () {
    }
  }, [loadListOrderDetail, order_no])

  const loadInitData = () => {
    loadListOrderDetail(order_no)
  }

  const handleChange = menu_code => (event, isExpanded) => {
    setExpanded(isExpanded ? menu_code : false)
    loadExpansionProduct(order_no, menu_code)
  }

  const sendOrderToPOS = () => {
    sendToPOS(order_no)
    if (statusSendToPOS === 'Success') {
      loadInitData()
      const variant = "success"
      enqueueSnackbar("ส่งข้อมูลเข้าระบบ POS แล้ว", { variant })
      setShowButtonSendOrder(false)
    }
  }
  const removeIndex = uid => {
    removeItemIndex(uid)
    if (statusOrderRemove === 'Success') {
      dispatch(decrement())
      loadInitData()
      const variant = "warning"
      enqueueSnackbar("ลบรายการอาหารแล้ว", { variant })
      setExpanded(false)
    }
  }
  const editItem = item => {
    setOpen(true)
    setMenuItem(item)
    setExpanded(false)
  }
  const addItem = (code, name, price) => {
    addOrderItem(table_no, order_no, code, name, price, 1, price)
    if (statusAddNewOrderItem === 'Success') {
      dispatch(increment())
      dispatch(clearItemAdd())
      loadInitData()
      const variant = "success"
      enqueueSnackbar("เพิ่มรายการอาหาร", { variant })
      setExpanded(false)
    }
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
          {orderList.length > 0 && showButtonSendOrder > 0 && (
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
      {orderList && orderList.map((item, index) => (
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
                      <TableCell>เมนูย่อย</TableCell>
                      <TableCell>พิเศษ</TableCell>
                      <TableCell></TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {expansionItem && expansionItem.map(row => (
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
                          {row.sub_code}
                        </TableCell>
                        <TableCell onClick={() => editItem(row)}>
                          {row.s_text}
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
      </Dialog>
      {msgError && <MessageUtil message={msgError} />}
    </Paper>
  )
}

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {
    loadListOrderDetail: orderNo => dispatch({
      type: 'LOAD_LIST_ORDER_DETAIL',
      payload: {
        orderNo: orderNo
      }
    }),
    loadExpansionProduct: (orderNo, menuCode) => dispatch({
      type: 'LOAD_EXPANSION_PRODUCT',
      payload: {
        orderNo: orderNo,
        menuCode: menuCode,
      }
    }),
    sendToPOS: orderNo => dispatch({
      type: 'SEND_ORDER_TO_POS',
      payload: {
        orderNo: orderNo
      }
    }),
    removeItemIndex: uid => dispatch({
      type: 'REMOVE_ORDER_INDEX',
      payload: {
        uid: uid
      }
    }),
    addOrderItem: (tableNo, orderNo, menuCode, menuName, price, qty, totalAmount) => dispatch({
      type: 'REMOVE_ORDER_INDEX',
      payload: {
        tableNo, 
        orderNo, 
        menuCode, 
        menuName, 
        price, 
        qty, 
        totalAmount
      }
    }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderTab)
