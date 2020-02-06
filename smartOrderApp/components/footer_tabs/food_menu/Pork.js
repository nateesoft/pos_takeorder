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
  "https://www.jeffersteak.com/img/menu/pork/pork1.jpg",
  "https://www.jeffersteak.com/img/menu/pork/pork2.jpg",
  "https://www.jeffersteak.com/img/menu/pork/pork3.jpg",
  "https://www.jeffersteak.com/img/menu/pork/pork4.jpg",
  "https://www.jeffersteak.com/img/menu/pork/pork5.jpg",
  "https://www.jeffersteak.com/img/menu/pork/pork6.jpg",
  "https://www.jeffersteak.com/img/menu/pork/pork7.jpg",
  "https://www.jeffersteak.com/img/menu/pork/pork8.jpg",
  "https://www.jeffersteak.com/img/menu/pork/pork9.jpg",
  "https://www.jeffersteak.com/img/menu/pork/pork10.jpg"
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
                <Text>Pork { index +1 }</Text>
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
