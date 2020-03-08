import React, { useEffect, useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import GridList from "@material-ui/core/GridList"
import GridListTile from "@material-ui/core/GridListTile"
import GridListTileBar from "@material-ui/core/GridListTileBar"
import Checkbox from "@material-ui/core/Checkbox"
import { Config } from "../../config"

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

// const tileData = [
//   {
//     img: `${Config.API_HOST}/images/appitizer/appitizer2.jpg`,
//     title: "appitizer2",
//     author: "author"
//   },
//   {
//     img: `${Config.API_HOST}/images/appitizer/appitizer3.jpg`,
//     title: "appitizer3",
//     author: "author"
//   },
//   {
//     img: `${Config.API_HOST}/images/appitizer/appitizer4.jpg`,
//     title: "appitizer4",
//     author: "author"
//   },
//   {
//     img: `${Config.API_HOST}/images/appitizer/appitizer5.jpg`,
//     title: "appitizer5",
//     author: "author"
//   },
//   {
//     img: `${Config.API_HOST}/images/appitizer/appitizer6.jpg`,
//     title: "appitizer6",
//     author: "author"
//   },
//   {
//     img: `${Config.API_HOST}/images/appitizer/appitizer7.jpg`,
//     title: "appitizer7",
//     author: "author"
//   },
//   {
//     img: `${Config.API_HOST}/images/appitizer/appitizer8.jpg`,
//     title: "appitizer8",
//     author: "author"
//   },
//   {
//     img: `${Config.API_HOST}/images/appitizer/appitizer9.jpg`,
//     title: "appitizer9",
//     author: "author"
//   }
// ]
export default function MenuSubList(props) {
  const classes = useStyles()
  const [data, setData] = useState([])

  useEffect(() => {
    console.log("MenuSubList startup")
    fetch(`${Config.API_HOST}/menu_list/${props.code}`)
      .then(res => res.json())
      .then(
        result => {
          setData(result)
        },
        error => {
          // setIsLoader(true)
        }
      )
    return function() {
      console.log("MenuSubList cleanup")
    }
  }, [props.code, props.menuCode])

  return (
    <div className={classes.root}>
      <GridList className={classes.gridList}>
        {data.map(item => (
          <GridListTile key={item.code}>
            <img
              src={`${Config.API_HOST}/images${item.img_url}`}
              alt={item.name}
            />
            <GridListTileBar
              classes={{
                root: classes.titleBar,
                title: classes.title
              }}
              actionIcon={<Checkbox style={{ color: "white" }} />}
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  )
}
