import React, { useState, useEffect } from "react"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import InputBase from "@material-ui/core/InputBase"
import { fade, makeStyles } from "@material-ui/core/styles"
import SearchIcon from "@material-ui/icons/Search"
import IconButton from "@material-ui/core/IconButton"
import ExitToApp from "@material-ui/icons/CloseRounded"
import SearchMenu from "../apis/SearchMenu"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}))

export default function SearchPanel(props) {
  const classes = useStyles()
  const { close } = props
  const [search, setSearch] = useState("")
  const [data, setData] = useState([])

  const onSearch = () => {
    fetch(`/api/search/${search}`)
      .then((res) => res.json())
      .then(
        (response) => {
          if (response.status === "not_found") {
            setData([])
          } else {
            setData(response)
          }
        },
        (error) => {
          console.log("in error found => ", error)
        }
      )
      .catch((error) => {
        console.log("Error: (onSearch: " + error + ")")
      })
  }

  useEffect(() => {
    return function () {
      setSearch("")
      setData([])
    }
  }, [])

  const handleKey = (v) => {
    setSearch(v)
    if (search !== "") {
      onSearch()
    }
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
              value={search}
              onChange={(e) => handleKey(e.target.value)}
              onKeyUp={() => handleKey(search)}
            />
          </div>
          <IconButton
            color="inherit"
            aria-label="upload picture"
            component="span"
            onClick={() => close()}
          >
            <ExitToApp />
          </IconButton>
        </Toolbar>
        <div style={{ height: window.innerHeight, overflow: "auto" }}>
          <SearchMenu data={data} close={close} />
        </div>
      </AppBar>
    </div>
  )
}
