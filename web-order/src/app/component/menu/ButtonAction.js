import React from "react"
import Button from "@material-ui/core/Button"
import { makeStyles } from "@material-ui/core/styles"
import KeyboardReturn from "@material-ui/icons/KeyboardReturn"
import AddIcon from "@material-ui/icons/AddCircle"
import { Link } from "react-router-dom"

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  }
}))

const addOrderItem = (code, name, price) => {
  const order_no = "00001"
  fetch(`http://localhost:5000/orders_detail/create`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      index: order_no + "/" + code,
      order_no,
      menu_code: code,
      menu_name: name,
      price,
      qty: 1,
      total_amount: price
    })
  })
  alert("Add item success")
}

export default props => {
  const classes = useStyles()
  const { code, name, price } = props.item

  return (
    <div>
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
        onClick={() => addOrderItem(code, name, price)}
        variant="contained"
        color="primary"
        className={classes.button}
        style={{ background: "green" }}
        startIcon={<AddIcon />}
      >
        Add
      </Button>
    </div>
  )
}
