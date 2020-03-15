import React from "react"
import Button from "@material-ui/core/Button"
import { makeStyles } from "@material-ui/core/styles"
import KeyboardReturn from "@material-ui/icons/KeyboardReturn"
import AddIcon from "@material-ui/icons/AddCircle"
import { Link } from "react-router-dom"
import addOrderItem from "../../apis/AddOrder"
import { useDispatch } from "react-redux"

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  }
}))

export default function ButtonAction(props) {
  const dispatch = useDispatch()
  const classes = useStyles()
  const { code, name, price } = props.item

  return (
    <div align="right">
      <Link to={`/menu/${props.group}`} style={{ textDecoration: "none" }}>
        <Button
          variant="outlined"
          className={classes.button}
          startIcon={<KeyboardReturn />}
        >
          Back
        </Button>
      </Link>
      <Button
        onClick={() => addOrderItem({ code, name, price, dispatch })}
        variant="contained"
        color="primary"
        className={classes.button}
        style={{ background: "green" }}
        startIcon={<AddIcon />}
      >
        Add Order
      </Button>
    </div>
  )
}
