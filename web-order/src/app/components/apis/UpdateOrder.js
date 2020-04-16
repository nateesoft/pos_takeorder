import { Config } from "../../../config"

export default function UpdateOrder(props) {
  const { index, specialText, subMenuCode } = props

  const updateOrderDetail = () => {
    fetch(`${Config.API_HOST}/orders_detail/${index}/update`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        index,
        qty: 1,
        special_text: specialText,
        sub_menu_code: subMenuCode,
      }),
    })
      .then(
        (response) => {},
        (error) => {
          console.log("in error found => ", error)
        }
      )
      .catch((error) => {
        console.log("Error: (AddOrder: " + error + ")")
      })
  }

  updateOrderDetail()
}
