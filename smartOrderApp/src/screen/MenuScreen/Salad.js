import React from "react"
import { Content } from "native-base"

const Salad = props => {
  const { config, onAddOrder, ListMenuItem } = props
  const host_url = `${config.THUMBNAIL}`
  const menus = [
    {
      id: 64,
      uri: `${host_url}/salad/salad1.jpg`,
      name: "Salad",
      price: 199.0,
      description: "สลัด"
    },
    {
      id: 65,
      uri: `${host_url}/salad/salad2.jpg`,
      name: "Salad",
      price: 199.0,
      description: "สลัด"
    },
    {
      id: 66,
      uri: `${host_url}/salad/salad3.jpg`,
      name: "Salad",
      price: 199.0,
      description: "สลัด"
    },
    {
      id: 67,
      uri: `${host_url}/salad/salad4.jpg`,
      name: "Salad",
      price: 199.0,
      description: "สลัด"
    }
  ]
  return (
    <Content>
      <ListMenuItem menus={menus} submit={onAddOrder} />
    </Content>
  )
}

export default Salad
