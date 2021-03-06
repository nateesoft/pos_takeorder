import React, { useState, useEffect } from "react"
import clsx from "clsx"
import CssBaseline from "@material-ui/core/CssBaseline"
import Drawer from "@material-ui/core/Drawer"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import Divider from "@material-ui/core/Divider"
import IconButton from "@material-ui/core/IconButton"
import Container from "@material-ui/core/Container"
import MenuIcon from "@material-ui/icons/Menu"
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft"
import ExitToApp from "@material-ui/icons/ExitToApp"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { Link } from "react-router-dom"
import SearchIcon from "@material-ui/icons/Search"
import { useSelector, useDispatch } from "react-redux"
import Button from "@material-ui/core/Button"
import { SnackbarProvider } from "notistack"
import { makeStyles } from "@material-ui/core/styles"
import LeftMenu from "../../components/LeftMenu"
import TableTab from "../../containers/tabs/TableTab"
import MenuTab from "../../containers/tabs/MenuTab"
import MenuDetail from "../../components/menu/MenuDetail"
import OrderTab from "../../containers/tabs/OrderTab"
import CheckOrderTab from "../../containers/tabs/CheckOrderTab"
import LoginPage from "../login/Login"
import LogoutPage from "../login/Logout"
import WelcomePage from "../../containers/tabs/Welcome"
import NotfoundPage from "../../components/pages/Notfound"
import useStyles from "../../components/styles/App"
import SearchPanel from "../../containers/search"
import { loadGroupList } from '../../actions'
import GroupManagement from "../../containers/management/group"
import ProductManagement from "../../containers/management/product"

require("../../components/styles/App.css")

const useStyles2 = makeStyles({
  list: {
    width: window.innerWidth >= 650 ? window.innerWidth - 200 : window.innerWidth - 55,
  },
  fullList: {
    width: "auto",
  },
})

const App = () => {
  const classes = useStyles()
  const classes2 = useStyles2()
  const [open, setOpen] = useState(true)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const tableNo = useSelector(state => state.table.tableNo)
  const netTotal = useSelector(state => state.table.NetTotal)
  const dispatch = useDispatch()

  const handleDrawerOpen = () => {
    setOpen(true)
  }
  const handleDrawerClose = () => {
    setOpen(false)
  }

  const toggleDrawer = open => event => {
    setDrawerOpen(open)
  }

  const list = () => (
    <div className={clsx(classes2.list)} role="presentation">
      <SearchPanel close={toggleDrawer(false)} />
    </div>
  )

  const onBackButtonEvent = () => {
    window.history.forward()
  }

  useEffect(() => {
    dispatch(loadGroupList())
    window.addEventListener('popstate', onBackButtonEvent)
    if (window.innerWidth <= 650) {
      setOpen(false)
    }
    return () => {
      window.removeEventListener('popstate', onBackButtonEvent)
    }
  }, [dispatch])

  return (
    <Router>
      <SnackbarProvider
        maxSnack={2}
        autoHideDuration={500}
        anchorOrigin={{ vertical: "top", horizontal: "left" }}
      >
        <div className={classes.root}>
          <CssBaseline />
          <AppBar
            position="absolute"
            style={{ background: "#bc0b06" }}
            className={clsx(classes.appBar, open && classes.appBarShift)}
          >
            <Toolbar className={classes.toolbar}>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                className={clsx(
                  classes.menuButton,
                  open && classes.menuButtonHidden
                )}
              >
                <MenuIcon />
              </IconButton>
              <Typography
                component="h1"
                variant="h6"
                color="inherit"
                noWrap
                className={classes.title}
              >
                <Button
                  variant="outlined"
                  color="secondary"
                  className={classes.button}
                  startIcon={<SearchIcon />}
                  onClick={toggleDrawer(true)}
                >
                  ค้นหารายการอาหาร
                </Button>
                <Drawer
                  anchor="right"
                  open={drawerOpen}
                  onClose={toggleDrawer(false)}
                >
                  {list("right")}
                </Drawer>
              </Typography>
              {tableNo ? 
                <Link to="/logout" style={{ color: "white" }}>
                  <img src="img/logout.png" width="35" alt="bill" />
                </Link> : (
                <Link to="/login" style={{ color: "white" }}>
                  <IconButton color="inherit" aria-label="upload picture" component="span">
                    <ExitToApp />
                  </IconButton>
                </Link>
              )}
            </Toolbar>
          </AppBar>
          {tableNo && tableNo !== "no_select" && (
            <AppBar
              position="fixed"
              color="primary"
              className={classes.appBarFooter}
            >
              <div
                align="center"
                style={{
                  backgroundColor: "#123456",
                  height: 60,
                  paddingTop: 5,
                }}
              >
                <h2>
                  ยอดที่ต้องชำระ: {netTotal}
                </h2>
              </div>
            </AppBar>
          )}
          <Drawer
            variant="permanent"
            classes={{
              paper: clsx(
                classes.drawerPaper,
                !open && classes.drawerPaperClose
              ),
            }}
            open={open}
          >
            <div
              className={classes.toolbarIcon}
              style={{
                backgroundColor: "#bc0b06",
                color: "white",
                textAlign: "center",
              }}
            >
              <Typography
                component="h1"
                variant="h6"
                color="inherit"
                noWrap
                className={classes.titleLogo}
              >
                <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                  <img src="img/fast_order.png" alt="" width="100" />
                </Link>
              </Typography>
              <IconButton onClick={handleDrawerClose} style={{ color: "white" }}>
                <ChevronLeftIcon />
              </IconButton>
            </div>
            <Divider />
            <LeftMenu />
          </Drawer>
          <main className={classes.content}>
            <div className={classes.appBarSpacer} />
            <Container maxWidth="lg" className={classes.container}>
              <Switch>
                <Route exact path="/" component={WelcomePage} />
                <Route path="/login" component={LoginPage} />
                <Route path="/logout" component={LogoutPage} />
                <Route path="/table" component={TableTab} />
                <Route path="/menu/:group" component={MenuTab} />
                <Route path="/detail/:group/:code" component={MenuDetail} />
                <Route path="/order" component={OrderTab} />
                <Route path="/check_order" component={CheckOrderTab} />
                <Route path="/management_group" component={GroupManagement} />
                <Route path="/management_product" component={ProductManagement} />
                <Route path="" component={NotfoundPage} />
              </Switch>
            </Container>
          </main>
        </div>
      </SnackbarProvider>
    </Router>
  )
}

export default App;
