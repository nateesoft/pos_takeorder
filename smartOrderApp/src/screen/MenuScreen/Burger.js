import React from "react"
import { Content } from "native-base"

const Burger = props => {
  const { config, onAddOrder, ListMenuItem } = props
  const host_url = `${config.THUMBNAIL}`
  const menus = [
    {
      id: 22,
      uri: `${host_url}/burger/burger1.jpg`,
      name: "Burger",
      price: 199.0,
      description: "เบอร์เกอร์"
    },
    {
      id: 23,
      uri: `${host_url}/burger/burger2.jpg`,
      name: "Burger",
      price: 199.0,
      description: "เบอร์เกอร์"
    },
    {
      id: 24,
      uri: `${host_url}/burger/burger3.jpg`,
      name: "Burger",
      price: 199.0,
      description: "เบอร์เกอร์"
    },
    {
      id: 25,
      uri: `${host_url}/burger/burger4.jpg`,
      name: "Burger",
      price: 199.0,
      description: "เบอร์เกอร์"
    },
    {
      id: 26,
      uri: `${host_url}/burger/burger5.jpg`,
      name: "Burger",
      price: 199.0,
      description: "เบอร์เกอร์"
    },
    {
      id: 27,
      uri: `${host_url}/burger/burger6.jpg`,
      name: "Burger",
      price: 199.0,
      description: "เบอร์เกอร์"
    }
  ]
  return (
    <Content>
      <ListMenuItem menus={menus} submit={onAddOrder} />
    </Content>
  )
}

export default Burger
