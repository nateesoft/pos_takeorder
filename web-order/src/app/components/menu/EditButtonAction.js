import React from "react"
import Button from "@material-ui/core/Button"
import { makeStyles } from "@material-ui/core/styles"
import KeyboardReturn from "@material-ui/icons/KeyboardReturn"
import AddIcon from "@material-ui/icons/AddCircle"
import { Link } from "react-router-dom"
import updateOrderItem from "../apis/UpdateOrder"
import { useDispatch, useSelector } from "react-redux"
import { updateItem, clearItemAdd } from "../../actions"
import { useSnackbar } from "notistack"

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}))

export default function EditButtonAction(props) {
  const classes = useStyles()
  const { enqueueSnackbar } = useSnackbar()
  const dispatch = useDispatch()
  const { index } = props.item

  const specialText = useSelector((state) => state.item.specialText)
  const subMenuCode = useSelector((state) => state.item.subMenuCode)

  const onUpdateItem = () => {
    dispatch(updateItem(index))
    updateOrderItem({
      index,
      specialText,
      subMenuCode,
    })
    dispatch(clearItemAdd())
    const variant = "success"
    enqueueSnackbar("อัพเดตรายการอาหาร", { variant })
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
        onClick={() => onUpdateItem()}
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
