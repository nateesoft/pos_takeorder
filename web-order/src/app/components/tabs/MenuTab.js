import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"
import GetMenu from "../apis/GetMenu"
import { Redirect } from "react-router"
import SwipeableViews from "react-swipeable-views"
import { useSelector } from "react-redux"

function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={1}>{children}</Box>}
    </Typography>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
}

const dataGroup = [
  "g01",
  "g02",
  "g03",
  "g04",
  "g05",
  "g06",
  "g07",
  "g08",
  "g09",
  "g10",
  "g11",
  "g12",
  "g13",
  "g14",
  "g15"
]

function getMenu(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    "aria-controls": `scrollable-force-tabpanel-${index}`
  }
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 0,
    width: "100%",
    backgroundColor: "theme.palette.background.paper"
  }
}))

export default function MenuTab(props) {
  const groupId =
    (props && props.match && props.match.params && props.match.params.group) ||
    "g01"
  const classes = useStyles()
  const theme = useTheme()
  const [value, setValue] = useState(0)
  const table_no = useSelector(state => state.table.tableNo)
  const order_no = useSelector(state => state.table.order.orderNo)

  const handleChangeIndex = index => {
    setValue(index)
  }

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  useEffect(() => {
    dataGroup.map((item, i) => {
      if (item === groupId) {
        setValue(i)
      }
      return null
    })
    return function() {}
  }, [groupId])

  if (order_no === "") {
    return <Redirect push to={`/login`} />
  }
  if (table_no === "" || table_no === "no_select") {
    return <Redirect push to={`/table`} />
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
          aria-label="scrollable force"
        >
          <Tab label="Appetizer" {...getMenu(0)} />
          <Tab label="Beef" {...getMenu(1)} />
          <Tab label="Beverage" {...getMenu(2)} />
          <Tab label="Burger" {...getMenu(3)} />
          <Tab label="Chicken" {...getMenu(4)} />
          <Tab label="Delivery" {...getMenu(5)} />
          <Tab label="Dessert" {...getMenu(6)} />
          <Tab label="Fish" {...getMenu(7)} />
          <Tab label="Kids" {...getMenu(8)} />
          <Tab label="Pork" {...getMenu(9)} />
          <Tab label="Premiumsteak" {...getMenu(10)} />
          <Tab label="Salad" {...getMenu(11)} />
          <Tab label="Soup" {...getMenu(12)} />
          <Tab label="Spaghetti" {...getMenu(13)} />
          <Tab label="Yourway" {...getMenu(14)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        {dataGroup.map((item, i) => (
          <div
            style={{ height: window.innerHeight - 175, overflow: "auto" }}
            key={`dg${i}`}
          >
            <TabPanel value={value} index={i} key={i}>
              <GetMenu id={item} close={()=>console.log('close function')} />
            </TabPanel>
          </div>
        ))}
      </SwipeableViews>
    </div>
  )
}
