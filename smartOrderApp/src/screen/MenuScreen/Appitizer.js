import React from "react"
import { Content } from "native-base"

const Appitizer = props => {
  const { config, onAddOrder, ListMenuItem } = props
  const host_url = `${config.THUMBNAIL}`
  const menus = [
    {
      id: 1,
      uri: `${host_url}/appitizer/appitizer1.jpg`,
      name: "Appitizers",
      price: 199.0,
      description: "รับอาหารว่างทานเล่นกันก่อน"
    },
    {
      id: 2,
      uri: `${host_url}/appitizer/appitizer2.jpg`,
      name: "Appitizers",
      price: 169.0,
      description: "รับอาหารว่างทานเล่นกันก่อน"
    },
    {
      id: 3,
      uri: `${host_url}/appitizer/appitizer3.jpg`,
      name: "Appitizers Normal",
      price: 179.0,
      description: "รับอาหารว่างทานเล่นกันก่อน"
    },
    {
      id: 4,
      uri: `${host_url}/appitizer/appitizer4.jpg`,
      name: "Appitizers Super Set",
      price: 399.0,
      description: "รับอาหารว่างทานเล่นกันก่อน"
    },
    {
      id: 5,
      uri: `${host_url}/appitizer/appitizer5.jpg`,
      name: "Appitizers",
      price: 299.0,
      description: "รับอาหารว่างทานเล่นกันก่อน"
    },
    {
      id: 6,
      uri: `${host_url}/appitizer/appitizer6.jpg`,
      name: "Appitizers",
      price: 100.0,
      description: "รับอาหารว่างทานเล่นกันก่อน"
    },
    {
      id: 7,
      uri: `${host_url}/appitizer/appitizer7.jpg`,
      name: "Appitizers",
      price: 99.0,
      description: "รับอาหารว่างทานเล่นกันก่อน"
    },
    {
      id: 8,
      uri: `${host_url}/appitizer/appitizer8.jpg`,
      name: "Appitizers",
      price: 79.0,
      description: "รับอาหารว่างทานเล่นกันก่อน"
    },
    {
      id: 9,
      uri: `${host_url}/appitizer/appitizer9.jpg`,
      name: "Appitizers",
      price: 199.0,
      description: "รับอาหารว่างทานเล่นกันก่อน"
    },
    {
      id: 10,
      uri: `${host_url}/appitizer/appitizer10.jpg`,
      name: "Appitizers",
      price: 89.0,
      description: "รับอาหารว่างทานเล่นกันก่อน"
    },
    {
      id: 11,
      uri: `${host_url}/appitizer/appitizer11.jpg`,
      name: "Appitizers",
      price: 139.0,
      description: "รับอาหารว่างทานเล่นกันก่อน"
    },
    {
      id: 12,
      uri: `${host_url}/appitizer/appitizer12.jpg`,
      name: "Appitizers",
      price: 139.0,
      description: "รับอาหารว่างทานเล่นกันก่อน"
    },
    {
      id: 13,
      uri: `${host_url}/appitizer/appitizer13.jpg`,
      name: "Appitizers",
      price: 119.0,
      description: "รับอาหารว่างทานเล่นกันก่อน"
    },
    {
      id: 14,
      uri: `${host_url}/appitizer/appitizer14.jpg`,
      name: "Appitizers",
      price: 129.0,
      description: "รับอาหารว่างทานเล่นกันก่อน"
    },
    {
      id: 15,
      uri: `${host_url}/appitizer/appitizer15.jpg`,
      name: "Appitizers",
      price: 109.0,
      description: "รับอาหารว่างทานเล่นกันก่อน"
    },
    {
      id: 16,
      uri: `${host_url}/appitizer/appitizer15.jpg`,
      name: "Test",
      price: 109.0,
      description: "Test"
    }
  ]

  return (
    <Content>
      <ListMenuItem menus={menus} submit={onAddOrder} />
    </Content>
  )
}

export default Appitizer
