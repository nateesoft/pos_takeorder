import React from "react"
import { Content } from "native-base"
import ListMenuItem from "../../contents/ListMenuItem"
const config = require("../../../config/index")

const host_url = `${config.THUMBNAIL}`
const menus = [
  {
    id: 68,
    uri: `${host_url}/soup/soup1.jpg`,
    name: "Soup",
    price: 199.0,
    description: "ซุป"
  },
  {
    id: 69,
    uri: `${host_url}/soup/soup2.jpg`,
    name: "Soup",
    price: 199.0,
    description: "ซุป"
  },
  {
    id: 70,
    uri: `${host_url}/soup/soup3.jpg`,
    name: "Soup",
    price: 199.0,
    description: "ซุป"
  },
  {
    id: 71,
    uri: `${host_url}/soup/soup4.jpg`,
    name: "Soup",
    price: 199.0,
    description: "ซุป"
  },
  {
    id: 72,
    uri: `${host_url}/soup/soup5.jpg`,
    name: "Soup",
    price: 199.0,
    description: "ซุป"
  }
]
const Soup = () => {
  return (
    <Content>
      <ListMenuItem menus={menus} />
    </Content>
  )
}

export default Soup
