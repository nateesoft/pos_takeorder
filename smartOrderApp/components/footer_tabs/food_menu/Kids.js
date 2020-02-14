import React from "react"
import { Content } from "native-base"
import ListMenuItem from "../../contents/ListMenuItem"
const config = require("../../../config/index")

const host_url = `${config.THUMBNAIL}`
const menus = [
  {
    id: 45,
    uri: `${host_url}/kids/kids1.jpg`,
    name: "Kids Menu",
    price: 199.0,
    description: "เมนูสำหรับคุณหนู"
  },
  {
    id: 46,
    uri: `${host_url}/kids/kids2.jpg`,
    name: "Kids Menu",
    price: 199.0,
    description: "เมนูสำหรับคุณหนู"
  },
  {
    id: 47,
    uri: `${host_url}/kids/kids3.jpg`,
    name: "Kids Menu",
    price: 199.0,
    description: "เมนูสำหรับคุณหนู"
  }
]
const Kids = () => {
  return (
    <Content>
      <ListMenuItem menus={menus} />
    </Content>
  )
}

export default Kids
