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

  const tableImg = 'img/table.png';
  const foodImg = 'img/food.png';
  const billImg = 'img/bill.png';
  const lastBillImg = 'img/last_bill.png';

  const listItemSmallImg = (index, imgPath, imgDesc, altMsg, badge) => 
    <ListItem
      button
      selected={selectedIndex === index}
      onClick={(event) => handleListItemClick(event, index)}
      style={{ backgroundColor: "#0058AB", color: "white", height: 75, paddingLeft: 10 }}>
      <Badge badgeContent={badge} color="primary">
        <img src={imgPath} width="35" alt={altMsg} />
      </Badge>
    </ListItem>
  const listItemBigImg = (index, imgPath, imgDesc, altMsg, badge) =>
    <ListItem
      button
      selected={selectedIndex === index}
      onClick={(event) => handleListItemClick(event, index)}
      style={{ backgroundColor: "#0058AB", color: "white", height: 100 }}>
      <Badge badgeContent={badge} color="primary">
        <img src={imgPath} alt={altMsg} />
      </Badge>
      <ListItemText primary={imgDesc} style={{ textAlign: 'right' }} />
    </ListItem>

  return (
    <div>
      <Link to="/table" className={classes.listMenu}>
      {pdaSmall ?
        listItemSmallImg(0, tableImg, '', 'table', tableNo):
        listItemBigImg(0, tableImg, 'Table', 'table', tableNo)
      }
      </Link>
      <Divider />
      <Link to="/menu/g01" className={classes.listMenu}>
      {pdaSmall ?
        listItemSmallImg(1, foodImg, '', 'menu', ''):
        listItemBigImg(1, foodImg, 'Menu', 'menu', '')
      }
      </Link>
      <Divider />
      <Link to="/order" className={classes.listMenu}>
      {pdaSmall ?
        listItemSmallImg(2, billImg, '', 'order', orderList.length):
        listItemBigImg(2, billImg, 'Order', 'order', orderList.length)
      }
      </Link>
      <Divider />
      <Link to="/check_order" className={classes.listMenu}>
      {pdaSmall ?
        listItemSmallImg(3, lastBillImg, '', 'check order', ''):
        listItemBigImg(3, lastBillImg, 'Check Order', 'check order', '')
      }
      </Link>
    </div>
  )
}

export default LeftMenu
