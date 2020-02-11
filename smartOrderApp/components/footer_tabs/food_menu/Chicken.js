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
  Content
} from "native-base"
const config = require("../../../config/index")

const host_url = `${config.THUMBNAIL}`
const menus = [
  `${host_url}/chicken/chicken1.jpg`,
  `${host_url}/chicken/chicken2.jpg`,
  `${host_url}/chicken/chicken3.jpg`,
  `${host_url}/chicken/chicken4.jpg`,
  `${host_url}/chicken/chicken5.jpg`,
  `${host_url}/chicken/chicken6.jpg`
]
const Appitizer = () => {
  return (
    <Content>
      <List>
        {menus.map((name, index) => {
          return (
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: name }} />
              </Left>
              <Body>
                <Text>Chicken {index + 1}</Text>
                <Text note numberOfLines={1}>
                  เสต็กไก่นุ่ม
                </Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>View</Text>
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
