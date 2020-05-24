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
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Slide from '@material-ui/core/Slide';
import Button from '@material-ui/core/Button';
import SearchTable from '../search/SearchTable'
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
const typeList = [
  { id: 0, label: 'ทานในร้าน (E)' },
  { id: 1, label: 'กลับบ้าน (T)' },
  { id: 2, label: 'เดลิเวอรี่ (D)' }
]

const TableTab = props => {
  const { onLoadTablefile, updateTable } = props
  const classes = useStyles()
  const [msgError, setMsgError] = useState("")
  const dispatch = useDispatch()
  const table_no = useSelector(state => state.table.tableNo)
  const tableFileList = useSelector(state => state.table.tableFileList)
  const macno = useSelector(state => state.table.macno)
  const [open, setOpen] = useState(false)
  const [customerCount, setCustomerCount] = useState(0)
  const [etd, setEtd] = useState(0)
  const [selectCust, setSelectCust] = useState(false)

  const handleListItemClick = (event, index, tableNo, custCount) => {
    dispatch(chooseTable(tableNo))
    setCustomerCount(custCount)
    setOpen(true)
  }

  const handleChange = event => {
    setCustomerCount(event.target.value)
    updateTable(table_no, event.target.value, macno)
  };
  const handleTypeChange = event => {
    setEtd(event.target.value)
  };
  const onSubmit = event => {
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
      <SearchTable />
      <List component="nav" aria-label="main mailbox folders">
        {tableFileList && tableFileList.map((item, index) => (
          <div key={`div-${index}`}>
            <ListItem
              button
              selected={table_no === item.Tcode}
              onClick={event => handleListItemClick(event, index, item.Tcode, item.TCustomer)}
            >
              <ListItemAvatar>
                <img src="img/table.png" width="50" alt="table" style={{ padding: 5 }} />
              </ListItemAvatar>
              <ListItemText
                primary={`โต๊ะ ${item.Tcode} : ลูกค้า (${item.TCustomer})`}
                secondary={`Zone : ${item.SoneCode} - ${format('dd/MM/yyyy', new Date(item.TLoginDate))}`}
              />
              <span style={{ marginRight: 20}}>รวม: {item.NetTotal || 0}</span>
              <span style={{ marginRight: 20 }}>Sts: {item.TOnAct}</span>
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
          <FormControl required className={classes.formControl}>
            <InputLabel id="demo-simple-select-required-label">จำนวนลูกค้า</InputLabel>
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
          <FormControl required className={classes.formControl}>
            <InputLabel id="demo-simple-select-required-label">ประเภทการสั่ง</InputLabel>
            <Select
              labelId="demo-simple-select-required-label"
              id="demo-simple-select-required2"
              value={etd}
              onChange={handleTypeChange}
              className={classes.selectEmpty}
            >
              {typeList.map(num =>
                <MenuItem key={num.id} value={num.id}>{num.label}</MenuItem>
              )}
            </Select>
          </FormControl>
          <Button variant="contained" color="primary" onClick={()=> onSubmit()}>
            ยืนยันรายการ
          </Button>
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
    updateTable: (table_code, cust_count, macno) => dispatch({
      type: UPDATE_TABLE_FILE,
      payload: {
        table_code,
        cust_count,
        macno
      }
    })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TableTab)
