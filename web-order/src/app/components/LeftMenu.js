import React, { useState, useEffect } from "react"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import { Link } from "react-router-dom"
import Divider from "@material-ui/core/Divider"
import { makeStyles } from "@material-ui/core/styles"
import Badge from "@material-ui/core/Badge"
import { useSelector } from "react-redux"

const useStyles = makeStyles(theme => ({
  listMenu: {
    textDecoration: "none",
    color: "black",
  },
}))

const LeftMenu = props => {
  const orderList = useSelector(state => state.table.order.items)
  const tableNo = useSelector(state => state.table.tableNo)

  const classes = useStyles()
  const [selectedIndex, setSelectedIndex] = useState(-1)
  const pdaSmall = window.innerWidth <= 650

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index)
  }
  
  useEffect(() => {
    return () => {
      
    }
  }, [])

  return (
    <div>
      <Link to="/table" className={classes.listMenu}>
        <ListItem
          button
          selected={selectedIndex === 0}
          onClick={(event) => handleListItemClick(event, 0)}
          style={{ backgroundColor: "#0058AB", color: "white", height: 100 }}>
          <Badge badgeContent={tableNo} color="primary">
            {pdaSmall ? 
              <img src="img/table.png" width="35" alt="table" />: 
              <img src="img/table.png" alt="table" />
            }
            <ListItemText primary="Table" />
          </Badge>
        </ListItem>
      </Link>
      <Divider />
      <Link to="/menu/g01" className={classes.listMenu}>
        <ListItem
          button
          selected={selectedIndex === 1}
          onClick={event => handleListItemClick(event, 1)}
          style={{ backgroundColor: "#0058AB", color: "white", height: 100 }}>
          {pdaSmall ? 
            <img src="img/food.png" width="35" alt="food" />:
            <img src="img/food.png" alt="food" />
          }
          <ListItemText primary="Menu" />
        </ListItem>
      </Link>
      <Divider />
      <Link to="/order" className={classes.listMenu}>
        <ListItem
          button
          selected={selectedIndex === 2}
          onClick={event => handleListItemClick(event, 2)}
          style={{ backgroundColor: "#0058AB", color: "white", height: 100 }}>
          <Badge badgeContent={orderList.length} color="primary">
            {pdaSmall ? 
              <img src="img/bill.png" width="35" alt="bill" />:
              <img src="img/bill.png" alt="bill" />
            }
            <ListItemText primary="Order" />
          </Badge>
        </ListItem>
      </Link>
      <Divider />
      <Link to="/check_order" className={classes.listMenu}>
        <ListItem
          button
          selected={selectedIndex === 2}
          onClick={event => handleListItemClick(event, 3)}
          style={{ backgroundColor: "#0058AB", color: "white", height: 100 }}>
            {pdaSmall ? 
              <img src="img/last_bill.png" width="35" alt="check order" />:
              <img src="img/last_bill.png" alt="check order" />
            }
            <ListItemText primary="Check Order" />
        </ListItem>
      </Link>
    </div>
  )
}

export default LeftMenu
