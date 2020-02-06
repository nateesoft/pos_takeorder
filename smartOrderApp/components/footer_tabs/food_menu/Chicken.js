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
  "https://www.jeffersteak.com/img/menu/chicken/chicken1.jpg",
  "https://www.jeffersteak.com/img/menu/chicken/chicken2.jpg",
  "https://www.jeffersteak.com/img/menu/chicken/chicken3.jpg",
  "https://www.jeffersteak.com/img/menu/chicken/chicken4.jpg",
  "https://www.jeffersteak.com/img/menu/chicken/chicken5.jpg",
  "https://www.jeffersteak.com/img/menu/chicken/chicken6.jpg"
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
                <Text>Chicken { index +1 }</Text>
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
