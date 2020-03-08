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
import WelcomePage from "./Welcome"
import ReportPage from "./report/ReportPage"
import QrCodeLink from "./QrCodeLink"
import Setting from "./Setting"
import { Link } from "react-router-dom"
import useStyles from "./styles/App"

export default function App() {
  const classes = useStyles()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    console.log("App startup")
    return function() {
      console.log("App cleanup")
    }
  }, [])

  const handleDrawerOpen = () => {
    setOpen(true)
  }
  const handleDrawerClose = () => {
    setOpen(false)
  }

  return (
    <Router>
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
              <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                Jeffer Steak 2020
              </Link>
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
        <Drawer
          variant="permanent"
          classes={{
            paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose)
          }}
          open={open}
        >
          <div className={classes.toolbarIcon}>
            <IconButton onClick={handleDrawerClose}>
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
              <Route path="/qrcode" component={QrCodeLink} />
              <Route path="/setting" component={Setting} />
            </Switch>
          </Container>
        </main>
      </div>
    </Router>
  )
}
