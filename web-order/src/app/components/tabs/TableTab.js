import React, { useState, useEffect } from "react"
import { makeStyles } from "@material-ui/core/styles"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import Divider from "@material-ui/core/Divider"
import ListItemAvatar from "@material-ui/core/ListItemAvatar"
import AspectRatio from "@material-ui/icons/AspectRatio"
import { chooseTable } from "../../actions"
import { connect, useDispatch, useSelector } from "react-redux"
import { Redirect } from "react-router"
import MessageUtil from '../../utils/alertMsg'

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    backgroundColor: "#FBFDFA",
    color: "black",
    maxHeight: window.innerHeight - 80,
    overflow: "auto",
  },
}))

const TableTab = props => {
  const { onLoadTablefile } = props
  const classes = useStyles()
  const [msgError, setMsgError] = useState("")
  const [selectedIndex, setSelectedIndex] = useState(-1)
  const dispatch = useDispatch()
  const table_no = useSelector(state => state.table.tableNo)
  const tableFileList = useSelector(state => state.table.tableFileList)

  const handleListItemClick = (event, index, tableNo) => {
    setSelectedIndex(index)
    dispatch(chooseTable(tableNo))
  }

  useEffect(() => {
      onLoadTablefile()
      setMsgError('')
    return function () {
    }
  }, [onLoadTablefile])

  if (table_no === "") {
    return <Redirect push to={`/login`} />
  }

  return (
    <div className={classes.root}>
      <List component="nav" aria-label="main mailbox folders">
        {tableFileList && tableFileList.map((item, index) => (
          <div key={`div-${index}`}>
            <ListItem
              button
              selected={selectedIndex === index}
              onClick={event => handleListItemClick(event, index, item.Tcode)}
            >
              <ListItemAvatar>
                <img
                  src="img/table.png"
                  alt="table"
                  style={{ padding: 5, marginRight: 20 }}
                />
              </ListItemAvatar>
              <ListItemText
                primary={`Table no. ${item.Tcode} : Customer (${item.TCustomer})`}
                secondary={`Zone : ${item.SoneCode}`}
              />
              <span style={{ marginRight: 20 }}>Status: {item.TOnAct}</span>
              <AspectRatio />
            </ListItem>
            <Divider />
          </div>
        ))}
      </List>
      <Divider />
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
    onLoadTablefile: () => dispatch({ type: 'LOAD_TABLE_FILE' })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TableTab)
