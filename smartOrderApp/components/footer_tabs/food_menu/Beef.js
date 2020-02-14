import React from "react"
import { Content } from "native-base"
import ListMenuItem from "../../contents/ListMenuItem"
const config = require("../../../config/index")

const host_url = `${config.THUMBNAIL}`
const menus = [
  {
    id: 17,
    uri: `${host_url}/beef/beef1.jpg`,
    name: "Beefs",
    price: 200.0,
    description: "เสต็กเนื้อวัว"
  },
  {
    id: 18,
    uri: `${host_url}/beef/beef2.jpg`,
    name: "Beefs",
    price: 200.0,
    description: "เสต็กเนื้อวัว"
  },
  {
    id: 19,
    uri: `${host_url}/beef/beef3.jpg`,
    name: "Beefs",
    price: 200.0,
    description: "เสต็กเนื้อวัว"
  }
]
const Beef = () => {
  return (
    <Content>
      <ListMenuItem menus={menus} />
    </Content>
  )
}

export default Beef
