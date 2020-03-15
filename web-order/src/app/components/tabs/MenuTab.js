import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"
import GetMenu from "../../apis/GetMenu"
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

function a11yProps(index) {
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
  const [value, setValue] = React.useState(0)
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
  if (table_no === "") {
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
          // indicatorColor="primary"
          // textColor="primary"
          aria-label="scrollable force"
        >
          <Tab label="Appetizer" {...a11yProps(0)} />
          <Tab label="Beef" {...a11yProps(1)} />
          <Tab label="Beverage" {...a11yProps(2)} />
          <Tab label="Burger" {...a11yProps(3)} />
          <Tab label="Chicken" {...a11yProps(4)} />
          <Tab label="Delivery" {...a11yProps(5)} />
          <Tab label="Dessert" {...a11yProps(6)} />
          <Tab label="Fish" {...a11yProps(7)} />
          <Tab label="Kids" {...a11yProps(8)} />
          <Tab label="Pork" {...a11yProps(9)} />
          <Tab label="Premiumsteak" {...a11yProps(10)} />
          <Tab label="Salad" {...a11yProps(11)} />
          <Tab label="Soup" {...a11yProps(12)} />
          <Tab label="Spaghetti" {...a11yProps(13)} />
          <Tab label="Yourway" {...a11yProps(14)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        {dataGroup.map((item, i) => (
          <TabPanel value={value} index={i} key={i}>
            <GetMenu id={item} />
          </TabPanel>
        ))}
      </SwipeableViews>
    </div>
  )
}
