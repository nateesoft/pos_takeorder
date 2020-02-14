import React from "react"
import { Content } from "native-base"
import ListMenuItem from "../../contents/ListMenuItem"
const config = require("../../../config/index")

const host_url = `${config.THUMBNAIL}`
const menus = [
  {
    id: 64,
    uri: `${host_url}/salad/salad1.jpg`,
    name: "Salad",
    price: 199.0,
    description: "สลัด"
  },
  {
    id: 65,
    uri: `${host_url}/salad/salad2.jpg`,
    name: "Salad",
    price: 199.0,
    description: "สลัด"
  },
  {
    id: 66,
    uri: `${host_url}/salad/salad3.jpg`,
    name: "Salad",
    price: 199.0,
    description: "สลัด"
  },
  {
    id: 67,
    uri: `${host_url}/salad/salad4.jpg`,
    name: "Salad",
    price: 199.0,
    description: "สลัด"
  }
]
const Salad = () => {
  return (
    <Content>
      <ListMenuItem menus={menus} />
    </Content>
  )
}

export default Salad
