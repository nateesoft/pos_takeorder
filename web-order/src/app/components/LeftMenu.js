import React, { useState, useEffect } from "react"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import { Link } from "react-router-dom"
import Divider from "@material-ui/core/Divider"
import { makeStyles } from "@material-ui/core/styles"
import Badge from "@material-ui/core/Badge"
import { useDispatch, useSelector } from "react-redux"
import { reset } from "../actions"

const useStyles = makeStyles((theme) => ({
  listMenu: {
    textDecoration: "none",
    color: "black",
  },
}))

export default function LeftMenu(props) {
  const dispatch = useDispatch()
  const tableNo = useSelector((state) => state.table.tableNo)
  const counter = useSelector((state) => state.counter.count)
  if (counter <= 0) {
    dispatch(reset())
  }
  const classes = useStyles()
  const [selectedIndex, setSelectedIndex] = useState(-1)

  useEffect(() => {
    return function () {
      
    }
  }, [])

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index)
  }

  const logout = () => {
    window.location = '/'
  }

  return (
    <div>
      <Link to="/table" className={classes.listMenu}>
        <ListItem
          button
          selected={selectedIndex === 0}
          onClick={(event) => handleListItemClick(event, 0)}
          style={{ backgroundColor: "#0058AB", color: "white", height: 100 }}
        >
          <Badge badgeContent={tableNo} color="primary">
            <img src="img/table.png" alt="table" />
            <ListItemText primary="Table" />
          </Badge>
        </ListItem>
      </Link>
      <Divider />
      <Link to="/menu/g01" className={classes.listMenu}>
        <ListItem
          button
          selected={selectedIndex === 1}
          onClick={(event) => handleListItemClick(event, 1)}
          style={{ backgroundColor: "#0058AB", color: "white", height: 100 }}
        >
          <img src="img/food.png" alt="menu" />
          <ListItemText primary="Menu" />
        </ListItem>
      </Link>
      <Divider />
      <Link to="/order" className={classes.listMenu}>
        <ListItem
          button
          selected={selectedIndex === 2}
          onClick={(event) => handleListItemClick(event, 2)}
          style={{ backgroundColor: "#0058AB", color: "white", height: 100 }}
        >
          <Badge badgeContent={counter} color="primary">
            <img src="img/bill.png" alt="bill" />
          </Badge>
          <ListItemText primary="Order" />
        </ListItem>
      </Link>
      <Divider />
      <ListItem
        button
        onClick={() => logout()}
        style={{ backgroundColor: "#0058AB", color: "white", height: 100 }}
      >
        <img src="img/logout.png" alt="bill" />
        <ListItemText primary="Logout" />
      </ListItem>
    </div>
  )
}
