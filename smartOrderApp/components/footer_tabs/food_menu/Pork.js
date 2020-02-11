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
  `${host_url}/pork/pork1.jpg`,
  `${host_url}/pork/pork2.jpg`,
  `${host_url}/pork/pork3.jpg`,
  `${host_url}/pork/pork4.jpg`,
  `${host_url}/pork/pork5.jpg`,
  `${host_url}/pork/pork6.jpg`,
  `${host_url}/pork/pork7.jpg`,
  `${host_url}/pork/pork8.jpg`,
  `${host_url}/pork/pork9.jpg`,
  `${host_url}/pork/pork10.jpg`
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
                <Text>Pork {index + 1}</Text>
                <Text note numberOfLines={1}>
                  เสต็กเนื้อหมู
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
