import React, { useState, useEffect, forwardRef } from "react"
import { makeStyles } from "@material-ui/core/styles"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import Divider from "@material-ui/core/Divider"
import ListItemAvatar from "@material-ui/core/ListItemAvatar"
import AspectRatio from "@material-ui/icons/AspectRatio"
import EventSeat from "@material-ui/icons/EventSeat"
import { chooseTable } from "../../actions"
import { connect, useDispatch, useSelector } from "react-redux"
import { Redirect } from "react-router"
import MessageUtil from '../../utils/alertMsg'
import Dialog from "@material-ui/core/Dialog"
import MuiDialogContent from "@material-ui/core/DialogContent"
import { withStyles } from "@material-ui/core/styles"
import DialogContentText from '@material-ui/core/DialogContentText';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Slide from '@material-ui/core/Slide';
const format = require('date-format');

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

const { LOAD_TABLE_FILE, UPDATE_TABLE_FILE } = require('../../actions/constants')

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    backgroundColor: "#FBFDFA",
    color: "black",
    maxHeight: window.innerHeight - 80,
    overflow: "auto",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}))

const DialogContent = withStyles(theme => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent)

const custList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const TableTab = props => {
  const { onLoadTablefile, updateTable } = props
  const classes = useStyles()
  const [msgError, setMsgError] = useState("")
  const dispatch = useDispatch()
  const table_no = useSelector(state => state.table.tableNo)
  const tableFileList = useSelector(state => state.table.tableFileList)
  const [open, setOpen] = useState(false)
  const [customerCount, setCustomerCount] = useState(0)
  const [selectCust, setSelectCust] = useState(false)

  const handleListItemClick = (event, index, tableNo, custCount) => {
    dispatch(chooseTable(tableNo))
    setCustomerCount(custCount)
    setOpen(true)
  }

  const handleChange = event => {
    setCustomerCount(event.target.value)
    updateTable(table_no, event.target.value)
    setOpen(false)
    setSelectCust(true)
  };

  useEffect(() => {
      onLoadTablefile()
      setMsgError('')
    return () => {
    }
  }, [onLoadTablefile])

  if (table_no === "") {
    return <Redirect push to={`/login`} />
  }

  if (selectCust) {
    return <Redirect push to={`/menu/g01`} />
  }

  return (
    <div className={classes.root}>
      <List component="nav" aria-label="main mailbox folders">
        {tableFileList && tableFileList.map((item, index) => (
          <div key={`div-${index}`}>
            <ListItem
              button
              selected={table_no === item.Tcode}
              onClick={event => handleListItemClick(event, index, item.Tcode, item.TCustomer)}
            >
              <ListItemAvatar>
                <img
                  src="img/table.png"
                  alt="table"
                  style={{ padding: 5, marginRight: 20 }}
                />
              </ListItemAvatar>
              <ListItemText
                primary={`โต๊ะ ${item.Tcode} : ลูกค้า (${item.TCustomer})`}
                secondary={`Zone : ${item.SoneCode} Last login: ${format('dd/MM/yyyy', new Date(item.TLoginDate))}`}
              />
              <span style={{ marginRight: 20 }}>สถานะ: {item.TOnAct}</span>
              {item.TOnAct==='N' ? <AspectRatio />:<EventSeat />}
            </ListItem>
            <Divider />
          </div>
        ))}
      </List>
      <Divider />
      <Dialog
        TransitionComponent={Transition}
        onClose={() => setOpen(false)}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogContent dividers>
          <DialogContentText>
            ระบุจำนวนลูกค้า
          </DialogContentText>
          <FormControl required className={classes.formControl}>
            <InputLabel id="demo-simple-select-required-label">Customer</InputLabel>
            <Select
              labelId="demo-simple-select-required-label"
              id="demo-simple-select-required"
              value={customerCount}
              onChange={handleChange}
              className={classes.selectEmpty}
            >
              {custList.map(num=>
                <MenuItem key={num} value={num}>{num}</MenuItem>
              )}
            </Select>
          </FormControl>
        </DialogContent>
      </Dialog>
      {msgError && <MessageUtil message={msgError} />}
    </div>
  )
}

const mapStateToProps = state => {
  return {

  }
}

const mapDispatchToProps = dispatch => {
  return {
    onLoadTablefile: () => dispatch({ 
      type: LOAD_TABLE_FILE 
    }),
    updateTable: (table_code, cust_count) => dispatch({
      type: UPDATE_TABLE_FILE,
      payload: {
        table_code: table_code,
        cust_count: cust_count
      }
    })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TableTab)
