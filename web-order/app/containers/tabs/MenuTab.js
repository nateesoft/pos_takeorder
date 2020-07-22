import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"
import { Redirect } from "react-router"
import SwipeableViews from "react-swipeable-views"
import { useSelector } from "react-redux"
import GetMenu from "components/apis/GetMenu"

const TabPanel = props => {
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
  value: PropTypes.any.isRequired,
}

const getMenu = index => {
  return {
    id: `scrollable-force-tab-${index}`,
    "aria-controls": `scrollable-force-tabpanel-${index}`,
  }
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 0,
    width: "100%",
    backgroundColor: "theme.palette.background.paper",
  },
}))

const MenuTab = props => {
  const { match } = props
  const classes = useStyles()
  const theme = useTheme()
  const [value, setValue] = useState(0)
  const table_no = useSelector((state) => state.table.tableNo)
  const order_no = useSelector((state) => state.table.order.orderNo)
  const dataGroup = useSelector((state) => state.product.groupList)

  const handleChangeIndex = index => {
    setValue(index)
  }

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const emptyFunc = () => {}

  useEffect(() => {
    const groupId = (match && match.params && match.params.group) || dataGroup[0].code
    dataGroup.map((item, i) => {
      if (item.code === groupId) {
        setValue(i)
      }
      return null
    })
    return () => {}
  }, [dataGroup, match])

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
          {dataGroup && dataGroup.map((item, i) => (
            <Tab key={'iTab'+i} label={item.name} {...getMenu(i)} />
          ))}
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        {dataGroup &&
          dataGroup.map((item, i) => (
            <div
              style={{ height: window.innerHeight - 175, overflow: "auto" }}
              key={`dg${i}`}
            >
              <TabPanel value={value} index={i} key={i}>
                <GetMenu id={item.code} close={emptyFunc} />
              </TabPanel>
            </div>
          ))}
      </SwipeableViews>
    </div>
  )
}

export default MenuTab
