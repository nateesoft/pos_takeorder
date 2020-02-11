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
  `${host_url}/burger/burger1.jpg`,
  `${host_url}/burger/burger2.jpg`,
  `${host_url}/burger/burger3.jpg`,
  `${host_url}/burger/burger4.jpg`,
  `${host_url}/burger/burger5.jpg`,
  `${host_url}/burger/burger6.jpg`
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
                <Text>Burger {index + 1}</Text>
                <Text note numberOfLines={1}>
                  เบอร์เกอร์
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
