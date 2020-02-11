import React from "react"
import {
  Button,
  Text,
  Left,
  Body,
  Right,
  List,
  ListItem,
  Thumbnail,
  Content,
  Toast
} from "native-base"
const config = require("../../../config/index")

const host_url = `${config.THUMBNAIL}`
const menus = [
  {
    uri: `${host_url}/appitizer/appitizer1.jpg`,
    name: "Appitizers",
    price: 199.0,
    description: "รับอาหารว่างทานเล่นกันก่อน"
  },
  {
    uri: `${host_url}/appitizer/appitizer2.jpg`,
    name: "Appitizers",
    price: 169.0,
    description: "รับอาหารว่างทานเล่นกันก่อน"
  },
  {
    uri: `${host_url}/appitizer/appitizer3.jpg`,
    name: "Appitizers Normal",
    price: 179.0,
    description: "รับอาหารว่างทานเล่นกันก่อน"
  },
  {
    uri: `${host_url}/appitizer/appitizer4.jpg`,
    name: "Appitizers Super Set",
    price: 399.0,
    description: "รับอาหารว่างทานเล่นกันก่อน"
  },
  {
    uri: `${host_url}/appitizer/appitizer5.jpg`,
    name: "Appitizers",
    price: 299.0,
    description: "รับอาหารว่างทานเล่นกันก่อน"
  },
  {
    uri: `${host_url}/appitizer/appitizer6.jpg`,
    name: "Appitizers",
    price: 100.0,
    description: "รับอาหารว่างทานเล่นกันก่อน"
  },
  {
    uri: `${host_url}/appitizer/appitizer7.jpg`,
    name: "Appitizers",
    price: 99.0,
    description: "รับอาหารว่างทานเล่นกันก่อน"
  },
  {
    uri: `${host_url}/appitizer/appitizer8.jpg`,
    name: "Appitizers",
    price: 79.0,
    description: "รับอาหารว่างทานเล่นกันก่อน"
  },
  {
    uri: `${host_url}/appitizer/appitizer9.jpg`,
    name: "Appitizers",
    price: 199.0,
    description: "รับอาหารว่างทานเล่นกันก่อน"
  },
  {
    uri: `${host_url}/appitizer/appitizer10.jpg`,
    name: "Appitizers",
    price: 89.0,
    description: "รับอาหารว่างทานเล่นกันก่อน"
  },
  {
    uri: `${host_url}/appitizer/appitizer11.jpg`,
    name: "Appitizers",
    price: 139.0,
    description: "รับอาหารว่างทานเล่นกันก่อน"
  },
  {
    uri: `${host_url}/appitizer/appitizer12.jpg`,
    name: "Appitizers",
    price: 139.0,
    description: "รับอาหารว่างทานเล่นกันก่อน"
  },
  {
    uri: `${host_url}/appitizer/appitizer13.jpg`,
    name: "Appitizers",
    price: 119.0,
    description: "รับอาหารว่างทานเล่นกันก่อน"
  },
  {
    uri: `${host_url}/appitizer/appitizer14.jpg`,
    name: "Appitizers",
    price: 129.0,
    description: "รับอาหารว่างทานเล่นกันก่อน"
  },
  {
    uri: `${host_url}/appitizer/appitizer15.jpg`,
    name: "Appitizers",
    price: 109.0,
    description: "รับอาหารว่างทานเล่นกันก่อน"
  }
]
const Appitizer = () => {
  return (
    <Content>
      <List>
        {menus.map((name, index) => {
          return (
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: name.uri }} />
              </Left>
              <Body>
                <Text>
                  {name.name} ${name.price}
                </Text>
                <Text note numberOfLines={1}>
                  {name.description}
                </Text>
              </Body>
              <Right>
                <Button
                  success
                  onPress={() =>
                    Toast.show({
                      text: `${name.uri}`,
                      buttonText: "Okay",
                      buttonStyle: { backgroundColor: "#5cb85c" }
                    })
                  }
                >
                  <Text>Add</Text>
                </Button>
              </Right>
            </ListItem>
          )
        })}
      </List>
    </Content>
  )
}

export default Appitizer
