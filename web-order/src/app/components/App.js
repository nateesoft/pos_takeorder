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
import LeftMenu from "./LeftMenu"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import TableTab from "./tabs/TableTab"
import MenuTab from "./tabs/MenuTab"
import MenuDetail from "./menu/MenuDetail"
import OrderTab from "./tabs/OrderTab"
import BillTab from "./tabs/BillTab"
import LoginPage from "./login/Login"
import WelcomePage from "./tabs/Welcome"
import ReportPage from "./report/ReportPage"
import Setting from "./tabs/Setting"
import { Link } from "react-router-dom"
import useStyles from "./styles/App"
import SearchIcon from "@material-ui/icons/Search"
import InputBase from "@material-ui/core/InputBase"
import { useDispatch, useSelector } from "react-redux"
import { reset } from "../actions"
import { SnackbarProvider } from "notistack"

export default function App() {
  const dispatch = useDispatch()
  const classes = useStyles()
  const [open, setOpen] = useState(true)

  const tableNo = useSelector(state => state.table.tableNo)
  const counter = useSelector(state => state.counter)
  if (counter <= 0) {
    dispatch(reset())
  }

  useEffect(() => {
    if (window.innerWidth <= 760) {
      setOpen(false)
    }
    return function() {}
  }, [])

  const handleDrawerOpen = () => {
    setOpen(true)
  }
  const handleDrawerClose = () => {
    setOpen(false)
  }

  return (
    <Router>
      <SnackbarProvider maxSnack={2} autoHideDuration={500}>
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
                <div className={classes.search}>
                  <div className={classes.searchIcon}>
                    <SearchIcon />
                  </div>
                  <InputBase
                    placeholder="Search…"
                    classes={{
                      root: classes.inputRoot,
                      input: classes.inputInput
                    }}
                    inputProps={{ "aria-label": "search" }}
                  />
                </div>
              </Typography>
              <Link to="/login" style={{ color: "white" }}>
                <IconButton
                  color="inherit"
                  aria-label="upload picture"
                  component="span"
                >
                  <ExitToApp />
                </IconButton>
              </Link>
            </Toolbar>
          </AppBar>
          {tableNo && (
            <AppBar
              position="fixed"
              color="primary"
              className={classes.appBarFooter}
            >
              <div
                align="center"
                style={{
                  backgroundColor: "#123456",
                  height: 30,
                  paddingTop: 5
                }}
              >
                โต๊ะ: {tableNo}&nbsp; จำนวน: {counter} รายการ
              </div>
            </AppBar>
          )}
          <Drawer
            variant="permanent"
            classes={{
              paper: clsx(
                classes.drawerPaper,
                !open && classes.drawerPaperClose
              )
            }}
            open={open}
          >
            <div
              className={classes.toolbarIcon}
              style={{
                backgroundColor: "#bc0b06",
                color: "white",
                textAlign: "center"
              }}
            >
              <Typography
                component="h1"
                variant="h6"
                color="inherit"
                noWrap
                className={classes.title}
              >
                <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                  Jeffer LOGO
                </Link>
              </Typography>
              <IconButton
                onClick={handleDrawerClose}
                style={{ color: "white" }}
              >
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
                <Route path="/table" component={TableTab} />
                <Route path="/menu/:group" component={MenuTab} />
                <Route path="/detail/:group/:code" component={MenuDetail} />
                <Route path="/order" component={OrderTab} />
                <Route path="/bill" component={BillTab} />
                <Route path="/report" component={ReportPage} />
                <Route path="/setting" component={Setting} />
              </Switch>
            </Container>
          </main>
        </div>
      </SnackbarProvider>
    </Router>
  )
}
