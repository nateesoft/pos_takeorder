import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import GridList from "@material-ui/core/GridList"
import GridListTile from "@material-ui/core/GridListTile"
import GridListTileBar from "@material-ui/core/GridListTileBar"
import IconButton from "@material-ui/core/IconButton"
import Checkbox from "@material-ui/core/Checkbox"
import StarBorderIcon from "@material-ui/icons/StarBorder"
// import tileData from "./tileData"

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    flexWrap: "nowrap",
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)"
  },
  title: {
    color: theme.palette.primary.light
  },
  titleBar: {
    background:
      "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)"
  }
}))

const tileData = [
  {
    img: "http://172.20.10.5:5000/images/appitizer/appitizer2.jpg",
    title: "appitizer2",
    author: "author"
  },
  {
    img: "http://172.20.10.5:5000/images/appitizer/appitizer3.jpg",
    title: "appitizer3",
    author: "author"
  },
  {
    img: "http://172.20.10.5:5000/images/appitizer/appitizer4.jpg",
    title: "appitizer4",
    author: "author"
  },
  {
    img: "http://172.20.10.5:5000/images/appitizer/appitizer5.jpg",
    title: "appitizer5",
    author: "author"
  },
  {
    img: "http://172.20.10.5:5000/images/appitizer/appitizer6.jpg",
    title: "appitizer6",
    author: "author"
  },
  {
    img: "http://172.20.10.5:5000/images/appitizer/appitizer7.jpg",
    title: "appitizer7",
    author: "author"
  },
  {
    img: "http://172.20.10.5:5000/images/appitizer/appitizer8.jpg",
    title: "appitizer8",
    author: "author"
  },
  {
    img: "http://172.20.10.5:5000/images/appitizer/appitizer9.jpg",
    title: "appitizer9",
    author: "author"
  }
]
export default function MenuSubList() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <GridList className={classes.gridList}>
        {tileData.map(tile => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              classes={{
                root: classes.titleBar,
                title: classes.title
              }}
              actionIcon={
                <Checkbox style={{color: "white"}} />
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  )
}
