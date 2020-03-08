import { Config } from "../config"

export default function AddOrder(code, name, price) {
  const order_no = "00001"
  fetch(`${Config.API_HOST}/orders_detail/create`, {
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
  console.log(`Add item success: ${code}`)
}
