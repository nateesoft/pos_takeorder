import React from "react"
import Button from "@material-ui/core/Button"
import { makeStyles } from "@material-ui/core/styles"
import KeyboardReturn from "@material-ui/icons/KeyboardReturn"
import AddIcon from "@material-ui/icons/AddCircle"
import { Link } from "react-router-dom"
import addOrderItem from "../apis/AddOrder"
import { useDispatch, useSelector } from "react-redux"
import { increment, addNewItem, clearItemAdd } from "../../actions"
import { useSnackbar } from "notistack"

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
}))

const ButtonAction = props => {
  const classes = useStyles()
  const { enqueueSnackbar } = useSnackbar()
  const dispatch = useDispatch()
  const { code, name, price } = props.item
  const { table_no, order_no, emp_code } = props.table

  const specialText = useSelector((state) => state.item.specialText)
  const subMenuCode = useSelector((state) => state.item.subMenuCode)

  const onAddNewItem = (code, name, price) => {
    dispatch(
      addNewItem({
        menu_code: code,
        menu_name: name,
        price: price,
      })
    )
    addOrderItem({
      code,
      name,
      price,
      table_no,
      order_no,
      emp_code,
      specialText,
      subMenuCode,
    })
    dispatch(increment())
    dispatch(clearItemAdd())
    const variant = "success"
    enqueueSnackbar("เพิ่มรายการอาหาร", { variant })
  }

  return (
    <div align="right">
      {props.group && (
        <Link to={`/menu/${props.group}`} style={{ textDecoration: "none" }}>
          <Button
            variant="outlined"
            className={classes.button}
            startIcon={<KeyboardReturn />}
          >
            Back
          </Button>
        </Link>
      )}
      <Button
        onClick={() => onAddNewItem(code, name, price)}
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

export default ButtonAction
