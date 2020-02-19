import React from "react"
import { Content } from "native-base"

const Recommend = props => {
  const { config, onAddOrder, ListMenuItem } = props
  const host_url = `${config.THUMBNAIL}`
  const host_full_url = `${config.FULL_IMG}`
  const menus = [
    {
      id: 102,
      uri: `${host_url}/appitizer/appitizer1.jpg`,
      uri_full: `${host_full_url}/appitizer/appitizer1.jpg`,
      name: "Recommend 01",
      price: 199.0,
      description: "เมนูแนะนำ",
      isLike: 10,
      isComment: 12
    },
    {
      id: 103,
      uri: `${host_url}/beef/beef1.jpg`,
      uri_full: `${host_full_url}/beef/beef1.jpg`,
      name: "Recommend 02",
      price: 169.0,
      description: "เมนูแนะนำ",
      isLike: 5,
      isComment: 3
    },
    {
      id: 104,
      uri: `${host_url}/burger/burger1.jpg`,
      uri_full: `${host_full_url}/burger/burger1.jpg`,
      name: "Recommend 03",
      price: 179.0,
      description: "เมนูแนะนำ",
      isLike: 6,
      isComment: 2
    },
    {
      id: 105,
      uri: `${host_url}/Chicken/Chicken1.jpg`,
      uri_full: `${host_full_url}/Chicken/Chicken1.jpg`,
      name: "Recommend 04",
      price: 399.0,
      description: "เมนูแนะนำ",
      isLike: 8,
      isComment: 1
    },
    {
      id: 106,
      uri: `${host_url}/appitizer/appitizer5.jpg`,
      uri_full: `${host_full_url}/appitizer/appitizer5.jpg`,
      name: "Recommend 05",
      price: 299.0,
      description: "เมนูแนะนำ",
      isLike: 1,
      isComment: 1
    }
  ]

  return (
    <Content>
      <ListMenuItem menus={menus} submit={onAddOrder} />
    </Content>
  )
}

export default Recommend
