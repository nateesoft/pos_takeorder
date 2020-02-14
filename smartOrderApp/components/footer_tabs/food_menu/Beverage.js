import React from "react"
import { Content } from "native-base"
import ListMenuItem from "../../contents/ListMenuItem"
const config = require("../../../config/index")

const host_url = `${config.THUMBNAIL}`
const menus = [
  {
    id: 20,
    uri: `${host_url}/beverage/beverage1.jpg`,
    name: "Beverage",
    price: 79.0,
    description: "เครื่องดื่ม"
  },
  {
    id: 21,
    uri: `${host_url}/beverage/beverage2.jpg`,
    name: "Beverage",
    price: 29.0,
    description: "เครื่องดื่ม"
  }
]
const Beverage = () => {
  return (
    <Content>
      <ListMenuItem menus={menus} />
    </Content>
  )
}

export default Beverage
