import React from "react"
import { Content } from "native-base"

const Premiumsteak = props => {
  const { config, onAddOrder, ListMenuItem } = props
  const host_url = `${config.THUMBNAIL}`
  const menus = [
    {
      id: 58,
      uri: `${host_url}/premiumsteak/1.jpg`,
      name: "Premium Steak",
      price: 199.0,
      description: "พรีเมี่ยมสเต็ก สุดอร่อย"
    },
    {
      id: 59,
      uri: `${host_url}/premiumsteak/2.jpg`,
      name: "Premium Steak",
      price: 199.0,
      description: "พรีเมี่ยมสเต็ก สุดอร่อย"
    },
    {
      id: 60,
      uri: `${host_url}/premiumsteak/3.jpg`,
      name: "Premium Steak",
      price: 199.0,
      description: "พรีเมี่ยมสเต็ก สุดอร่อย"
    },
    {
      id: 61,
      uri: `${host_url}/premiumsteak/4.jpg`,
      name: "Premium Steak",
      price: 199.0,
      description: "พรีเมี่ยมสเต็ก สุดอร่อย"
    },
    {
      id: 62,
      uri: `${host_url}/premiumsteak/5.jpg`,
      name: "Premium Steak",
      price: 199.0,
      description: "พรีเมี่ยมสเต็ก สุดอร่อย"
    },
    {
      id: 63,
      uri: `${host_url}/premiumsteak/6.jpg`,
      name: "Premium Steak",
      price: 199.0,
      description: "พรีเมี่ยมสเต็ก สุดอร่อย"
    }
  ]
  return (
    <Content>
      <ListMenuItem menus={menus} submit={onAddOrder} />
    </Content>
  )
}

export default Premiumsteak
