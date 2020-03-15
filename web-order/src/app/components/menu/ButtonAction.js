import React from "react"
import Button from "@material-ui/core/Button"
import { makeStyles } from "@material-ui/core/styles"
import KeyboardReturn from "@material-ui/icons/KeyboardReturn"
import AddIcon from "@material-ui/icons/AddCircle"
import { Link } from "react-router-dom"
import addOrderItem from "../../apis/AddOrder"
import { useDispatch } from "react-redux"
import { increment } from "../../actions"

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  }
}))

export default function ButtonAction(props) {
  const classes = useStyles()
  const dispatch = useDispatch()
  const { code, name, price } = props.item
  const { table_no, order_no, emp_code } = props.table

  const addNewItem = (code, name, price) => {
    addOrderItem({ code, name, price, table_no, order_no, emp_code })
    dispatch(increment())
  }

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
        onClick={() => addNewItem(code, name, price)}
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
