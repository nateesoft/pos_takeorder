import React from "react"
import Button from "@material-ui/core/Button"
import { makeStyles } from "@material-ui/core/styles"
import KeyboardReturn from "@material-ui/icons/KeyboardReturn"
import AddIcon from "@material-ui/icons/AddCircle"
import { Link } from "react-router-dom"
import { useDispatch, useSelector, connect } from "react-redux"
import { addNewItem, clearItemAdd } from "../../actions"
import { useSnackbar } from "notistack"

const { ADD_NEW_ORDER } = require('../../actions/constants')

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
}))

const ButtonAction = props => {
  const classes = useStyles()
  const { enqueueSnackbar } = useSnackbar()
  const dispatch = useDispatch()
  const { group, item, table, addOrderItem } = props
  const { code, name, price } = item
  const { table_no, order_no, emp_code } = table

  const specialText = useSelector((state) => state.item.specialText)
  const subMenuCode = useSelector((state) => state.item.subMenuCode)

  const r_etd = 'E';//useSelector((state) => state.table.r_etd)

  const onAddNewItem = (code, name, price) => {
    dispatch(
      addNewItem({
        menu_code: code,
        menu_name: name,
        price: price,
      })
    )
    addOrderItem(code, name, price, table_no, order_no, emp_code, specialText, subMenuCode, r_etd)
    dispatch(clearItemAdd())
    const variant = "success"
    enqueueSnackbar("เพิ่มรายการอาหาร", { variant })
  }

  return (
    <div align="right">
      {group && (
        <Link to={`/menu/${group}`} style={{ textDecoration: "none" }}>
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

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {
    addOrderItem: (
      code,name,price,table_no,order_no,
      emp_code,specialText,subMenuCode,r_etd) => dispatch({
      type: ADD_NEW_ORDER,
      payload: {
        code,
        name,
        price,
        tableNo: table_no,
        orderNo: order_no,
        empCode: emp_code,
        specialText,
        subMenuCode,
        r_etd
      }
    }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ButtonAction)
