
const UpdateOrder = props => {
  const { order_no, code, price, uid, specialText, subMenuCode } = props

  const updateOrderDetail = () => {
    fetch(`/api/orders_detail/${uid}/update`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        order_no,
        menu_code: code,
        price,
        uid,
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

export default UpdateOrder
