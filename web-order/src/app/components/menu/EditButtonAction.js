import React from "react"
import Button from "@material-ui/core/Button"
import { makeStyles } from "@material-ui/core/styles"
import KeyboardReturn from "@material-ui/icons/KeyboardReturn"
import AddIcon from "@material-ui/icons/AddCircle"
import { Link } from "react-router-dom"
import { useDispatch, useSelector, connect } from "react-redux"
import { updateItem, clearItemAdd } from "../../actions"
import { useSnackbar } from "notistack"

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
}))

const EditButtonAction = props => {
  const classes = useStyles()
  const { enqueueSnackbar } = useSnackbar()
  const dispatch = useDispatch()
  const { code, price, uid, updateOrderItem } = props.item
  const { order_no } = props.table

  const specialText = useSelector(state => state.item.specialText)
  const subMenuCode = useSelector(state => state.item.subMenuCode)

  const onUpdateItem = () => {
    dispatch(updateItem(uid))
    updateOrderItem({ order_no, code, price, uid, specialText, subMenuCode })
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
        Update Order
      </Button>
    </div>
  )
}

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {
    updateOrderItem: (orderNo, code, price, uid, specialText, subMenuCode) => dispatch({
      type: 'UPDATE_ORDER_ITEM',
      payload: {
        orderNo, code, price, uid, specialText, subMenuCode
      }
    })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditButtonAction)
