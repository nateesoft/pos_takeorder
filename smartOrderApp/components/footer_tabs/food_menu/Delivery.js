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
  `${host_url}/delivery/delivery1.jpg`,
  `${host_url}/delivery/delivery2.jpg`
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
                <Text>Delivery {index + 1}</Text>
                <Text note numberOfLines={1}>
                  Super smart food so yummy
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
