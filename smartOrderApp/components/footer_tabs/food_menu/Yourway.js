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
  `${host_url}/yourway/yourway1.jpg`,
  `${host_url}/yourway/yourway2.jpg`,
  `${host_url}/yourway/yourway3.jpg`,
  `${host_url}/yourway/yourway4.jpg`,
  `${host_url}/yourway/yourway5.jpg`,
  `${host_url}/yourway/yourway6.jpg`,
  `${host_url}/yourway/yourway7.jpg`,
  `${host_url}/yourway/yourway8.jpg`,
  `${host_url}/yourway/yourway9.jpg`,
  `${host_url}/yourway/yourway10.jpg`,
  `${host_url}/yourway/yourway11.jpg`,
  `${host_url}/yourway/yourway12.jpg`,
  `${host_url}/yourway/yourway13.jpg`,
  `${host_url}/yourway/yourway14.jpg`,
  `${host_url}/yourway/yourway15.jpg`,
  `${host_url}/yourway/yourway16.jpg`,
  `${host_url}/yourway/yourway17.jpg`,
  `${host_url}/yourway/yourway18.jpg`,
  `${host_url}/yourway/yourway19.jpg`,
  `${host_url}/yourway/yourway20.jpg`,
  `${host_url}/yourway/yourway21.jpg`,
  `${host_url}/yourway/yourway22.jpg`,
  `${host_url}/yourway/yourway23.jpg`,
  `${host_url}/yourway/yourway24.jpg`,
  `${host_url}/yourway/yourway25.jpg`
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
                <Text>Yourway {index + 1}</Text>
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
