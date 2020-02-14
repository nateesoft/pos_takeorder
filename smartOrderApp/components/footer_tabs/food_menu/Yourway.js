import React from "react"
import { Content } from "native-base"
import ListMenuItem from "../../contents/ListMenuItem"
const config = require("../../../config/index")

const host_url = `${config.THUMBNAIL}`
const menus = [
  {
    id: 77,
    uri: `${host_url}/yourway/yourway1.jpg`,
    name: "Yourway Selection",
    price: 123.0,
    description: "เลือกได้ตามใจคุณ"
  },
  {
    id: 78,
    uri: `${host_url}/yourway/yourway2.jpg`,
    name: "Yourway Selection",
    price: 123.0,
    description: "เลือกได้ตามใจคุณ"
  },
  {
    id: 79,
    uri: `${host_url}/yourway/yourway3.jpg`,
    name: "Yourway Selection",
    price: 123.0,
    description: "เลือกได้ตามใจคุณ"
  },
  {
    id: 80,
    uri: `${host_url}/yourway/yourway4.jpg`,
    name: "Yourway Selection",
    price: 123.0,
    description: "เลือกได้ตามใจคุณ"
  },
  {
    id: 81,
    uri: `${host_url}/yourway/yourway5.jpg`,
    name: "Yourway Selection",
    price: 123.0,
    description: "เลือกได้ตามใจคุณ"
  },
  {
    id: 82,
    uri: `${host_url}/yourway/yourway6.jpg`,
    name: "Yourway Selection",
    price: 123.0,
    description: "เลือกได้ตามใจคุณ"
  },
  {
    id: 83,
    uri: `${host_url}/yourway/yourway7.jpg`,
    name: "Yourway Selection",
    price: 123.0,
    description: "เลือกได้ตามใจคุณ"
  },
  {
    id: 84,
    uri: `${host_url}/yourway/yourway8.jpg`,
    name: "Yourway Selection",
    price: 123.0,
    description: "เลือกได้ตามใจคุณ"
  },
  {
    id: 85,
    uri: `${host_url}/yourway/yourway9.jpg`,
    name: "Yourway Selection",
    price: 123.0,
    description: "เลือกได้ตามใจคุณ"
  },
  {
    id: 86,
    uri: `${host_url}/yourway/yourway10.jpg`,
    name: "Yourway Selection",
    price: 123.0,
    description: "เลือกได้ตามใจคุณ"
  },
  {
    id: 87,
    uri: `${host_url}/yourway/yourway11.jpg`,
    name: "Yourway Selection",
    price: 123.0,
    description: "เลือกได้ตามใจคุณ"
  },
  {
    id: 88,
    uri: `${host_url}/yourway/yourway12.jpg`,
    name: "Yourway Selection",
    price: 123.0,
    description: "เลือกได้ตามใจคุณ"
  },
  {
    id: 89,
    uri: `${host_url}/yourway/yourway13.jpg`,
    name: "Yourway Selection",
    price: 123.0,
    description: "เลือกได้ตามใจคุณ"
  },
  {
    id: 90,
    uri: `${host_url}/yourway/yourway14.jpg`,
    name: "Yourway Selection",
    price: 123.0,
    description: "เลือกได้ตามใจคุณ"
  },
  {
    id: 91,
    uri: `${host_url}/yourway/yourway15.jpg`,
    name: "Yourway Selection",
    price: 123.0,
    description: "เลือกได้ตามใจคุณ"
  },
  {
    id: 92,
    uri: `${host_url}/yourway/yourway16.jpg`,
    name: "Yourway Selection",
    price: 123.0,
    description: "เลือกได้ตามใจคุณ"
  },
  {
    id: 93,
    uri: `${host_url}/yourway/yourway17.jpg`,
    name: "Yourway Selection",
    price: 123.0,
    description: "เลือกได้ตามใจคุณ"
  },
  {
    id: 94,
    uri: `${host_url}/yourway/yourway18.jpg`,
    name: "Yourway Selection",
    price: 123.0,
    description: "เลือกได้ตามใจคุณ"
  },
  {
    id: 95,
    uri: `${host_url}/yourway/yourway19.jpg`,
    name: "Yourway Selection",
    price: 123.0,
    description: "เลือกได้ตามใจคุณ"
  },
  {
    id: 96,
    uri: `${host_url}/yourway/yourway20.jpg`,
    name: "Yourway Selection",
    price: 123.0,
    description: "เลือกได้ตามใจคุณ"
  },
  {
    id: 97,
    uri: `${host_url}/yourway/yourway21.jpg`,
    name: "Yourway Selection",
    price: 123.0,
    description: "เลือกได้ตามใจคุณ"
  },
  {
    id: 98,
    uri: `${host_url}/yourway/yourway22.jpg`,
    name: "Yourway Selection",
    price: 123.0,
    description: "เลือกได้ตามใจคุณ"
  },
  {
    id: 99,
    uri: `${host_url}/yourway/yourway23.jpg`,
    name: "Yourway Selection",
    price: 123.0,
    description: "เลือกได้ตามใจคุณ"
  },
  {
    id: 100,
    uri: `${host_url}/yourway/yourway24.jpg`,
    name: "Yourway Selection",
    price: 123.0,
    description: "เลือกได้ตามใจคุณ"
  },
  {
    id: 101,
    uri: `${host_url}/yourway/yourway25.jpg`,
    name: "Yourway Selection",
    price: 123.0,
    description: "เลือกได้ตามใจคุณ"
  }
]
const Yourway = () => {
  return (
    <Content>
      <ListMenuItem menus={menus} />
    </Content>
  )
}

export default Yourway
