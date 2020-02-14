import React from "react"
import { Content } from "native-base"
import ListMenuItem from "../../contents/ListMenuItem"
const config = require("../../../config/index")

const host_url = `${config.THUMBNAIL}`
const menus = [
  {
    id: 48,
    uri: `${host_url}/pork/pork1.jpg`,
    name: "Pork Steak",
    price: 199.0,
    description: "สเต็กหมูเนื้อนุ่ม"
  },
  {
    id: 49,
    uri: `${host_url}/pork/pork2.jpg`,
    name: "Pork Steak",
    price: 199.0,
    description: "สเต็กหมูเนื้อนุ่ม"
  },
  {
    id: 50,
    uri: `${host_url}/pork/pork3.jpg`,
    name: "Pork Steak",
    price: 199.0,
    description: "สเต็กหมูเนื้อนุ่ม"
  },
  {
    id: 51,
    uri: `${host_url}/pork/pork4.jpg`,
    name: "Pork Steak",
    price: 199.0,
    description: "สเต็กหมูเนื้อนุ่ม"
  },
  {
    id: 52,
    uri: `${host_url}/pork/pork5.jpg`,
    name: "Pork Steak",
    price: 199.0,
    description: "สเต็กหมูเนื้อนุ่ม"
  },
  {
    id: 53,
    uri: `${host_url}/pork/pork6.jpg`,
    name: "Pork Steak",
    price: 199.0,
    description: "สเต็กหมูเนื้อนุ่ม"
  },
  {
    id: 54,
    uri: `${host_url}/pork/pork7.jpg`,
    name: "Pork Steak",
    price: 199.0,
    description: "สเต็กหมูเนื้อนุ่ม"
  },
  {
    id: 55,
    uri: `${host_url}/pork/pork8.jpg`,
    name: "Pork Steak",
    price: 199.0,
    description: "สเต็กหมูเนื้อนุ่ม"
  },
  {
    id: 56,
    uri: `${host_url}/pork/pork9.jpg`,
    name: "Pork Steak",
    price: 199.0,
    description: "สเต็กหมูเนื้อนุ่ม"
  },
  {
    id: 57,
    uri: `${host_url}/pork/pork10.jpg`,
    name: "Pork Steak",
    price: 199.0,
    description: "สเต็กหมูเนื้อนุ่ม"
  }
]
const Pork = () => {
  return (
    <Content>
      <ListMenuItem menus={menus} />
    </Content>
  )
}

export default Pork
