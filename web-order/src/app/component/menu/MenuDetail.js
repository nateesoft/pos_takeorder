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
import Typography from "@material-ui/core/Typography"
import { red } from "@material-ui/core/colors"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import MoreVertIcon from "@material-ui/icons/MoreVert"
import MenuSubList from "./MenuSubList"
import { Checkbox } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
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

export default function MenuDeatil(props) {
  const classes = useStyles()
  const [data, setData] = useState([])
  const [isLoader, setIsLoader] = useState(false)
  const [expanded, setExpanded] = React.useState(true)
  const group = props.match.params.group
  const code = props.match.params.code

  useEffect(() => {
    fetch(`http://172.20.10.5:5000/product/${group}/${code}`)
      .then(res => res.json())
      .then(
        result => {
          setData(result)
        },
        error => {
          setIsLoader(true)
        }
      )
  }, [code, group])

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  return (
    <div>
      {data.map(item => (
        <Card className={classes.root}>
          <CardHeader
            avatar={
              <Avatar aria-label="recipe" className={classes.avatar}>
                R
              </Avatar>
            }
            action={
              <Checkbox />
            }
            title={item.name}
            subheader={item.description}
          />
          <CardMedia
            className={classes.media}
            image={`http://172.20.10.5:5000/images${item.img_url}`}
            title="Paella dish"
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              ราคา: {item.price} บาท
            </Typography>
          </CardContent>
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
              <MenuSubList />
            </CardContent>
          </Collapse>
        </Card>
      ))}
    </div>
  )
}
