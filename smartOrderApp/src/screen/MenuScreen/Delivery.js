import React from "react"
import { Content } from "native-base"

const Delivery = props => {
  const { config, onAddOrder, ListMenuItem } = props
  const host_url = `${config.THUMBNAIL}`
  const menus = [
    {
      id: 34,
      uri: `${host_url}/delivery/delivery1.jpg`,
      name: "Delivery",
      price: 199.0,
      description: "จัดส่งถึงที่"
    },
    {
      id: 35,
      uri: `${host_url}/delivery/delivery2.jpg`,
      name: "Delivery",
      price: 199.0,
      description: "จัดส่งถึงที่"
    }
  ]
  return (
    <Content>
      <ListMenuItem menus={menus} submit={onAddOrder} />
    </Content>
  )
}

export default Delivery
