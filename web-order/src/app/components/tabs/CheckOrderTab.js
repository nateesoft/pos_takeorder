import React, { useState, useEffect } from "react"
import { makeStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import { useSelector, connect } from "react-redux"
import TableContainer from "@material-ui/core/TableContainer"
import TableHead from "@material-ui/core/TableHead"
import TableRow from "@material-ui/core/TableRow"
import Table from "@material-ui/core/Table"
import TableBody from "@material-ui/core/TableBody"
import TableCell from "@material-ui/core/TableCell"
import Paper from "@material-ui/core/Paper"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import IconButton from "@material-ui/core/IconButton"
import Fastfood from "@material-ui/icons/Fastfood"
import { Redirect } from "react-router"
import MessageUtil from '../../utils/alertMsg'

const { LOAD_CHECK_ORDER_LIST } = require('../../actions/constants')

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

const CheckOrderTab = props => {
  const { loadCheckOrderList }= props
  const classes = useStyles()
  const [msgError, setMsgError] = useState("")

  const table_no = useSelector(state => state.table.tableNo)
  const balanceList = useSelector(state => state.table.balanceList)

  useEffect(() => {
    loadCheckOrderList(table_no)
    setMsgError('')
    return () => {
    }
  }, [loadCheckOrderList, table_no])

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
            โต๊ะ : {table_no}
          </Typography>
        </Toolbar>
      </AppBar>
      <TableContainer className={classes.root}>
        <Table aria-label="sticky table" style={{ width: "100%" }}>
          <TableHead style={{ background: "#dddddd" }}>
            <TableRow>
              <TableCell>รหัส</TableCell>
              <TableCell>เมนู</TableCell>
              <TableCell>ราคา</TableCell>
              <TableCell>จำนวน</TableCell>
              <TableCell>รวม</TableCell>
              <TableCell>ประเภท</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {balanceList && balanceList.map((row, index) => (
              <TableRow key={row.R_Index}>
                <TableCell>{row.R_PluCode}</TableCell>
                <TableCell>{row.R_PName}</TableCell>
                <TableCell align="right">{row.R_Price}</TableCell>
                <TableCell align="right">{row.R_Quan}</TableCell>
                <TableCell align="right">{row.R_Total}</TableCell>
                <TableCell align="center">{row.R_ETD}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {msgError && <MessageUtil message={msgError} />}
    </Paper>
  )
}

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {
    loadCheckOrderList: tableNo => dispatch({
      type: LOAD_CHECK_ORDER_LIST,
      payload: {
        table_no: tableNo
      }
    }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckOrderTab)
