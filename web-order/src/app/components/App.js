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
import LoginPage from "./login/Login"
import WelcomePage from "./tabs/Welcome"
import Setting from "./tabs/Setting"
import { Link } from "react-router-dom"
import useStyles from "./styles/App"
import SearchIcon from "@material-ui/icons/Search"
import { useSelector } from "react-redux"
import { SnackbarProvider } from "notistack"
import Button from "@material-ui/core/Button"
import SearchPanel from "../components/search"
import { makeStyles } from "@material-ui/core/styles"

require("../components/styles/App.css")

const useStyles2 = makeStyles({
  list: {
    width: 567,
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

  useEffect(() => {
    if (window.innerWidth <= 760) {
      setOpen(false)
    }
    return function () {
    }
  }, [])

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
                  โต๊ะ: {tableNo}
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
                  <img src="img/jeffer.png" alt="" width="100" />
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
                <Route path="/table" component={TableTab} />
                <Route path="/menu/:group" component={MenuTab} />
                <Route path="/detail/:group/:code" component={MenuDetail} />
                <Route path="/order" component={OrderTab} />
                <Route path="/setting" component={Setting} />
              </Switch>
            </Container>
          </main>
        </div>
      </SnackbarProvider>
    </Router>
  )
}

export default App;
