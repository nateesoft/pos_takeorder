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

const menus = [
  "https://www.jeffersteak.com/img/menu/fish/fish1.jpg",
  "https://www.jeffersteak.com/img/menu/fish/fish2.jpg",
  "https://www.jeffersteak.com/img/menu/fish/fish3.jpg",
  "https://www.jeffersteak.com/img/menu/fish/fish4.jpg",
  "https://www.jeffersteak.com/img/menu/fish/fish5.jpg"
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
                <Text>Fish { index +1 }</Text>
                <Text note numberOfLines={1}>
                  เสต็กปลา
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
