import React, { useState, useEffect } from "react"
import { makeStyles } from "@material-ui/core/styles"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import Divider from "@material-ui/core/Divider"
import ListItemAvatar from "@material-ui/core/ListItemAvatar"
import AspectRatio from "@material-ui/icons/AspectRatio"
import { Config } from "../../../config"
import { chooseTable } from "../../actions"
import { useDispatch, useSelector } from "react-redux"
import { Redirect } from "react-router"

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: "#FBFDFA",
    color: "black",
    maxHeight: window.innerHeight - 80,
    overflow: "auto",
  },
}))

export default function TableTab() {
  const classes = useStyles()
  const [selectedIndex, setSelectedIndex] = useState(-1)
  const [rows, setRows] = useState([])
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()
  const table_no = useSelector((state) => state.table.tableNo)

  const handleListItemClick = (event, index, tableNo) => {
    setSelectedIndex(index)
    dispatch(chooseTable(tableNo))
  }

  useEffect(() => {
    fetch(`${Config.POS_API_HOST}/tablefile`)
      .then((res) => res.json())
      .then(
        (response) => {
          if (response.status === "not_found") {
            setRows([])
          } else {
            setRows(response)
          }
          setLoading(false)
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
  }, [])

  if (table_no === "") {
    return <Redirect push to={`/login`} />
  }

  return (
    <div className={classes.root}>
      <List component="nav" aria-label="main mailbox folders">
        {rows.map((item, index) => (
          <div key={`div-${index}`}>
            <ListItem
              button
              selected={selectedIndex === index}
              onClick={(event) => handleListItemClick(event, index, item.Tcode)}
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
    </div>
  )
}
