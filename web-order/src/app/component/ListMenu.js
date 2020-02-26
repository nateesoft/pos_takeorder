import React, { useState } from "react"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import ViewModule from "@material-ui/icons/ViewModule"
import MenuBook from "@material-ui/icons/MenuBook"
import ViewList from "@material-ui/icons/ViewList"
import BarChartIcon from "@material-ui/icons/BarChart"
import AssignmentIcon from "@material-ui/icons/Assignment"
import { Link } from "react-router-dom"
import Divider from "@material-ui/core/Divider"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  listMenu: {
    textDecoration: "none",
    color: "black"
  }
}))

export default function ListMenu() {
  const classes = useStyles()
  const [selectedIndex, setSelectedIndex] = useState(-1)

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index)
  }

  return (
    <div>
      <Link to="/table" className={classes.listMenu}>
        <ListItem
          button
          selected={selectedIndex === 0}
          onClick={event => handleListItemClick(event, 0)}
        >
          <ListItemIcon>
            <ViewModule />
          </ListItemIcon>
          <ListItemText primary="Table" />
        </ListItem>
      </Link>
      <Link to="/menu" className={classes.listMenu}>
        <ListItem
          button
          selected={selectedIndex === 1}
          onClick={event => handleListItemClick(event, 1)}
        >
          <ListItemIcon>
            <MenuBook />
          </ListItemIcon>
          <ListItemText primary="Menu" />
        </ListItem>
      </Link>
      <Link to="/order" className={classes.listMenu}>
        <ListItem
          button
          selected={selectedIndex === 2}
          onClick={event => handleListItemClick(event, 2)}
        >
          <ListItemIcon>
            <ViewList />
          </ListItemIcon>
          <ListItemText primary="Order" />
        </ListItem>
      </Link>
      <Link to="/bill" className={classes.listMenu}>
        <ListItem
          button
          selected={selectedIndex === 3}
          onClick={event => handleListItemClick(event, 3)}
        >
          <ListItemIcon>
            <AssignmentIcon />
          </ListItemIcon>
          <ListItemText primary="Bill" />
        </ListItem>
      </Link>

      <Link to="/report" className={classes.listMenu}>
        <Divider />
        <ListItem
          button
          selected={selectedIndex === 4}
          onClick={event => handleListItemClick(event, 4)}
        >
          <ListItemIcon>
            <BarChartIcon />
          </ListItemIcon>
          <ListItemText primary="Report" />
        </ListItem>
      </Link>
    </div>
  )
}
