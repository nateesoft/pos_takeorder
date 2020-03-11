import { Config } from "../config"
import { increment } from "../actions"

export default function AddOrder(props) {
  const { code, name, price, dispatch } = props
  const table_no = localStorage.getItem("table_no")
  const order_no = localStorage.getItem("order_no")
  const emp_code = localStorage.getItem("emp_code")
  const cust_count = 0
  const item_count = 0
  const total_amount = 0

  const addOrder = () => {
    fetch(`${Config.API_HOST}/orders/create`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        order_no,
        table_code: table_no,
        emp_code,
        cust_count,
        item_count,
        total_amount
      })
    })
      .then(
        response => {
          addOrderDetail()
        },
        error => {
          console.log("in error found => ", error)
        }
      )
      .catch(error => {
        console.log("Error: (AddOrder: " + error + ")")
      })
  }
  const addOrderDetail = () => {
    fetch(`${Config.API_HOST}/orders_detail/create`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        index: table_no + "_" + code,
        order_no,
        menu_code: code,
        menu_name: name,
        price,
        qty: 1,
        total_amount: price
      })
    })
      .then(
        response => {
        },
        error => {
          console.log("in error found => ", error)
        }
      )
      .catch(error => {
        console.log("Error: (AddOrder: " + error + ")")
      })
  }

  addOrder()
  dispatch(increment())
}
