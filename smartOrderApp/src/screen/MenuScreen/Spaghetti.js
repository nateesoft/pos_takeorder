import React from "react"
import { Content } from "native-base"

const Spaghetti = props => {
  const { config, onAddOrder, ListMenuItem } = props
  const host_url = `${config.THUMBNAIL}`
  const menus = [
    {
      id: 73,
      uri: `${host_url}/spaghetti/spaghetti1.jpg`,
      name: "Spaghetti",
      price: 199.0,
      description: "สปาเก็ตตี้"
    },
    {
      id: 74,
      uri: `${host_url}/spaghetti/spaghetti2.jpg`,
      name: "Spaghetti",
      price: 199.0,
      description: "สปาเก็ตตี้"
    },
    {
      id: 75,
      uri: `${host_url}/spaghetti/spaghetti3.jpg`,
      name: "Spaghetti",
      price: 199.0,
      description: "สปาเก็ตตี้"
    },
    {
      id: 76,
      uri: `${host_url}/spaghetti/spaghetti4.jpg`,
      name: "Spaghetti",
      price: 199.0,
      description: "สปาเก็ตตี้"
    }
  ]
  return (
    <Content>
      <ListMenuItem menus={menus} submit={onAddOrder} />
    </Content>
  )
}

export default Spaghetti
