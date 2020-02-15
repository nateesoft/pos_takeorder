import React from "react"
import { Content } from "native-base"

const Dessert = props => {
  const { config, onAddOrder, ListMenuItem } = props
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
  return (
    <Content>
      <ListMenuItem menus={menus} submit={onAddOrder} />
    </Content>
  )
}

export default Dessert
