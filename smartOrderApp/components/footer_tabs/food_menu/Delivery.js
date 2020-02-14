import React from "react"
import { Content } from "native-base"
import ListMenuItem from "../../contents/ListMenuItem"
const config = require("../../../config/index")

const host_url = `${config.THUMBNAIL}`
const menus = [
  {
    id: 34,
    uri: `${host_url}/delivery/delivery1.jpg`,
    name: "Delivery",
    price: 199.0,
    description: "จัดส่งถึงที่"
  },
  {
    id: 35,
    uri: `${host_url}/delivery/delivery2.jpg`,
    name: "Delivery",
    price: 199.0,
    description: "จัดส่งถึงที่"
  }
]
const Delivery = () => {
  return (
    <Content>
      <ListMenuItem menus={menus} />
    </Content>
  )
}

export default Delivery
