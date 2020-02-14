import React from "react"
import { Content } from "native-base"
import ListMenuItem from "../../contents/ListMenuItem"
const config = require("../../../config/index")

const host_url = `${config.THUMBNAIL}`
const menus = [
  {
    id: 36,
    uri: `${host_url}/dessert/dessert1.jpg`,
    name: "Dessert",
    price: 199.0,
    description: "ของหวานๆ งานของเรา"
  },
  {
    id: 37,
    uri: `${host_url}/dessert/dessert2.jpg`,
    name: "Dessert",
    price: 199.0,
    description: "ของหวานๆ งานของเรา"
  },
  {
    id: 38,
    uri: `${host_url}/dessert/dessert3.jpg`,
    name: "Dessert",
    price: 199.0,
    description: "ของหวานๆ งานของเรา"
  },
  {
    id: 39,
    uri: `${host_url}/dessert/dessert4.jpg`,
    name: "Dessert",
    price: 199.0,
    description: "ของหวานๆ งานของเรา"
  }
]
const Dessert = () => {
  return (
    <Content>
      <ListMenuItem menus={menus} />
    </Content>
  )
}

export default Dessert
