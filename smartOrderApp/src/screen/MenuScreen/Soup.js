import React from "react"
import { Content } from "native-base"

const Soup = props => {
  const { config, onAddOrder, ListMenuItem } = props
  const host_url = `${config.THUMBNAIL}`
  const menus = [
    {
      id: 68,
      uri: `${host_url}/soup/soup1.jpg`,
      name: "Soup",
      price: 199.0,
      description: "ซุป"
    },
    {
      id: 69,
      uri: `${host_url}/soup/soup2.jpg`,
      name: "Soup",
      price: 199.0,
      description: "ซุป"
    },
    {
      id: 70,
      uri: `${host_url}/soup/soup3.jpg`,
      name: "Soup",
      price: 199.0,
      description: "ซุป"
    },
    {
      id: 71,
      uri: `${host_url}/soup/soup4.jpg`,
      name: "Soup",
      price: 199.0,
      description: "ซุป"
    },
    {
      id: 72,
      uri: `${host_url}/soup/soup5.jpg`,
      name: "Soup",
      price: 199.0,
      description: "ซุป"
    }
  ]
  return (
    <Content>
      <ListMenuItem menus={menus} submit={onAddOrder} />
    </Content>
  )
}

export default Soup
