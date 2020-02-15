import React from "react"
import { Content } from "native-base"

const Beverage = props => {
  const { config, onAddOrder, ListMenuItem } = props
  const host_url = `${config.THUMBNAIL}`
  const menus = [
    {
      id: 20,
      uri: `${host_url}/beverage/beverage1.jpg`,
      name: "Beverage",
      price: 79.0,
      description: "เครื่องดื่ม"
    },
    {
      id: 21,
      uri: `${host_url}/beverage/beverage2.jpg`,
      name: "Beverage",
      price: 29.0,
      description: "เครื่องดื่ม"
    }
  ]
  return (
    <Content>
      <ListMenuItem menus={menus} submit={onAddOrder} />
    </Content>
  )
}

export default Beverage
