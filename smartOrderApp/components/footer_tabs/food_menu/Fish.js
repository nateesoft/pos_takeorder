import React from "react"
import { Content } from "native-base"
import ListMenuItem from "../../contents/ListMenuItem"
const config = require("../../../config/index")

const host_url = `${config.THUMBNAIL}`
const menus = [
  {
    id: 40,
    uri: `${host_url}/fish/fish1.jpg`,
    name: "Fish Steak",
    price: 199.0,
    description: "สเต็กเนื้อปลาจร้า"
  },
  {
    id: 41,
    uri: `${host_url}/fish/fish2.jpg`,
    name: "Fish Steak",
    price: 199.0,
    description: "สเต็กเนื้อปลาจร้า"
  },
  {
    id: 42,
    uri: `${host_url}/fish/fish3.jpg`,
    name: "Fish Steak",
    price: 199.0,
    description: "สเต็กเนื้อปลาจร้า"
  },
  {
    id: 43,
    uri: `${host_url}/fish/fish4.jpg`,
    name: "Fish Steak",
    price: 199.0,
    description: "สเต็กเนื้อปลาจร้า"
  },
  {
    id: 44,
    uri: `${host_url}/fish/fish5.jpg`,
    name: "Fish Steak",
    price: 199.0,
    description: "สเต็กเนื้อปลาจร้า"
  }
]
const Fish = () => {
  return (
    <Content>
      <ListMenuItem menus={menus} />
    </Content>
  )
}

export default Fish
