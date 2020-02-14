import React from "react"
import { Content } from "native-base"
import ListMenuItem from "../../contents/ListMenuItem"
const config = require("../../../config/index")

const host_url = `${config.THUMBNAIL}`
const menus = [
  {
    id: 22,
    uri: `${host_url}/burger/burger1.jpg`,
    name: "Burger",
    price: 199.0,
    description: "เบอร์เกอร์"
  },
  {
    id: 23,
    uri: `${host_url}/burger/burger2.jpg`,
    name: "Burger",
    price: 199.0,
    description: "เบอร์เกอร์"
  },
  {
    id: 24,
    uri: `${host_url}/burger/burger3.jpg`,
    name: "Burger",
    price: 199.0,
    description: "เบอร์เกอร์"
  },
  {
    id: 25,
    uri: `${host_url}/burger/burger4.jpg`,
    name: "Burger",
    price: 199.0,
    description: "เบอร์เกอร์"
  },
  {
    id: 26,
    uri: `${host_url}/burger/burger5.jpg`,
    name: "Burger",
    price: 199.0,
    description: "เบอร์เกอร์"
  },
  {
    id: 27,
    uri: `${host_url}/burger/burger6.jpg`,
    name: "Burger",
    price: 199.0,
    description: "เบอร์เกอร์"
  }
]
const Burger = () => {
  return (
    <Content>
      <ListMenuItem menus={menus} />
    </Content>
  )
}

export default Burger
