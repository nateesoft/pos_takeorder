import React from "react"
import PropTypes from "prop-types"
import { makeStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"

import GetMenu from "../../apis/GetMenu"

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
    backgroundColor: theme.palette.background.paper
  }
}))

export default () => {
  const classes = useStyles()
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
          indicatorColor="primary"
          textColor="primary"
          aria-label="scrollable force"
        >
          <Tab label="Appetizer" {...a11yProps(0)} />
          <Tab label="Beef" {...a11yProps(1)} />
          <Tab label="Beverage" {...a11yProps(2)} />
          <Tab label="Burger" {...a11yProps(3)} />
          <Tab label="Chicken" {...a11yProps(4)} />
          <Tab label="Delivery" {...a11yProps(5)} />
          <Tab label="Dessert" {...a11yProps(6)} />
          <Tab label="Fish" {...a11yProps(6)} />
          <Tab label="Kids" {...a11yProps(6)} />
          <Tab label="Pork" {...a11yProps(6)} />
          <Tab label="Premiumsteak" {...a11yProps(6)} />
          <Tab label="Salad" {...a11yProps(6)} />
          <Tab label="Soup" {...a11yProps(6)} />
          <Tab label="Spaghetti" {...a11yProps(6)} />
          <Tab label="Yourway" {...a11yProps(6)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <GetMenu id="g01" />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <GetMenu id="g02" />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <GetMenu id="g03" />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <GetMenu id="g04" />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <GetMenu id="g05" />
      </TabPanel>
      <TabPanel value={value} index={5}>
        <GetMenu id="g06" />
      </TabPanel>
      <TabPanel value={value} index={6}>
        <GetMenu id="g07" />
      </TabPanel>
      <TabPanel value={value} index={7}>
        <GetMenu id="g08" />
      </TabPanel>
      <TabPanel value={value} index={8}>
        <GetMenu id="g09" />
      </TabPanel>
      <TabPanel value={value} index={9}>
        <GetMenu id="g10" />
      </TabPanel>
      <TabPanel value={value} index={10}>
        <GetMenu id="g11" />
      </TabPanel>
      <TabPanel value={value} index={11}>
        <GetMenu id="g12" />
      </TabPanel>
      <TabPanel value={value} index={12}>
        <GetMenu id="g13" />
      </TabPanel>
      <TabPanel value={value} index={13}>
        <GetMenu id="g14" />
      </TabPanel>
      <TabPanel value={value} index={14}>
        <GetMenu id="g15" />
      </TabPanel>
    </div>
  )
}
