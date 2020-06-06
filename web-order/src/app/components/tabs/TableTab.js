import React, { useState, useEffect, forwardRef } from "react"
import { makeStyles } from "@material-ui/core/styles"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import Divider from "@material-ui/core/Divider"
import ListItemAvatar from "@material-ui/core/ListItemAvatar"
import AspectRatio from "@material-ui/icons/AspectRatio"
import EventSeat from "@material-ui/icons/EventSeat"
import { selectTableActive } from "../../actions"
import { connect, useDispatch, useSelector } from "react-redux"
import { Redirect } from "react-router"
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
import AlertDialog from '../Dialog'

const format = require('date-format');
const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

const { 
  LOAD_TABLE_FILE, UPDATE_TABLE_FILE, SEARCH_TABLE_FILE, SET_ETD_TYPE 
} = require('../../actions/constants')

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

const custList = [
  { id: 0, label: '0' },
  { id: 1, label: '1' },
  { id: 2, label: '2' },
  { id: 3, label: '3' },
  { id: 4, label: '4' },
  { id: 5, label: '5' },
  { id: 6, label: '6' },
  { id: 7, label: '7' },
  { id: 8, label: '8' },
  { id: 9, label: '9' },
  { id: 10, label: '10' },
]
const typeList = [
  { id: 0, label: 'E' },
  { id: 1, label: 'T' },
  { id: 2, label: 'D' }
]

const TableTab = props => {
  const { onLoadTablefile, updateTable, onSearchTable, updateETD } = props
  const classes = useStyles()
  const [msgError, setMsgError] = useState("")
  const dispatch = useDispatch()
  const empCode = useSelector(state => state.login.username)
  const table_no = useSelector(state => state.table.tableNo)
  const tableFileList = useSelector(state => state.table.tableFileList)
  const macno = useSelector(state => state.table.macno)
  const [open, setOpen] = useState(false)
  const [openError, setOpenError] = useState(false)
  const [customerCount, setCustomerCount] = useState('0')
  const [etd, setEtd] = useState('E')
  const [tableCode, setTableCode] = useState(table_no);
  const [selectCust, setSelectCust] = useState(false)

  const HOST = process.env.HOST || window.location.hostname
  const POS_API = `http://${HOST}:5000`

  const handleListItemClick = (tableNo) => {
    fetch(`${POS_API}/pos/tablefile/get/${tableNo}`)
      .then(res => res.json())
      .then(result => {
        const table = result.data[0]
        if(table.TOnAct === 'Y' && table.TUser !== empCode) {
          setMsgError('โต๊ะนี้มีพนักงานท่านอื่นกำลังทำรายการอยู่')
          setOpenError(true);
        } else {
          setCustomerCount(table.TCustomer)
          setTableCode(table.Tcode)
          setOpen(true)
          setMsgError('')
        }
        onLoadTablefile('empty')
    })
  }

  const handleChange = event => {
    setCustomerCount(event.target.value)
  };

  const handleTypeChange = event => {
    setEtd(event.target.value)
  };

  const onSubmit = () => {
    if (etd && customerCount) {
      dispatch(selectTableActive(tableCode))
      setSelectCust(true)
      updateETD(etd)
      updateTable(tableCode, customerCount, macno, empCode)
      setOpen(false)
    } else {
      setMsgError('จำนวนลูกค้าต้องมากกว่า 0 คน')
    }
  };

  useEffect(() => {
      onLoadTablefile('empty')
      setMsgError('')
    return () => {
      setMsgError('')
    }
  }, [onLoadTablefile, updateETD])

  if (table_no === "") {
    return <Redirect push to={`/login`} />
  }

  if (selectCust) {
    return <Redirect push to={`/menu/g01`} />
  }

  return (
    <div className={classes.root}>
      <SearchTable loadTable={onLoadTablefile} onSearch={onSearchTable} />
      <List component="nav" aria-label="main mailbox folders">
        {tableFileList && tableFileList.map((item, index) => (
          <div key={`div-${index}`}>
            <ListItem
              button
              selected={table_no === item.Tcode}
              onClick={() => handleListItemClick(item.Tcode)}
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
                <MenuItem key={num.id} value={num.label}>{num.label}</MenuItem>
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
                <MenuItem key={num.id} value={num.label}>{num.label}</MenuItem>
              )}
            </Select>
          </FormControl>
          <Button variant="contained" color="primary" onClick={()=> onSubmit()}>
            ยืนยันรายการ
          </Button>
        </DialogContent>
      </Dialog>
      <AlertDialog open={openError} onClose={()=>setOpenError(false)} msg={msgError} />
    </div>
  )
}

const mapStateToProps = state => {
  return {
    onSearchTable: () => state.table.tableFileList
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onLoadTablefile: (type) => dispatch({ 
      type: LOAD_TABLE_FILE,
      payload: {
        type
      }
    }),
    updateTable: (table_code, cust_count, macno, emp_code) => dispatch({
      type: UPDATE_TABLE_FILE,
      payload: {
        table_code,
        cust_count,
        macno,
        emp_code
      }
    }),
    updateETD: (etd) => dispatch({
      type: SET_ETD_TYPE,
      payload: {
        etd: etd
      }
    }),
    onSearchTable: (table_code, type) => dispatch({
      type: SEARCH_TABLE_FILE,
      payload: {
        table_code,
        type
      }
    })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TableTab)
