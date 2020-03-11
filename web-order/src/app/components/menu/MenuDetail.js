import React, { useEffect, useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import clsx from "clsx"
import Card from "@material-ui/core/Card"
import CardHeader from "@material-ui/core/CardHeader"
import CardMedia from "@material-ui/core/CardMedia"
import CardContent from "@material-ui/core/CardContent"
import CardActions from "@material-ui/core/CardActions"
import Collapse from "@material-ui/core/Collapse"
import Avatar from "@material-ui/core/Avatar"
import IconButton from "@material-ui/core/IconButton"
import { red } from "@material-ui/core/colors"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import MenuSubList from "./MenuSubList"
import ButtonAction from "./ButtonAction"
import { Config } from "../../config"
import Fastfood from "@material-ui/icons/Fastfood"
import { Redirect } from "react-router"

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  media: {
    height: 0,
    paddingTop: "56.25%"
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  }
}))

export default function MenuDetail(props) {
  const classes = useStyles()
  const [data, setData] = useState([])
  const [expanded, setExpanded] = React.useState(true)
  const group = props.match.params.group
  const code = props.match.params.code

  useEffect(() => {
    fetch(`${Config.API_HOST}/product/${group}/${code}`)
      .then(res => res.json())
      .then(
        response => {
          setData(response)
        },
        error => {
          console.log("in error found => ", error)
        }
      )
      .catch(error => {
        console.log("Error: (MenuDetail: " + error + ")")
      })
    return function() {}
  }, [code, group])

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  if (!localStorage.getItem("order_no")) {
    return <Redirect push to={`/login`} />
  }
  if (!localStorage.getItem("table_no")) {
    return <Redirect push to={`/table`} />
  }

  return (
    <div>
      {data.map((item, index) => (
        <Card className={classes.root} key={index}>
          <CardHeader
            avatar={
              <Avatar aria-label="recipe" className={classes.avatar}>
                JF
              </Avatar>
            }
            action={<Fastfood style={{ color: "blue" }} />}
            title={item.name}
            subheader={item.description}
          />
          <CardMedia
            className={classes.media}
            image={`${Config.API_HOST}/images${item.img_url}`}
            title="Paella dish"
          />
          {item.show_sublist === "Y" && (
            <div>
              <CardActions disableSpacing>
                <h4>เลือกรายการอาหารทานคู่กัน</h4>
                <IconButton
                  className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded
                  })}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </IconButton>
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <MenuSubList code={item.code} />
                </CardContent>
              </Collapse>
            </div>
          )}
          <ButtonAction group={item.group_code} item={item} />
        </Card>
      ))}
    </div>
  )
}
