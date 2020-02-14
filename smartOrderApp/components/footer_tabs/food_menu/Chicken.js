import React from "react"
import { Content } from "native-base"
import ListMenuItem from "../../contents/ListMenuItem"
const config = require("../../../config/index")

const host_url = `${config.THUMBNAIL}`
const menus = [
  {
    id: 28,
    uri: `${host_url}/chicken/chicken1.jpg`,
    name: "Chicken",
    price: 199.0,
    description: "สเต็กไก่อันใหญ่ๆ"
  },
  {
    id: 29,
    uri: `${host_url}/chicken/chicken2.jpg`,
    name: "Chicken",
    price: 199.0,
    description: "สเต็กไก่อันใหญ่ๆ"
  },
  {
    id: 30,
    uri: `${host_url}/chicken/chicken3.jpg`,
    name: "Chicken",
    price: 199.0,
    description: "สเต็กไก่อันใหญ่ๆ"
  },
  {
    id: 31,
    uri: `${host_url}/chicken/chicken4.jpg`,
    name: "Chicken",
    price: 199.0,
    description: "สเต็กไก่อันใหญ่ๆ"
  },
  {
    id: 32,
    uri: `${host_url}/chicken/chicken5.jpg`,
    name: "Chicken",
    price: 199.0,
    description: "สเต็กไก่อันใหญ่ๆ"
  },
  {
    id: 33,
    uri: `${host_url}/chicken/chicken6.jpg`,
    name: "Chicken",
    price: 199.0,
    description: "สเต็กไก่อันใหญ่ๆ"
  }
]
const Chicken = () => {
  return (
    <Content>
      <ListMenuItem menus={menus} />
    </Content>
  )
}

export default Chicken
